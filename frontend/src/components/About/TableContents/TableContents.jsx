function TableContents() {
  return (
    <nav className="table-of-contents">
      <h2>Conteúdo</h2>
      <ul className="contents">
        <li>
          <a href="#mission-vision">Missão e Visão</a>
          <ul>
            <li>
              <a href="#mission">Missão</a>
            </li>
            <li>
              <a href="#vision">Visão</a>
            </li>
          </ul>
        </li>
        <li>
          <a href="#history">História</a>
          <ul>
            <li>
              <a href="#origin">Origem (2010-2015)</a>
            </li>
            <li>
              <a href="#recession">
                Investindo em momentos de crise (2015-2020)
              </a>
            </li>
            <li>
              <a href="#looking-forward">Olhando para o futuro (2020-Hoje)</a>
            </li>
          </ul>
        </li>
        <li>
          <a href="#investing-philosophy">Filosofia de Investimento</a>
          <ul>
            <li>
              <a href="#value-investing">O que é Value Investing?</a>
            </li>
            <li>
              <a href="#influencias">Principais Influências</a>
            </li>
          </ul>
        </li>
      </ul>
    </nav>
  );
}

export default TableContents;
