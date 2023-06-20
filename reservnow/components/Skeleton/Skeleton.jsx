import "./skeleton.css";

export const Skeleton = ({}) => {
  return (
    <div className="cardSkeleton">
      <div className="skeletonImage"></div>
      <div className="skeletonTextHolder">
        <div className="text1Holder">
          <div className="skeletonText1"></div>
          <div className="skeletonRating"></div>
        </div>

        <div className="skeletonText2"></div>
        <div className="skeletonText3"></div>
        <div className="skeletonText4"></div>
      </div>
    </div>
  );
};

export const DetailsSkeleton = ({}) => {
  return (
    <div className="details-skeleton">
      <div className="details-header-SK">
        <div className="h1-SK"></div>
        <div className="details-sub-header-SK"></div>
        <div className="details-gallery-SK">
          <div className="image-right-SK"></div>
          <div className="image-left-SK">
            <div className="image-SK"></div>
            <div
              className="image-SK"
              style={{ borderTopRightRadius: "5px" }}
            ></div>
            <div className="image-SK"></div>
            <div
              className="image-SK"
              style={{ borderBottomRightRadius: "5px" }}
            ></div>
          </div>
        </div>
        <div className="details-card-SK">
          <div className="left-SK">
            <div className="header-left-SK">
              <div className="text1-SK"></div>
              <div className="text2-SK"></div>
            </div>
            <div className="header-right-SK"></div>
          </div>
          <div className="right-SK">
            <div className="text3-SK"></div>
            <div className="text4-SK"></div>
          </div>
        </div>
      </div>
    </div>
  );
};
