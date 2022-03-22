import { useState, useEffect } from "react";
import "./App.css";

// function App() {
//   const [advice, setAdvice] = useState("");
//   const [error, setError] = useState({
//     error: false,
//     message: "",
//   });

//   // FETCH
// let handleFetch = async () => {
//   try {
//     setError(false);
//     let response = await fetch("https://api.adviceslip.com/advice");
//     if (response.status !== 200) {
//       throw new Error("oops");
//     }
//     let data = await response.json();
//     setAdvice(data.slip);
//   } catch (error) {
//     console.log("error: ", error);
//     setError({ error: true, message: error.message });
//   }
// };
//   // can take two parameters. function and blank []. [] empty will run on load
//   // component didMount and also component did update
// useEffect(() => {
//   // calling function
//   handleFetch();
// }, []);
//   // [] can put a value in so it updates as state changes
//   return (
//     <div>
//       <h1>Advice</h1>
//       {error ? <p>error</p> : <h2>{advice.advice}</h2>}
//       <button onClick={handleFetch}>fetch</button>
//     </div>
//   );
// }
// javascript object notation JSON
// export default App;

/////////////////////////////////////////////////////////////////////
//! API PLAYGROUND
const App = () => {
  const [weather, setWeather] = useState("");
  const [error, setError] = useState({
    error: false,
    message: "",
  });
  let handleFetch = async () => {
    try {
      setError(false);
      let response = await fetch(
        "https://www.metaweather.com/api/location/44418/"
        // { mode: "no-cors" }
      );
      if (response.status !== 200) {
        throw new Error("oops");
      }
      let data = await response.json();
      setWeather(data.consolidated_weather);
    } catch (error) {
      console.log("error: ", error);
      setError({ error: true, message: error.message });
    }
  };

  useEffect(() => {
    // calling function
    handleFetch();
  }, []);

  return (
    <div>
      {error ? <p>loading...</p> : <h2>{weather.weather_state_name}</h2>}

      <button onClick={handleFetch}>fetch</button>
    </div>
  );
};
export default App;
