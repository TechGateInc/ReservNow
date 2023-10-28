import "./DescriptionInfo.css";

const DescriptionInfo = ({ description, setDescription }) => {
  const handleInputChange = (event) => {
    const inputName = event.target.value;
    if (inputName.length <= 500) {
      setDescription(inputName);
    }
  };

  return (
    <div className="DescPickerPage">
      <div className="DescPickerHolder">
        <div className="descPrompt">
          <p style={{ fontSize: 30, marginBottom: 10 }}>
            Create your description
          </p>
          <p style={{ color: "grey" }}>Share what makes your place special</p>
        </div>
        <textarea
          rows={10}
          maxLength={500}
          value={description}
          onChange={handleInputChange}
          className="DesctextArea"
          style={{ resize: "none", fontSize: 20 }}
        />
        <p style={{ marginTop: 20, color: "grey" }}>
          {description.length} / 500
        </p>
      </div>
    </div>
  );
};

export default DescriptionInfo;
