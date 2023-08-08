const Events = ({ label, handleType, removeTypeExtend }) => {

  const handleTypeClick = () => {
    handleType(label);
    removeTypeExtend();
  }
  return (
    <div className="location-Cards" onClick={handleTypeClick}>
      {label.name}
    </div>
  );
};

export default Events;
