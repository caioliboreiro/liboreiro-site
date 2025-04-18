import { useEffect } from "react";
import "./Services.css";
import Header from "../Header/Header";
import Card from "../Card/Card";
import CTA from "./CTA/CTA";

import { acoesNacionais, acoesInternacionais, fii, rendaFixa } from "./fundos";
import FundList from "./FundList/FundList";

function Services() {
  useEffect(() => {
    document.title = "Serviços | Liboreiro";
  }, []);

  return (
    <main className="services">
      <Header backgroundColor="black" />
      <Card primaryHeader="Fundos" secondaryHeader="NOSSOS FUNDOS" />

      <section className="funds-section">
        <h1 className="funds-header">Conheça nossos fundos</h1>
        <h2 className="fund-cat-header">Ações Nacionais</h2>
        <FundList funds={acoesNacionais} />

        <h2 className="fund-cat-header">Ações Internacionais</h2>
        <FundList funds={acoesInternacionais} />

        <h2 className="fund-cat-header">FII's</h2>
        <FundList funds={fii} />

        <h2 className="fund-cat-header">Renda Fixa</h2>
        <FundList funds={rendaFixa} />
      </section>

      <CTA />
    </main>
  );
}

export default Services;
