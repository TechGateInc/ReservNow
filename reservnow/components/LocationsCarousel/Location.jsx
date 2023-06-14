const Location = ({ label, handleLocation }) => {
  return (
    <div className="location-Cards" onClick={() => handleLocation(label)}>
      {label}
    </div>
  );
};

export default Location;
