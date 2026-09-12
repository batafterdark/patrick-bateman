import { useEffect, useState } from "react";
import Card from "./Card/Card";
import Scorecard from "./Scoreboard/Scorecard";
export default function Main(props) {
  const [data, setData] = useState([]);
  const [clickedCards, setClickedCards] = useState([]);
  const [scores, setScores] = useState({ score: 0, best: 0 });
  const [loading, setLoading] = useState(false);
  const url = `https://api.giphy.com/v1/gifs/search?api_key=PUfXeUrzWbpaWziwtPnZgPBmv3o2oEOr&q=bateman&limit=${props.limit}`;
  useEffect(() => {
    async function fetchData() {
      setLoading(true);
      const response = await fetch(url);
      const results = await response.json();
      setData(results.data);
      setLoading(false);
    }
    fetchData();
  }, [url]);
  function shuffleData() {
    const shuffled = [...data].sort(() => Math.random() - 0.5);
    setData(shuffled);
  }
  function handleClick(id) {
    shuffleData();
    if (clickedCards.includes(id)) {
      const newBest = scores.score > scores.best ? scores.score : scores.best;
      setScores({score:0, best: newBest});
      setClickedCards([]);
    }
    else {
      setClickedCards([...clickedCards, id]);
      const newScore = scores.score + 1;
      const newBest = newScore > scores.best ? newScore : scores.best;
      setScores({score:newScore, best: newBest});
      if (newScore === props.limit) {
        const main = document.querySelector('main');
        main.style.visibility = 'hidden';
        const victory = document.querySelector('.victory');
        victory.style.visibility = 'visible';
      }
    }
  }
  return (
    <main>
      <h1>Remember Me?</h1>
      <div className="topSection">
        <p><em>Patrick Bateman</em>, some kind of abstraction—but there is no real me; only an entity, something illusory... and though I can hide my cold gaze, and you can shake my hand and feel flesh gripping yours, and maybe you can even sense our lifestyles are probably comparable: <strong><em>I simply... am not... there.</em></strong></p>
        <Scorecard {...scores} />
      </div>
      {loading && <span className="loading"></span>}
      <div className="cards">
        {data.map(item => <Card key={item.id} {...item} onClick={() =>handleClick(item.id) }  />)}
      </div>
    </main>
  );
}
