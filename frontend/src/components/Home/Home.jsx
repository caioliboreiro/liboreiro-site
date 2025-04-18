import { useEffect } from "react";
import "./Home.css";
import Header from "../Header/Header";
import quotes from "./quote";
import Quote from "./Quote/Quote";
import FadeIn from "../FadeIn/FadeIn";
import PerfChart from "./PerfChart/PerfChart";

function Home() {
  useEffect(() => {
    document.title = "Liboreiro Asset Management";
  }, []);

  const quotesRendered = quotes.map((quote) => {
    return (
      <FadeIn key={quote.id} movementAmt={"20%"}>
        <Quote img={quote.img} quote={quote.quote} />
      </FadeIn>
    );
  });

  return (
    <main className="home">
      <section className="home-hero">
        <Header />

        <section>
          <FadeIn>
            <div className="phrases-container">
              <h1 className="main-phrase">"Paciência é a chave"</h1>
              <p className="other-phrase">
                Invista na Liboreiro Asset Management, uma casa de investimentos
                com uma filosofia voltada ao Value Investing que busca retornos
                no longo prazo.
              </p>
            </div>
          </FadeIn>
        </section>
      </section>

      <FadeIn>
        <section className="performance-section">
          <h1>Rentabilidade</h1>
          <div>
            <PerfChart />
          </div>
        </section>
      </FadeIn>

      <section className="quotes">
        <h1>Frases que resumem nossa filosofia:</h1>
        {quotesRendered}
      </section>
    </main>
  );
}

export default Home;
