const weatherStatus = ({ timezone, weather_state_name }) => {
  return (
    <div>
      <h1>{timezone}</h1>
      <h2>{weather_state_name}</h2>
    </div>
  );
};

export default weatherStatus;
