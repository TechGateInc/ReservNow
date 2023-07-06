import "./overview.css";

const Overview = ({}) => {
  return (
    <div className="overview-root">
      <div className="host-content-left">
        <div className="text">
          It's easy to get <br /> started on ReservNow
        </div>
      </div>
      <div className="host-content-right">
        <div className="text-container">
          <div className="text">
            <div className="top">
              1.
              <div style={{ marginLeft: "20px" }}>Tell us about your space</div>
            </div>
            <div
              className="bottom"
              style={{ marginLeft: "35px", marginTop: "10px" }}
            >
              Share some basic info, like where it is and the guest it can
              contain
            </div>
          </div>
          <div className="icon-container">
            <img src="/images/EventCentre.jpg" alt="" />
          </div>
        </div>
        <div className="line">
          <hr />
        </div>
        <div className="text-container">
          <div className="text">
            <div className="top">
              2.
              <div style={{ marginLeft: "20px" }}>Make it stand out</div>
            </div>
            <div
              className="bottom"
              style={{ marginLeft: "35px", marginTop: "10px" }}
            >
              Add five or more photos plus a title and description, we will help
              you out
            </div>
          </div>
          <div className="icon-container">
            <img src="/images/Decoration.jpg" alt="" />
          </div>
        </div>
        <div className="line">
          <hr />
        </div>
        <div className="text-container">
          <div className="text">
            <div className="top">
              3.
              <div style={{ marginLeft: "20px" }}>Finish up and publish</div>
            </div>
            <div
              className="bottom"
              style={{ marginLeft: "35px", marginTop: "10px" }}
            >
              Set a starting price and publish your listing
            </div>
          </div>
          <div className="icon-container">
            <img
              src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFAAAABQCAYAAACOEfKtAAAACXBIWXMAAAsTAAALEwEAmpwYAAAC2klEQVR4nO3d3UtTcRzH8V1EN0EQ/Qfd9i9EJRTNzbNzggZBD4Mi4ux5E0ZGWFYXQmZLKJpM2M6e50UllBUMNWdZEUFFEV1UeBVUtGW5VPaNUyyXOJn7tgfd5w3fW9EXv9/OOXL4TaNpgIIWabMi641xlxiNWIVM0KyjwtT7d2vYAuY9WxVZ3xF3SU/CViF3q/Ng5tXACZq+10f0OvV7AFiU0r57gyJrhahDUCJ24UvStXd64qL8cypxjubv9xOl/QsDwD8NyPotilnnijkMjwqr7LnPk/962/sv2OJZy4DFn0/BEhO2CRS2CxR3STR+4Ti9j3bR7Mi15dFKANZ6agJY/Mdm71ymN4FTlDp/hCI2Aw13HqIX/R76NNRTPtgygBX/jAqmLoBBs44e9FroQ/wszY2uYJUBcAHwv6+GZluBVEVAYfvOqs6aBxRbdpU17aajKx4AtgCQsALN2ML4DEzjIkK4iKRxFSbcxuA+kHAjbcKNNOFJJI1HOTwLVyv8M4EZAJkBkBkAmQGQGQCZAZAZAJkBkBkAmQGQGQCZAZAZAJkBkBkAGwzwYa+FJi9Z8XIRVQgYdRgo5hQBSBUDigAkxhZWt++kF1uY8IJlnS4ihDdUdQCs520MYQXqAIgV6P+7mzTVDluYGQCZAZAZAJkBkBkAmQGQGQCZAZAZAJkBkBkAmQGQGQCZAZAZAJkBkBkAmQGQGQCZAZAZAJkBkBkAmQGQGQCZAZDZUkcH3zh5gB732eld5Axlhr2UH189R4DW/BjkxUVk/aagWbtNPXA74ZKGok5xKmRpy93s2P95okeeUY93/3i9m+bHfBUBapqxkE27UUUNyK2OiF0cjDnFtyGLfnbQsy872n3sRwF1bqzEscnNDrhUSaNxvfoFBAG59XDcKfnjDumlYmnLJd3St7tdpuyzq+68eq7+TOoKADVlNnJ6x7oCatRu8CXc0tOwTfi+mr4O4xf/y1yEt8TsYQAAAABJRU5ErkJggg=="
              alt=""
              style={{ height: "80px", width: "80px" }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Overview;
