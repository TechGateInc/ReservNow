import "./aboutCentreOverview.css";

const AboutCentreOverview = ({}) => {
  return (
    <div className="about-centreO-root">
      <div className="left">
        <div style={{ marginBottom: "20px", fontWeight: "600" }}>Step 1</div>
        <div className="about-centreO-header" style={{ marginBottom: "20px" }}>
          Tell us about your place
        </div>
        <div className="about-centreO-footer">
          In this step we will ask you which type of property you have and if
          <br /> and if guest will book the entire hall. Then let us know the{" "}
          <br />
          location and how many guest it can contain
        </div>
      </div>
      <div className="right">
        <img src="/images/EventCentre.jpg" alt="" />
      </div>
    </div>
  );
};

export default AboutCentreOverview;
