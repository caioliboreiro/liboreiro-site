import { useEffect } from "react";
import Header from "../Header/Header";
import "./About.css";
import FadeIn from "../FadeIn/FadeIn";
import TableContents from "./TableContents/TableContents";

import recessaoImg from "../../assets/recessao.webp";
import investorsImg from "../../assets/investors.jpg";
import valueInvesting from "../../assets/value-investing.png";
import officeImg from "../../assets/office.jpg";

function About() {
  useEffect(() => {
    document.title = "Sobre | Liboreiro";
  }, []);

  return (
    <main className="about">
      <section className="about-hero">
        <Header />

        <div className="hero-content">
          <FadeIn movementAmt="10px" duration="1s">
            <div className="about-header-container">
              <h1 className="about-header">Sobre a Liboreiro</h1>
            </div>
          </FadeIn>

          <FadeIn movementAmt="20px" duration="2.5s">
            <div className="about-desc-container">
              <p>
                Gestora independente focada na filosofia do Value Investing, com
                uma abordagem fundamentada na análise profunda de empresas e na
                busca por ativos negociados abaixo do seu valor intrínseco.
              </p>
            </div>
          </FadeIn>
        </div>
      </section>

      <section className="text-section">
        <FadeIn movementAmt="10%">
          <section id="mission-vision" className="mission-vision">
            <h1>Missão e Visão</h1>
            <div className="img-paragraph">
              <img src={officeImg} alt="" />
              <div>
                <h2 id="mission">Missão</h2>
                <p>
                  Oferecer soluções de investimento sólidas e fundamentadas na
                  análise de valor, com foco em preservar e multiplicar o
                  patrimônio de nossos clientes no longo prazo. Atuamos com
                  independência, disciplina e comprometimento, sempre guiados
                  pela busca por oportunidades que estejam sendo negociadas
                  abaixo do seu valor intrínseco.
                </p>
                <h2 id="vision">Visão</h2>
                <p>
                  Ser reconhecida como uma das principais gestoras de
                  investimentos do país, referência em Value Investing e em
                  excelência na gestão de recursos, construindo relações de
                  confiança duradouras com nossos investidores.
                </p>
              </div>
            </div>
          </section>
        </FadeIn>

        <FadeIn movementAmt="10%">
          <section className="history">
            <h1 id="history">História</h1>
            <h2 id="origin">Origem (2010–2015)</h2>
            <p>
              A Liboreiro Asset Management nasceu da inquietação de um grupo de
              analistas e investidores com uma visão em comum: investir com base
              em valor, paciência e racionalidade, mesmo quando o mercado se
              comporta de maneira irracional. Entre 2010 e 2015, o foco estava
              em estudar profundamente empresas brasileiras e construir uma base
              sólida de conhecimento. Foi nesse período que os primeiros fundos
              e carteiras começaram a ser geridos, sempre com foco no longo
              prazo e na preservação de capital.
            </p>
            <h2 id="recession">Investindo em momentos de crise (2015–2020)</h2>

            <div className="img-paragraph">
              <p>
                Durante um dos períodos mais desafiadores da economia
                brasileira, a Liboreiro se manteve fiel à sua filosofia.
                Enquanto muitos fugiam do risco, nós enxergamos oportunidades em
                ativos subavaliados e empresas resilientes. Esse posicionamento
                estratégico não só protegeu nossos clientes, como também gerou
                valor real em um cenário adverso. A confiança conquistada nesse
                período consolidou nossa reputação como uma gestora prudente e
                visionária.
              </p>
              <img src={recessaoImg} alt="" />
            </div>

            <h2 id="looking-forward">Olhando para o futuro (2020–Hoje)</h2>
            <p>
              Nos últimos anos, expandimos nossa atuação e estrutura, mantendo o
              compromisso com o Value Investing em um mercado cada vez mais
              dinâmico. Investimos em tecnologia, governança e transparência,
              sempre buscando alinhar nossos interesses aos de nossos
              investidores. Enxergamos o futuro com otimismo, atentos às
              transformações globais, mas firmes em nossa convicção: o valor
              está nos fundamentos.
            </p>
          </section>
        </FadeIn>

        <FadeIn movementAmt="10%">
          <section className="investing-philosophy">
            <h1 id="investing-philosophy">Filosofia de Investimento</h1>
            <h2 id="value-investing">O que é Value Investing?</h2>
            <div className="img-paragraph">
              <img src={valueInvesting} alt="" />
              <p>
                Na Liboreiro Asset Management, acreditamos que investir é mais
                do que seguir tendências — é compreender o valor real de um
                ativo. Nossa filosofia é baseada no Value Investing, uma
                abordagem que busca identificar empresas sólidas, bem geridas e
                com potencial de geração de valor no longo prazo, mas que estão
                sendo negociadas abaixo do seu valor intrínseco. Essa diferença
                entre o preço de mercado e o valor real é o que chamamos de
                “margem de segurança” — um dos princípios centrais da nossa
                tomada de decisão.
              </p>
            </div>

            <h2 id="influencias">Principais Influências</h2>
            <div className="img-paragraph">
              <div className="texts">
                <p>
                  Nos inspiramos em grandes investidores que moldaram o
                  pensamento por trás do Value Investing. Warren Buffett, talvez
                  o nome mais conhecido, nos ensina que bons negócios são
                  aqueles com vantagens competitivas duradouras, administrados
                  por pessoas competentes e adquiridos a um preço justo.
                </p>
                <p>
                  Peter Lynch, por sua vez, reforça a importância de investir
                  naquilo que conhecemos, olhando com atenção para o que está à
                  nossa volta — empresas do cotidiano que muitas vezes passam
                  despercebidas pelo mercado.
                </p>
                <p>
                  Philip Fisher complementa essa visão com uma análise
                  qualitativa profunda, destacando o papel da inovação, da
                  cultura empresarial e da qualidade da gestão na performance de
                  longo prazo de uma empresa.
                </p>
                <p>
                  Unindo esses pilares, desenvolvemos nossa própria abordagem:
                  analítica, paciente e disciplinada. Nosso compromisso é com o
                  longo prazo, com o capital de nossos investidores e com uma
                  gestão que prioriza o valor — não o ruído do mercado.
                </p>
              </div>
              <img src={investorsImg} alt="" />
            </div>
          </section>
        </FadeIn>
      </section>
    </main>
  );
}

export default About;
