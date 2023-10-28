"use client";

import "./CentreGallery.css";
import CentreCard from "./CentreCard";
import { Skeleton } from "../Skeleton/Skeleton";
import { useGetAllEventCentresQuery } from "@/src/api/features/eventCenter/eventCenterSlice";

const CentreGallery = () => {
  const {
    data: centres,
    loading: isLoading,
    isSuccess: Success,
    isError: Error,
    error: ErrorData,
  } = useGetAllEventCentresQuery();

  return (
    <div className="galleryHolder">
      <div className="galleryCardHolder">
        {isLoading ? (
          <div
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
        ) :
          centres?.map((centre, index) => (
            <CentreCard key={index} centre={centre} />
          ))}
      </div>
    </div>
  )
}
export default CentreGallery;
