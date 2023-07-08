"use client";

import "../CentreGallery/CentreGallery.css";
import CentreCard from "./CentreCard";
import { Skeleton } from "../Skeleton/Skeleton";
import { useGetEventCentresQuery } from "@/features/eventCenter/eventCenter";

const CentreGallery = () => {
  const {
    data: centres,
    isLoading,
    isSuccess,
    isError,
    error
  } = useGetEventCentresQuery()

  let content;
  if (isLoading) {
    content = <div className="galleryHolder">
      <div className="galleryCardHolder"> <div
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          width: "100%",
          marginTop: 35,
        }}
      >
        <Skeleton />
        <Skeleton />
        <Skeleton />
        <Skeleton />
      </div>
      </div>
    </div>
  } else if (isSuccess) {
    content = (
      <div className="galleryHolder">
        <div className="galleryCardHolder">
          {centres && centres.map((centre, index) => (
            <CentreCard key={index} centre={centre} />
          ))}
        </div>
      </div>
    )
  }
  else if (isError) {
    content = <p>{JSON.stringify(error)}</p>
  }

  return content
};

export default CentreGallery;
