function App() {
  return (
    <div>
      <input type="button" value="plus" onClick={() => {
        fetch('/api/plus').then(res => {
          //서버의 응답을 json형태로 받아 출력
          res.json().then((data) => {
            console.log(data);
          });
        });
      }} style={{ margin: '10rem' }} />
    </div>
  );
}

export default App;
