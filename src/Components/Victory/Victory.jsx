export default function Victory() {
  return (
    <div className="victory">
      <h1>You Win!</h1>
      <button className="btn" onClick={() => window.location.reload()}>New Game</button>
    </div>
  );
}
