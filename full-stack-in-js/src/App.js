import { useState, useEffect } from "react";
function App() {
  const [count, setCount] = useState(null);
  useEffect(() => {
    fetch("/api/get").then((res) => {
      res.json().then((data) => {
        const { count } = data;
        setCount(count);
      });
    });
  }, []);
  return (
    <div>
      <input
        type="button"
        value="plus"
        onClick={() => {
          fetch("/api/plus").then((res) => {
            //서버의 응답을 json형태로 받아 출력
            console.log(res);
            res.json().then((data) => {
              const { count } = data;
              setCount(count);
            });
          });
        }}
        style={{ margin: "10rem" }}
      />
      {count}
    </div>
  );
}

export default App;
