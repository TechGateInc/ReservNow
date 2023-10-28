const Location = ({ label, handleLocation, removeLocationExtend }) => {
  const handleLocationClick = () => {
    handleLocation(label);
    removeLocationExtend();
  };
  return (
    <div className="location-Cards" onClick={handleLocationClick}>
      {label}
    </div>
  );
};

export default Location;
