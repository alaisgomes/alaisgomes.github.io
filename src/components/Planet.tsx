const Planet = () => {
  const items = [1, 2, 3, 4, 5, 6, 7];

  return (
    <div className="space-container">
      <div className="stars-container">
        {items.map((idx) => (
          <div className="stars" key={`stars-${idx}`}>
            <div></div>
            <div></div>
            <div></div>
          </div>
        ))}
      </div>

      <div className="planet-container">
        <div className="planet-ring2"></div>
        <div className="planet"></div>
        <div className="planet-ring"></div>
      </div>
    </div>
  );
};

export default Planet;
