import "./DescriptionPicker.css";
import { useGetDescriptionPickerQuery } from "@/features/descriptionPicker/descriptionPickerSlice";

const DescriptionPicker = ({ descriptionsPick, setDescriptionsPick }) => {
  const { data: Descriptions } = useGetDescriptionPickerQuery();
  console.log(descriptionsPick);

  const handleDescriptionClick = (_id) => {
    // Check if the clicked description is already selected
    const isDescriptionSelected = descriptionsPick.includes(_id);

    if (isDescriptionSelected) {
      // If the clicked description is already selected, remove it from the array
      const updatedDescriptions = descriptionsPick.filter(
        (desc) => desc !== _id
      );
      setDescriptionsPick(updatedDescriptions);
    } else {
      // If the clicked description is not selected, add it to the array
      // and ensure only 2 descriptions are selected
      if (descriptionsPick.length < 2) {
        const updatedDescriptions = [...descriptionsPick, _id];
        setDescriptionsPick(updatedDescriptions);
      } else {
        // Remove the first selected description and add the new one
        const updatedDescriptions = descriptionsPick.slice(1).concat(_id);
        setDescriptionsPick(updatedDescriptions);
      }
    }
  };

  return (
    <div className="DescPicker">
      <div className="DescPickerHoler">
        <div className="descPrompt2">
          <p style={{ fontSize: 30, marginBottom: 10 }}>
            Next, lets describe your Centre
          </p>
          <p style={{ color: "grey" }}>
            Choose up to 2 highlights, We'll use these to get your description
            started
          </p>
        </div>
        <div className="descpills">
          {Descriptions?.map((desc, index) => (
            <div
              key={index}
              className={`descpill ${
                descriptionsPick.includes(desc._id) ? "desc-active" : ""
              }`}
              onClick={() => handleDescriptionClick(desc._id)}
            >
              <img src={desc.icon} width={25} alt="" />
              <p>{desc.name}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default DescriptionPicker;
