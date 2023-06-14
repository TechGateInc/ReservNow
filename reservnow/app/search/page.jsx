"use client";
import styles from "./page.module.css";
import { useEffect, useState } from "react";
import CentreCard from "@/components/CentreGallery/CentreCard";
import config from "@/config";
import SearchSkeleton from "@/components/SearchSkeleton/SearchSkeleton";

const SearchPage = () => {
  const [filterdCentres, getFilteredCentres] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    const fetchCentres = async () => {
      const searchParams = new URLSearchParams(window.location.search);
      const location = searchParams.get("l");
      const capacity = searchParams.get("c");
      console.log(location);
      console.log(capacity);
      // Post the params to the backend
      try {
        const response = await fetch(`${config.baseURL}/eventcentre/`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ location, capacity }),
        });

        const data = await response.json();
        if (response.ok) {
          getFilteredCentres(data);
          console.log("request success");
          setIsLoading(false);
        } else {
          console.log("Error:", data.message);
        }
      } catch (error) {
        console.log("Error:", error);
      }
    };

    fetchCentres();
  }, []);

  // console.log(filterdCentres);

  return (
    <div className={styles["searchPageHolder"]}>
      <div className={styles["searchCardHolder"]}>
        {isLoading ? (
        <div 
         style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            width:"100%",
            marginTop:35
          }}
        >
          <SearchSkeleton/>
          <SearchSkeleton/>
          <SearchSkeleton/>
          <SearchSkeleton/>
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
