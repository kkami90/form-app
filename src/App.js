import React, { createRef, useState } from "react";

import "./App.css";

//참고로 현재여기 실행하면 오류뜬다....참고할것

function App() {
  const [data, setData] = useState([
    { id: 1, name: "cos" },
    { id: 2, name: "삽돌" },
    { id: 3, name: "ㅋㅋ" },
    { id: 4, name: "ㅁㅁ" },
  ]);

  const h1Element = Array.from({ length: data.length }).map(() => createRef);

  const changeColor = () => {
    h1Element[2].current.style.color = "red";
  };

  return (
    <div>
      {data.map((data) => (
        <h1 ref={h1Element[data.id - 1]}>{data.name}</h1>
      ))}
      <button onClick={changeColor}>클릭</button>
    </div>
  );
}

export default App;
