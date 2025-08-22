import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

import Especialidades from "./SpecialtiesCards";
import Sobre from "./Sobre";
import Hero from "./Hero";
import Newsletter from "./Newsletter";

function Inicio() {
  return (
    <main>
      <Hero />

      <section
        id="servicos"
        style={{ paddingTop: "calc(var(--navbar-height) - 10px)" }}
      >
        <Especialidades />
      </section>

      <section
        id="sobre"
        style={{ paddingTop: "calc(var(--navbar-height) - 10px)" }}
      >
        <Sobre />
      </section>

      <Newsletter />
    </main>
  );
}

export default Inicio;
