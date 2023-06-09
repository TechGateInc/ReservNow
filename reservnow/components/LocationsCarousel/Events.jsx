const Events = ({ label, onClick }) => {
  return (
    <div className="location-Cards" onClick={onClick}>
      {label}
    </div>
  );
};

export default Events;
