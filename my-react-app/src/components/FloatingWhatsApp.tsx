import React from "react";

const FloatingWhatsApp: React.FC = () => {
  return (
    <a
      href="https://wa.me/5511965730856"
      target="_blank"
      rel="noreferrer"
      className="float"
      aria-label="WhatsApp"
    >
      <img
        src="/assets/icon_whatsapp.png"
        alt="WhatsApp"
        style={{ width: 44, height: 44, objectFit: "contain" }}
      />
      <style>{`
        .float { position: fixed; width: 70px; height: 70px; bottom: 40px; right: 40px; background: linear-gradient(90deg, var(--brand-accent), var(--brand-primary)); color: #fff; border-radius: 50px; text-align: center; font-size: 40px; box-shadow: 0 8px 30px rgba(11,107,155,0.18); z-index: 10000; transition: transform .2s ease, box-shadow .2s ease; display:flex; align-items:center; justify-content:center; }
+        .float:hover { transform: translateY(-6px); box-shadow: 0 18px 40px rgba(11,107,155,0.22); }
+        .float img { filter: none; width:40px; height:40px; object-fit:contain }
+      `}</style>
    </a>
  );
};

export default FloatingWhatsApp;
