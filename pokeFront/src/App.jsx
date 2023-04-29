import { useState, useEffect } from "react";
import "./App.css";
import axios from "axios";

function App() {
  const [data, setData] = useState({});
  
  const pokeball = async () =>{
    const result = await axios.get('http://localhost:4001/api');
    console.log(result)
const res = result.data
    try { 
      setData(result.data);
      console.log(result.data); // Hacer algo con los datos obtenidos
    } catch (error) {
      console.error(error);
    }
  }

  useEffect(() => {
    pokeball()
  }, []);

  return (
    <div>
      <h1> hola</h1>
      <p> Los datos son: {JSON.stringify(data)}</p>
    </div>
  )
}



export default App;
