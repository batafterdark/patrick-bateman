export default function Scorecard(props) {
  return (
    <div className="scorecard">
      <p className="score"><strong>Your Score : {props.score} </strong></p>
      <p className="best"><strong>Best Score : {props.best} </strong></p>
    </div>
  );
}
