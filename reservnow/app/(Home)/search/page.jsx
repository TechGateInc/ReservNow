"use client";
import styles from "./page.module.css";
import { useEffect, useState } from "react";
import CentreCard from "@/components/CentreGallery/CentreCard";
import config from "@/config";
import { Skeleton } from "@/components/Skeleton/Skeleton";
import { TfiFaceSad } from "react-icons/tfi";
import { useGetFilteredCentresMutation } from "@/features/searchEventCentre/SearchCentreSlice";


const SearchPage = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [errorMessage, setErrorMessage] = useState(null);

  const [getFilteredCentres, { data }] = useGetFilteredCentresMutation();

  
  useEffect(() => {
    const searchParams = new URLSearchParams(window.location.search);
    const location = searchParams.get("l");
    const capacity = searchParams.get("c");
    const ctype = searchParams.get("t")

    const fetchData = async () => {
      try {
        setIsLoading(true);
        if (location && capacity && ctype) {
          // Call the mutation
          await getFilteredCentres({ location, capacity, ctype });
        }
        setIsLoading(false);
      } catch (error) {
        setIsLoading(false);
        setErrorMessage("An error occurred while fetching data.");
        console.error(error);
      }
    };

    fetchData();
  }, []);

  // console.log(data)
  

  return (
    <div className={styles["searchPageHolder"]}>
      <div className={styles["searchCardHolder"]}>
        {errorMessage ? (
          <div className={styles["errorMessage"]}>
            <iframe
              src="https://embed.lottiefiles.com/animation/124348"
              style={{ border: "none", marginBottom: 50 }}
            ></iframe>
            <p>{errorMessage} that match your description</p>
          </div>
        ) : isLoading ? (
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
        ) : (
          data &&
          data.map((centre, index) => (
            <CentreCard key={index} centre={centre} />
          ))
        )}
      </div>
    </div>
  );
};

export default SearchPage;
