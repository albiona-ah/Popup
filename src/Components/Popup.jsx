import React, { useState } from "react";
import "./Popup.css";

function Popup(props) {
  return props.trigger ? (
    <div className="popup">
      <div className="popup-inner">
        {props.children}
        <div className="button-popup-inner">
          <div className="content-theme">
            <div className="color">
              <p>Font Color</p>
              <div className="color-input-container">
                <div className="color-hex">{props.fontColor}</div>
                <input
                  type="color"
                  id="fontColorPicker"
                  name="fontColorPicker"
                  value={props.fontColor}
                  onChange={(e) => props.setFontColor(e.target.value)}
                />
              </div>
            </div>
            <div className="color">
              <p>Background Color</p>
              <div className="color-input-container">
                <div className="color-hex">{props.backgroundColor}</div>
                <input
                  type="color"
                  id="backgroundColorPicker"
                  name="backgroundColorPicker"
                  value={props.backgroundColor}
                  onChange={(e) => props.setBackgroundColor(e.target.value)}
                />
              </div>
            </div>
            <div className="color">
              <p>Button Color</p>
              <div className="color-input-container">
                <div className="color-hex">{props.buttonColor}</div>
                <input
                  type="color"
                  id="buttonColorPicker"
                  name="buttonColorPicker"
                  value={props.buttonColor}
                  onChange={(e) => props.setButtonColor(e.target.value)}
                />
              </div>
            </div>
            <div className="color">
              <p>Button Border Color</p>
              <div className="color-input-container">
                <div className="color-hex">{props.buttonBorderColor}</div>
                <input
                  type="color"
                  id="buttonBorderColorPicker"
                  name="buttonBorderColorPicker"
                  value={props.buttonBorderColor}
                  onChange={(e) => props.setButtonBorderColor(e.target.value)}
                />
              </div>
            </div>
            <div className="color">
              <p>Buttons Mouseover Color</p>
              <div className="color-input-container">
                <div className="color-hex">{props.buttonsMouseoverColor}</div>
                <input
                  type="color"
                  id="buttonsMouseoverColorPicker"
                  name="buttonsMouseoverColorPicker"
                  value={props.buttonsMouseoverColor}
                  onChange={(e) =>
                    props.setButtonsMouseoverColor(e.target.value)
                  }
                />
              </div>
            </div>
          </div>

          <button
            className="cancel-btn"
            onClick={() => props.setTrigger(false)}
          >
            Cancel
          </button>
          <button className="save-btn" onClick={() => props.setTrigger(false)}>
            Save
          </button>
        </div>
      </div>
    </div>
  ) : null;
}

function App() {
  const [buttonPopup, setButtonPopup] = useState(false);
  const [fontColor, setFontColor] = useState("#444444");
  const [backgroundColor, setBackgroundColor] = useState("#ffffff");
  const [buttonColor, setButtonColor] = useState("#2072EF");
  const [buttonBorderColor, setButtonBorderColor] = useState("#2072EF");
  const [buttonsMouseoverColor, setButtonsMouseoverColor] = useState("#0053D1");

  return (
    <div className="App">
      <button className="btn-show-popup" onClick={() => setButtonPopup(true)}>
        Show Popup
      </button>
      <Popup
        trigger={buttonPopup}
        setTrigger={setButtonPopup}
        fontColor={fontColor}
        setFontColor={setFontColor}
        backgroundColor={backgroundColor}
        setBackgroundColor={setBackgroundColor}
        buttonColor={buttonColor}
        setButtonColor={setButtonColor}
        buttonBorderColor={buttonBorderColor}
        setButtonBorderColor={setButtonBorderColor}
        buttonsMouseoverColor={buttonsMouseoverColor}
        setButtonsMouseoverColor={setButtonsMouseoverColor}
      >
        <div className="content-button-popup">
          <p className="theme-color">Theme Color</p>
          <p className="change-theme">Change Theme</p>
        </div>
      </Popup>
    </div>
  );
}

export default App;
