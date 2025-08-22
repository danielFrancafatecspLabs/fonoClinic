import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import Offcanvas from "react-bootstrap/Offcanvas";
import Nav from "react-bootstrap/Nav";

export default function Header(): JSX.Element {
  const full = "FonoTea";
  const brandText = full;
  const [active, setActive] = useState("inicio");
  const [isMobile, setIsMobile] = useState<boolean>(false);

  // brandText is static now (no typing indicator)

  // compute real navbar height and expose it as a CSS variable so padding/anchors line up
  useEffect(() => {
    const setNavbarHeight = () => {
      const el = document.querySelector(".site-navbar") as HTMLElement | null;
      if (!el) return;
      const h = Math.ceil(el.getBoundingClientRect().height);
      document.documentElement.style.setProperty("--navbar-height", `${h}px`);
      // ensure body padding matches immediately
      document.body.style.paddingTop = `${h}px`;
    };
    setNavbarHeight();
    window.addEventListener("resize", setNavbarHeight);
    return () => window.removeEventListener("resize", setNavbarHeight);
  }, []);

  // active section detection using scroll position (robust across browsers)
  useEffect(() => {
    const sections = Array.from(
      document.querySelectorAll("section[id]")
    ) as HTMLElement[];
    if (!sections.length) return;

    let ticking = false;
    const getOffset = () => {
      const v = getComputedStyle(document.documentElement).getPropertyValue(
        "--navbar-height"
      );
      const parsed = parseInt(v || "0", 10);
      return isNaN(parsed) ? 120 : parsed;
    };

    const onScroll = () => {
      if (ticking) return;
      ticking = true;
      window.requestAnimationFrame(() => {
        const offset = getOffset() + 12; // small buffer
        const top = window.scrollY + offset;
        let current = sections[0]?.id || "inicio";
        for (const s of sections) {
          if (s.offsetTop <= top) current = s.id;
        }
        setActive((prev) => (prev === current ? prev : current));
        ticking = false;
      });
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // track viewport size to only render offcanvas on small screens
  useEffect(() => {
    const check = () =>
      setIsMobile(
        typeof window !== "undefined" ? window.innerWidth < 992 : false
      );
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);

  const nav = [
    { id: "inicio", label: "Início" },
    { id: "servicos", label: "Serviços" },
    { id: "sobre", label: "Sobre" },
    { id: "localizacao", label: "Localização" },
    { id: "contato", label: "Contato" },
  ];

  const brandStyle: React.CSSProperties = {
    fontFamily: '"Dancing Script", cursive',
    fontWeight: 700,
    fontSize: 20,
    color: "var(--brand-primary)",
    margin: 0,
  };
  // use brand CSS vars plus complementary colors
  // per-letter colors defined in CSS below

  return (
    <>
      <Navbar
        expand="lg"
        fixed="top"
        className="site-navbar"
        style={{
          zIndex: 99999,
          background: "#fff",
          backgroundColor: "#fff",
          opacity: 1,
          height: "var(--navbar-height)",
          minHeight: "var(--navbar-height)",
          boxShadow: "0 6px 18px rgba(16,24,40,0.08)",
          backdropFilter: "none",
        }}
      >
        <Container
          fluid
          className="d-flex align-items-center justify-content-between"
          style={{ padding: "0.45rem 1rem" }}
        >
          <Navbar.Brand
            style={{ display: "flex", alignItems: "center", gap: 10 }}
            className="brand-title"
          >
            <img
              src="/assets/fonotea_logo.png"
              alt="FonoTea"
              style={{ height: 34, width: "auto", display: "block" }}
            />
            <span style={{ ...brandStyle }} className="brand-main">
              {/* colored animated letters */}
              <span style={{ display: "inline-flex", gap: 2 }} aria-hidden>
                {brandText.split("").map((ch, i) => (
                  <span
                    key={i}
                    className={`brand-letter b-${i}`}
                    style={{
                      display: "inline-block",
                      transformOrigin: "center",
                      animation: "letterPop 900ms ease-in-out infinite",
                      animationDelay: `${i * 120}ms`,
                    }}
                  >
                    {ch}
                  </span>
                ))}
              </span>
            </span>
          </Navbar.Brand>

          {/* Desktop nav: right aligned, visible on lg+ */}
          <Nav className="d-none d-lg-flex ms-auto gap-3 align-items-center">
            {nav.map((n) => (
              <a
                key={n.id}
                href={`#${n.id}`}
                className={`nav-link ${active === n.id ? "active" : ""}`}
                style={{
                  color: active === n.id ? "var(--brand-accent)" : "#111",
                  fontWeight: active === n.id ? 700 : 500,
                  textTransform: "capitalize",
                }}
              >
                {n.label}
              </a>
            ))}
          </Nav>

          {/* Mobile toggle + offcanvas (render only on small screens to avoid duplication) */}
          {isMobile && (
            <>
              <Navbar.Toggle
                aria-controls="offcanvasNavbar"
                className="d-lg-none"
              />
              <Navbar.Offcanvas
                id="offcanvasNavbar"
                aria-labelledby="offcanvasNavbarLabel"
                placement="end"
              >
                <Offcanvas.Header closeButton>
                  <Offcanvas.Title id="offcanvasNavbarLabel">
                    Menu
                  </Offcanvas.Title>
                </Offcanvas.Header>
                <Offcanvas.Body>
                  <Nav className="d-flex flex-column gap-3 align-items-start">
                    {nav.map((n) => (
                      <a
                        key={n.id}
                        href={`#${n.id}`}
                        className={`nav-link ${
                          active === n.id ? "active" : ""
                        }`}
                        style={{
                          color:
                            active === n.id ? "var(--brand-accent)" : "#222",
                          fontWeight: active === n.id ? 700 : 500,
                          textTransform: "capitalize",
                        }}
                      >
                        {n.label}
                      </a>
                    ))}
                  </Nav>
                </Offcanvas.Body>
              </Navbar.Offcanvas>
            </>
          )}
        </Container>

        <style>{`
          /* Light navbar for brand-forward layout */
          .site-navbar { background: #fff !important; box-shadow: 0 6px 18px rgba(16,24,40,0.06) !important; opacity: 1 !important; }
          /* Brand and nav link visibility (don't force spans so letters can be colored) */
          .site-navbar .brand-title, .site-navbar .navbar-brand { color: #111 !important; }
          .brand-title img { display:inline-block }
          .brand-title span { vertical-align: middle }
          .site-navbar .nav-link { position: relative; padding-bottom: 6px; text-decoration: none; color: #111 !important; }
          .site-navbar .nav-link::after { content: ''; position: absolute; left: 50%; transform: translateX(-50%) scaleX(0); bottom: 0; height: 3px; width: 60%; background: rgba(51,51,51,0.12); border-radius: 3px; transition: transform .28s ease; transform-origin: center; }
          .site-navbar .nav-link:hover::after { transform: translateX(-50%) scaleX(1); }
          .site-navbar .nav-link.active::after { transform: translateX(-50%) scaleX(1); background: linear-gradient(90deg,var(--brand-accent), #333); }
          /* Toggle visibility */
          .navbar-toggler { border-color: rgba(0,0,0,0.08) !important; }
          .navbar-toggler-icon { filter: none !important; }
          .navbar-toggler { color: #111 !important; }
          /* Mobile offcanvas: keep white background, dark text */
          .offcanvas { background: #fff !important; color: #222 !important; }
          .offcanvas .nav-link { color: #222 !important; }
          .offcanvas .btn-close { filter: none !important; }
          .brand-letter { will-change: transform, opacity; }
          /* increase specificity so these rules override previous span styles */
          .site-navbar .brand-title .b-0 { color: var(--brand-accent) !important; }
          .site-navbar .brand-title .b-1 { color: var(--brand-primary) !important; }
          .site-navbar .brand-title .b-2 { color: #ffd23f !important; }
          .site-navbar .brand-title .b-3 { color: #6be1b8 !important; }
          .site-navbar .brand-title .b-4 { color: #3da4ff !important; }
          .site-navbar .brand-title .b-5 { color: #a066ff !important; }
          @keyframes letterPop {
            0% { transform: translateY(0) scale(1); opacity: 0.95 }
            30% { transform: translateY(-6px) scale(1.08); opacity: 1 }
            60% { transform: translateY(-2px) scale(1.03); opacity: 1 }
            100% { transform: translateY(0) scale(1); opacity: 0.98 }
          }
        `}</style>
      </Navbar>
    </>
  );
}
