export default function Start(props) {
  function handleClick(limit) {
    props.setCardNum(limit);
    const main = document.querySelector('main');
    main.style.visibility = 'visible';
    const start = document.querySelector('.start');
    start.style.visibility = 'hidden';

  }
    return (
        <div className="start">
          <h1>American Psycho</h1>
          <p><em>Choose Number of Cards</em></p>
          <div className="cardNum">
            <button className="cardNumBut" onClick={() => handleClick(8)}>8</button>
            <button className="cardNumBut" onClick={() => handleClick(10)}>10</button>
            <button className="cardNumBut" onClick={() => handleClick(12)}>12</button>
          </div>
        <button className="sourceCode"
          onClick={() => window.open("https://github.com/batafterdark/patrick-bateman", "_blank", "noopener,noreferrer")}
        >
          View Source
        </button>
        </div>
    );
}
