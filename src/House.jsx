const House = (props) => {
  return (
    <div>
      <h1>{props.type}</h1>
      <h2>{props.bed}</h2>
      <h2>{props.bath}</h2>
    </div>
  );
};

export default House;
