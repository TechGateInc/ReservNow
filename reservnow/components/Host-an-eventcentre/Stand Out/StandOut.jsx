import "./standOut.css";

const StandOut = ({}) => {
  return (
    <div className="stand-out-root">
      <div className="stand-out-container">
        <div className="left">
          <div style={{ marginBottom: "20px", fontWeight: "600" }}>Step 2</div>
          <div className="stand-out-header" style={{ marginBottom: "20px" }}>
            Make your place <br /> stand out
          </div>
          <div className="stand-out-footer">
            In this step you will add some of the amenities your place
            <br />
            offers, plus five or more photos. Then you'll create a title and
            <br />
            description
          </div>
        </div>
        <div className="right">
          <img src="/images/Decoration.jpg" alt="" />
        </div>
      </div>
    </div>
  );
};

export default StandOut;
