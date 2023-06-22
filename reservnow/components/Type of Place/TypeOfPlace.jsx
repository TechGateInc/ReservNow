import "./typeOfPlace.css";

const TypeOfPlace = ({}) => {
  return (
    <div className="type-ofP-overview-root">
      <div className="type-of-place-container">
        <div className="left">
          <div className="type-of-place-header">An Entire Place</div>
          <div className="type-of-place-content">
            Guest have the whole place to themselves
          </div>
        </div>
        <div className="right">
          <img
            src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAACXBIWXMAAAsTAAALEwEAmpwYAAAB9UlEQVR4nO3Wz6tMcRjH8RduCCldSkLpLu5SoqQkbCg7Gws73fwJ7uIu78a/YGEjxYaVDaGukV8LbKyUkPxKSpS48tWp52oac82ZMWfmTL7veuo05/t9ns/nfJ/zzCFTiq24ietxPZLsx1ukiA84ZIRYghn8CANXIlL8NhNras1aXArRP3EaS0P4dIu5dWrKdjxtaqPDbdYcwLtY8wK71Izj+BICH2LbX9Zuwb1Y+xUnmu6lRaJyxqJ9Fgqew6oS+1bgTNO+4nr5sIxsxp2mJzvVQ46p2FvkuNtGeOVG9uFNFHmJ3f+QaweeLXICqSojxfQ5hfkocBXjfcg7HrlSxHTUqsRI62idxbI+5i9yzUbuosblKoxM4kkk/YSjquMIPlbxsh/D50j4GBOqZyJqLRgpNPRttJ7HaoNjJc62GdFdsQE3IsF8vHzD4iS+hZYGNpXduBevY+Mr7DF8duJ5aHqPg2Xcf48Nc9ioPqzHtZYu+eMreg0utkyK4h2pG2MtGi+E9t88aBqtA/tQ65HUovV+883beBT/F6NiZDI0NzotrCuprL5sZECkfCL/24mkHqPXOh3JRnT3hGt/ImXJRuQTKUdurS5JubVKklurS1JurZLk1uqSlFurJLm1uiTl1hr11ko1j440aiAydYhbnW1kMvrBL/A6qXQvVsG5AAAAAElFTkSuQmCC"
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default TypeOfPlace;
