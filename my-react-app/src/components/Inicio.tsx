import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

import Hero from "./Hero";
import SpecialtiesCards from "./SpecialtiesCards";
import Sobre from "./Sobre";

function Inicio() {
  return (
    <main>
      <Hero />
      <section
        id="especialidades"
        style={{
          background:
            "linear-gradient(90deg, #e0f7fa 0%, #fce4ec 25%, #fffde7 50%, #e1f5fe 75%, #f3e5f5 100%)",
          paddingTop: "2.5rem",
          paddingBottom: "2.5rem",
        }}
      >
        <SpecialtiesCards />
      </section>
      <section
        id="sobre"
        style={{ paddingTop: "calc(var(--navbar-height) - 10px)" }}
      >
        <Sobre />
      </section>
    </main>
  );
}

export default Inicio;
