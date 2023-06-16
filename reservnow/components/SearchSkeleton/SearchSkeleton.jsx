import "../SearchSkeleton/searchskeleton.css";

const SearchSkeleton = ({}) => {
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

export default SearchSkeleton;
