import forward from "../../../assets/forward.svg";

function FundList({ funds }) {
  const renderFunds = funds.map((fund) => {
    return (
      <a href="#" key={fund.id}>
        <li>
          {fund.name}
          <button className="forward-btn">
            <img src={forward} alt="" />
          </button>
        </li>
      </a>
    );
  });

  return <ul className="fund-list">{renderFunds}</ul>;
}

export default FundList;
