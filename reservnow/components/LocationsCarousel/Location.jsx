const Location = ({ label, onClick }) => {
  return (
    <div className="location-Cards" onClick={onClick}>
      {label}
    </div>
  );
};

export default Location;
