// Simple newsletter backend: send welcome email and schedule 7-day reminder
const express = require("express");
const path = require("path");
const bodyParser = require("body-parser");
const sgMail = require("@sendgrid/mail");

const app = express();
const PORT = process.env.PORT || 4000;

if (process.env.SENDGRID_API_KEY) {
  sgMail.setApiKey(process.env.SENDGRID_API_KEY);
}

app.use(bodyParser.json());

// simple in-memory queue for reminders (non-persistent)
const reminders = [];

app.post("/api/newsletter", async (req, res) => {
  const { email } = req.body || {};
  if (!email) return res.status(400).json({ error: "Email required" });

  // send welcome email if sendgrid configured
  if (process.env.SENDGRID_API_KEY) {
    const msg = {
      to: email,
      from: process.env.SENDGRID_FROM || "atendimento@fonotea.com",
      subject: "Bem-vindo à FonoTea — Conheça nossos serviços",
      html: `
        <div style="font-family: Arial, Helvetica, sans-serif; color: #243142;">
          <img src="${
            process.env.SITE_URL || "https://example.com"
          }/assets/fonotea_logo.png" alt="FonoTea" style="height:48px;" />
          <h2>Bem-vindo à FonoTea</h2>
          <p>Obrigado por se inscrever. Oferecemos avaliação fonoaudiológica, terapia com equipe multidisciplinar e planos personalizados para o desenvolvimento infantil.</p>
          <p>Se quiser falar conosco agora, clique abaixo:</p>
          <p>
            <a href="https://wa.me/5511965730856" target="_blank">Conversar no WhatsApp</a>
            &nbsp;•&nbsp;
            <a href="https://www.instagram.com/fonotea_service?igsh=MXZlNTB0aWVmZGliNw==" target="_blank">Instagram</a>
          </p>
        </div>
      `,
    };

    try {
      await sgMail.send(msg);
    } catch (err) {
      console.error(
        "SendGrid error:",
        err?.response?.body || err.message || err
      );
    }
  }

  // schedule a reminder in 7 days (in-memory)
  const remindAt = Date.now() + 7 * 24 * 60 * 60 * 1000;
  reminders.push({ email, remindAt });

  return res.json({ message: "Inscrição recebida. Obrigado!" });
});

// lightweight runner to flush reminders (in-memory). In production use a job queue.
setInterval(async () => {
  const now = Date.now();
  const due = reminders.filter((r) => r.remindAt <= now);
  for (const r of due) {
    try {
      if (process.env.SENDGRID_API_KEY) {
        await sgMail.send({
          to: r.email,
          from: process.env.SENDGRID_FROM || "atendimento@fonotea.com",
          subject: "Lembrete: agende a consulta na FonoTea",
          html: `
            <div style="font-family: Arial, Helvetica, sans-serif; color: #243142;">
              <h2>Olá!</h2>
              <p>Este é um lembrete amigável para agendar a consulta com nossa equipe — estamos prontos para ajudar seu filho a evoluir.</p>
              <p><a href="https://wa.me/5511965730856">Agendar pelo WhatsApp</a></p>
            </div>
          `,
        });
      }
    } catch (err) {
      console.error(
        "Error sending reminder:",
        err?.response?.body || err.message || err
      );
    }
  }
  // remove sent reminders
  for (const r of due) {
    const idx = reminders.indexOf(r);
    if (idx !== -1) reminders.splice(idx, 1);
  }
}, 60 * 1000); // check every minute

// serve static build if present
app.use(express.static(path.join(__dirname, "..", "build")));
app.get("*", (req, res) => {
  const index = path.join(__dirname, "..", "build", "index.html");
  res.sendFile(index, (err) => {
    if (err) res.status(500).send(err);
  });
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
