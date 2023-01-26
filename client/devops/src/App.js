import './App.css';
import {useState, useEffect} from 'react';
import axios from 'axios';

function App() {
  const [initialState, setInitialState] = useState([]);
  // useEffect(()=>{
  //   fetch('/api')
  //     .then(res => {
  //       if(res.ok){
  //         res.json()
  //       }
  //     })
  //     .then(jsonData => setInitialState(jsonData.name))
  // },[])
  useEffect(()=>{
    axios({
    method: 'GET',
    url: 'http://localhost:3001/api',
  }).then(response => {
    setInitialState(response.data.name)
    }, (error) => {
    console.log(error);
  });
})

  return (
    <div className="App">
      {console.log(initialState)}
      {initialState.length > 0 && initialState.split(" ").map((name) => <h1>{name}</h1>)}
    </div>
  );
}

export default App;
