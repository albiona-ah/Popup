import Popup from "./Components/Popup";
import { useState, useEffect } from "react";

function App() {
  const [buttonPopup, setButtonPopup] = useState(false);
  const [timedPopup, setTimedPopup] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setTimedPopup(true);
    }, 3000);
  }, []);
  return (
    <div className="App">
      <Popup trigger={buttonPopup} setTrigger={setButtonPopup}>
        <div className="content-button-popup">
          <p className="theme-color">Theme Color</p>
          <p className="change-theme">Change Theme</p>
        </div>
      </Popup>
    </div>
  );
}

export default App;
