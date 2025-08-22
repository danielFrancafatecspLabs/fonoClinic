function Footer() {
  return (
    <footer
      className="py-4 text-center site-footer"
      style={{ background: "var(--brand-primary)", color: "#fff" }}
    >
      <div className="container d-flex justify-content-between align-items-center flex-column flex-md-row gap-2">
        <div>
          <strong className="brand-title" style={{ color: "#fff" }}>
            <span className="brand-title">FonoTea</span>
          </strong>
          <div className="small" style={{ color: "rgba(255,255,255,0.9)" }}>
            Contato: (11) 96573-0856 • atendimento@fonotea.com
          </div>
        </div>
        <div>
          <small>
            © {new Date().getFullYear()}{" "}
            <span className="brand-title">FonoTea</span>. Todos os direitos
            reservados.
          </small>
        </div>
      </div>
      <style>{`
        .site-footer { border-top: 4px solid rgba(255,255,255,0.06); }
        .site-footer a { color: rgba(255,255,255,0.95); }
        .site-footer a:hover { color: #fff; text-decoration: underline; }
      `}</style>
    </footer>
  );
}
export default Footer;
