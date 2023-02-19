import { useState } from "react";
import random from "random";
import "./app.css";
function App() {
  const [length, setLength] = useState(0);
  const [isCheckedUL, setUL] = useState(false);
  const [isCheckedLL, setLL] = useState(false);
  const [isCheckedNum, setNum] = useState(false);
  const [isCheckedSymbol, setSym] = useState(false);
  const [strength, setStr] = useState("");
  const [characterList, setChar] = useState("");
  const [password, setPass] = useState("");
  const handleLength = (e) => {
    setLength(e.target.value);
  };
  const LL = "abcdefghijklmnopqrstuvwxyz";
  const UL = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const NUM = "1234567890";
  const SYMBOL = "!@#$%^&*()_+}{:'<>?.,,[]~/|";
  if (isCheckedLL) {
    if (!characterList.includes(LL)) {
      setChar((prev) => prev + LL);
    }
  }
  if (isCheckedNum) {
    if (!characterList.includes(NUM)) {
      setChar((prev) => prev + NUM);
    }
  }
  if (isCheckedSymbol) {
    if (!characterList.includes(SYMBOL)) {
      setChar((prev) => prev + SYMBOL);
    }
  }
  if (isCheckedUL) {
    if (!characterList.includes(UL)) {
      setChar((prev) => prev + UL);
    }
  }

  const handleButton = () => {
    if (
      !isCheckedLL &&
      !isCheckedNum &&
      !isCheckedSymbol &&
      !isCheckedUL &&
      length == 0
    ) {
      alert("Please Select Options ");
    }
    setPass("");
    genPass(characterList, length);

    checkStr();
  };
  const genPass = () => {
    for (let i = 0; i < length; i++) {
      let randomGen = random.int(1, characterList.length - 1);
      setPass((prev) => prev + characterList[randomGen]);
    }
  };
  const checkStr = () => {
    if (length < 5 && length > 0) {
      setStr(1);
    } else if (length < 10 && length > 5) {
      setStr(2);
    } else if (length < 15 && length > 10) {
      setStr(3);
    } else if (length <= 20 && length > 15) {
      setStr(4);
    } else {
      setStr(0);
    }
  };
  const copyToCp = async () => {
    await navigator.clipboard.writeText(password);
  };
  return (
    <div className="App">
      <header className="heading">Password Generator</header>
      <div className="password-insert">
        {/* <p className={password ? "afterGen " : "beforeGen password"}>
          {password ? password : "P4$5W0rD!"}
        </p> */}
        <input
          type="text"
          value={password ? password : "P4$5W0rD!"}
          className={password ? "afterGen password" : "beforeGen password"}
          disabled
        />
        <svg
          xmlns="http://www.w3.org/2000/svg"
          height="20"
          viewBox="0 96 960 960"
          width="30"
          fill="#a4ffaf"
          className="img"
          onClick={copyToCp}
        >
          <path d="M780 896H260q-24 0-42-18t-18-42V196q0-24 18-42t42-18h348l232 232v468q0 24-18 42t-42 18ZM578 394V196H260v640h520V394H578Zm-438 622q-24 0-42-18t-18-42V337h60v619h498v60H140Zm120-820v198-198 640-640Z" />
        </svg>
      </div>
      <div className="main">
        <div className="characters">
          <p className="charcL">Character Length</p>
          <p className="charcN">{length}</p>
        </div>
        <div className="rangeBox">
          <input
            className="range"
            type="range"
            min={0}
            max={20}
            value={length}
            step={1}
            onChange={handleLength}
          />
        </div>

        <div className="options">
          <div className="boxes">
            <input
              type="checkbox"
              value={isCheckedUL}
              onChange={(e) => setUL((prev) => !prev)}
            />
            <p>Include Uppercase Letters</p>
          </div>
          <div className="boxes">
            <input
              type="checkbox"
              value={isCheckedLL}
              onChange={(e) => setLL((prev) => !prev)}
            />
            <p>Include Lowercase Letters</p>
          </div>
          <div className="boxes">
            <input
              type="checkbox"
              value={isCheckedNum}
              onChange={(e) => setNum((prev) => !prev)}
            />
            <p>Include Numbers</p>
          </div>
          <div className="boxes">
            <input
              type="checkbox"
              value={isCheckedSymbol}
              onChange={(e) => setSym((prev) => !prev)}
            />
            <p>Include Symbols</p>
          </div>
        </div>

        <div className="strengthBox">
          <p>STRENGTH</p>
          <div className="bars">
            <p className="text">
              {strength == 1
                ? " VERY WEAK"
                : strength === 2
                ? "WEAK"
                : strength === 3
                ? "MEDIUM"
                : strength === 4
                ? "STRONG"
                : ""}
            </p>
            <div className={strength >= 1 ? "yellow" : ""}></div>
            <div className={strength >= 2 ? "yellow" : ""}></div>
            <div className={strength >= 3 ? "yellow" : ""}></div>
            <div className={strength >= 4 ? "yellow" : ""}></div>
          </div>
        </div>

        <button onClick={handleButton} className="btn">
          GENERATE
        </button>
      </div>
    </div>
  );
}

export default App;
