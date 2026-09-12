import Main from "./Components/Main/Main";
import Start from "./Components/Start/Start.jsx";
import Victory from "./Components/Victory/Victory.jsx";
import { useState } from "react";
export default function App() {
  const [cardNum, setCardNum] = useState(0);
  return (
    <div>
      <Start setCardNum={setCardNum} />
      <Main limit={cardNum} />
      <Victory/>
    </div>
  );
}
