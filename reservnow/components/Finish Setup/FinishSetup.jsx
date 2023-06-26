import "./finishSetup.css";
const FinishSetup = ({}) => {
  return (
    <div className="finish-setup-root">
      <div className="finish-setup-container">
        <div className="left">
          <div style={{ marginBottom: "20px", fontWeight: "600" }}>Step 3</div>
          <div className="finish-setup-header" style={{ marginBottom: "20px" }}>
            Finish up and publish
          </div>
          <div className="finish-setup-footer">
            Finally, answer a quick few questions and
            <br />
            publish when you are ready.
          </div>
        </div>
        <div className="right">
          <img src="/images/FinishUp.jpg" alt="" />
        </div>
      </div>
    </div>
  );
};

export default FinishSetup;
