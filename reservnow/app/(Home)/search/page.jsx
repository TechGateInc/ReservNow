"use client";
import styles from "./page.module.css";
import { useEffect, useState } from "react";
import CentreCard from "@/components/CentreGallery/CentreCard";
import config from "@/config";
import { Skeleton } from "@/components/Skeleton/Skeleton";
<<<<<<< HEAD:reservnow/app/(Home)/search/page.jsx
import { TfiFaceSad } from "react-icons/tfi";
import { useGetFilteredCentresMutation } from "@/features/eventCentreHome/SearchCentreSlice";

=======
>>>>>>> feat-auth:reservnow/app/search/page.jsx

const SearchPage = () => {
  // const [filterdCentres, getFilteredCentres] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [errorMessage, setErrorMessage] = useState(null);
  // useEffect(() => {
  //   const fetchCentres = async () => {
  //     const searchParams = new URLSearchParams(window.location.search);
  //     const location = searchParams.get("l");
  //     const capacity = searchParams.get("c");
  //     // Post the params to the backend
  //     try {
  //       const response = await fetch(`${config.baseURL}/eventcentre/search`, {
  //         method: "POST",
  //         headers: {
  //           "Content-Type": "application/json",
  //         },
  //         body: JSON.stringify({ location, capacity }),
  //       });

  //       const data = await response.json();
  //       if (response.ok) {
  //         getFilteredCentres(data);
  //         console.log("request success");
  //         setIsLoading(false);
  //       } else {
  //         setErrorMessage(data.message);
  //       }
  //     } catch (error) {
  //       console.log("Error:", error);
  //     }
  //   };

  //   fetchCentres();
  // }, []);
  const [getFilteredCentres, { data }] = useGetFilteredCentresMutation();

  useEffect(() => {
    const searchParams = new URLSearchParams(window.location.search);
    const location = searchParams.get("l");
    const capacity = searchParams.get("c");

    if (location && capacity) {
      // Call the mutation
      getFilteredCentres({ location, capacity });
    }
  }, []);

  console.log(data)

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
          filterdCentres &&
          filterdCentres.map((centre, index) => (
            <CentreCard key={index} centre={centre} />
          ))
        )}
      </div>
    </div>
  );
};

export default SearchPage;
