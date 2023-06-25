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
          <img
            src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFAAAABQCAYAAACOEfKtAAAACXBIWXMAAAsTAAALEwEAmpwYAAAC2klEQVR4nO3d3UtTcRzH8V1EN0EQ/Qfd9i9EJRTNzbNzggZBD4Mi4ux5E0ZGWFYXQmZLKJpM2M6e50UllBUMNWdZEUFFEV1UeBVUtGW5VPaNUyyXOJn7tgfd5w3fW9EXv9/OOXL4TaNpgIIWabMi641xlxiNWIVM0KyjwtT7d2vYAuY9WxVZ3xF3SU/CViF3q/Ng5tXACZq+10f0OvV7AFiU0r57gyJrhahDUCJ24UvStXd64qL8cypxjubv9xOl/QsDwD8NyPotilnnijkMjwqr7LnPk/962/sv2OJZy4DFn0/BEhO2CRS2CxR3STR+4Ti9j3bR7Mi15dFKANZ6agJY/Mdm71ymN4FTlDp/hCI2Aw13HqIX/R76NNRTPtgygBX/jAqmLoBBs44e9FroQ/wszY2uYJUBcAHwv6+GZluBVEVAYfvOqs6aBxRbdpU17aajKx4AtgCQsALN2ML4DEzjIkK4iKRxFSbcxuA+kHAjbcKNNOFJJI1HOTwLVyv8M4EZAJkBkBkAmQGQGQCZAZAZAJkBkBkAmQGQGQCZAZAZAJkBkBkAGwzwYa+FJi9Z8XIRVQgYdRgo5hQBSBUDigAkxhZWt++kF1uY8IJlnS4ihDdUdQCs520MYQXqAIgV6P+7mzTVDluYGQCZAZAZAJkBkBkAmQGQGQCZAZAZAJkBkBkAmQGQGQCZAZAZAJkBkBkAmQGQGQCZAZAZAJkBkBkAmQGQGQCZAZDZUkcH3zh5gB732eld5Axlhr2UH189R4DW/BjkxUVk/aagWbtNPXA74ZKGok5xKmRpy93s2P95okeeUY93/3i9m+bHfBUBapqxkE27UUUNyK2OiF0cjDnFtyGLfnbQsy872n3sRwF1bqzEscnNDrhUSaNxvfoFBAG59XDcKfnjDumlYmnLJd3St7tdpuyzq+68eq7+TOoKADVlNnJ6x7oCatRu8CXc0tOwTfi+mr4O4xf/y1yEt8TsYQAAAABJRU5ErkJggg=="
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default FinishSetup;
