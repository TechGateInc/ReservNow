"use client";

import styles from "./page.module.css";
import { useState } from "react";
import React, { useEffect } from "react";
import Link from "next/link";
import Overview from "@/components/Host-an-eventcentre/Overview/Overview";
import AboutCentreOverview from "@/components/Host-an-eventcentre/About Centre Overview/AboutCentreOverview";
import UploadGallery from "@/components/Host-an-eventcentre/Upload Gallery/UploadGallery";
import StandOut from "@/components/Host-an-eventcentre/Stand Out/StandOut";
import FinishSetup from "@/components/Host-an-eventcentre/Finish Setup/FinishSetup";
import Capacity from "@/components/Host-an-eventcentre/Capacity/Capacity";
import Legal from "@/components/Host-an-eventcentre/Legal/Legal";
import AmenityPicker from "@/components/Host-an-eventcentre/Amenities/AmenityPicker";
import LocationPicker from "@/components/Host-an-eventcentre/LocationPicker/LocationPicker";
import PricePicker from "@/components/Host-an-eventcentre/PricePicker/PricePicker";
import NamePicker from "@/components/Host-an-eventcentre/NamePicker/NamePicker";
import DescriptionInfo from "@/components/Host-an-eventcentre/CentreDescriptionInfo/DescriptionInfo";
import DescriptionPicker from "@/components/Host-an-eventcentre/CentreDescriptionPicker/DescriptionPicker";
import CentreTypePicker from "@/components/Host-an-eventcentre/CentreType/CentreTypePicker";
import ReviewListings from "@/components/Host-an-eventcentre/Review Listing/ReviewListings";
import { useCreateProgressMutation } from "@/features/progress/progressSlice";

const HostAnEventCentrePage = ({}) => {
  const [active, setActive] = useState("Overview");
  const [selectedFiles, setSelectedFiles] = useState([]);
  const isSubmitDisabled = selectedFiles.length < 5;
  const coverPhoto = selectedFiles.length > 0 ? selectedFiles[0] : null;
  const remainingPhotos = selectedFiles.slice(1);
  const [activeType, setActiveType] = useState(null);
  const [price, setPrice] = useState(0);
  const [description, setDescription] = useState("");
  const [name, setName] = useState("");
  const [capacity, setCapacity] = useState(10);
  const [isRadioButtonSelected, setIsRadioButtonSelected] = useState(false);
  const [descriptionsPick, setDescriptionsPick] = useState([]);
  const [activeAmenities, setActiveAmenities] = useState([]);
  const [address, setAddress] = useState("");

  const [createProgress] = useCreateProgressMutation();
  const bookingHandleSubmit = async (e) => {
    e.preventDefault();

    const formData = {
      name: name,
      address: "",
      capacity: capacity,
      price: price,
      description: description,
      city: "",
      state: "",
      venueOwner: "",
      amenities: "",
    };

    try {
      await createProgress(formData);
    } catch (error) {
      console.error(error);
      window.alert("An error occurred. Please try again.");
    }
  };

  return (
    <div className={styles["host-root"]}>
      <div className={styles["host-container"]}>
        <div className={styles["host-top"]}>
          <div className={styles["host-header"]}>
            <img
              src="/images/RNL.svg"
              alt="ReservNow"
              style={{ height: "22px" }}
            />
            <Link href={"/newcentre"}>
              <button>Exit</button>
            </Link>
          </div>
          <div className={styles["host-content"]}>
            {active === "Overview" && <Overview />}

            {active === "AboutCentreOverview" && <AboutCentreOverview />}
            {active === "CentreTypePicker" && (
              <CentreTypePicker
                activeType={activeType}
                setActiveType={setActiveType}
              />
            )}
            {active === "LocationPicker" && <LocationPicker 
            address={address} setAddress={setAddress}
            
            />}
            {active === "Capacity" && (
              <Capacity capacity={capacity} setCapacity={setCapacity} />
            )}
            {active === "StandOut" && <StandOut />}
            {active === "AmenityPicker" && (
              <AmenityPicker
                activeAmenities={activeAmenities}
                setActiveAmenities={setActiveAmenities}
              />
            )}
            {active === "UploadGallery" && (
              <UploadGallery
                selectedFiles={selectedFiles}
                setSelectedFiles={setSelectedFiles}
                isSubmitDisabled={isSubmitDisabled}
                coverPhoto={coverPhoto}
                remainingPhotos={remainingPhotos}
              />
            )}
            {active === "NamePicker" && (
              <NamePicker name={name} setName={setName} />
            )}
            {active === "DescriptionInfo" && (
              <DescriptionInfo
                description={description}
                setDescription={setDescription}
              />
            )}
            {active === "DescriptionPicker" && (
              <DescriptionPicker
                descriptionsPick={descriptionsPick}
                setDescriptionsPick={setDescriptionsPick}
              />
            )}
            {active === "FinishSetup" && <FinishSetup />}
            {active === "PricePicker" && (
              <PricePicker price={price} setPrice={setPrice} />
            )}
            {active === "Legal" && (
              <Legal
                isRadioButtonSelected={isRadioButtonSelected}
                setIsRadioButtonSelected={setIsRadioButtonSelected}
              />
            )}
            {active === "ReviewListings" && (
              <ReviewListings
                selectedFiles={selectedFiles}
                name={name}
                price={price}
                description={description}
              />
            )}
          </div>
        </div>

        <div className={styles["pagefooter-section"]}>
          <div className={styles["loader-background"]}>
            <div
              className={`${styles["page-loader"]} ${
                active === "Overview"
                  ? styles["loader-zero-width"]
                  : active === "AboutCentreOverview"
                  ? styles["loader-medium-width"]
                  : active === "CentreTypePicker"
                  ? styles["loader-medium2-width"]
                  : active === "LocationPicker"
                  ? styles["loader-medium3-width"]
                  : active === "Capacity"
                  ? styles["loader-medium4-width"]
                  : active === "StandOut"
                  ? styles["loader-medium5-width"]
                  : active === "AmenityPicker"
                  ? styles["loader-medium6-width"]
                  : active === "UploadGallery"
                  ? styles["loader-medium7-width"]
                  : active === "NamePicker"
                  ? styles["loader-medium8-width"]
                  : active === "DescriptionInfo"
                  ? styles["loader-medium9-width"]
                  : active === "DescriptionPicker"
                  ? styles["loader-medium10-width"]
                  : active === "FinishSetup"
                  ? styles["loader-medium11-width"]
                  : active === "PricePicker"
                  ? styles["loader-medium12-width"]
                  : active === "Legal"
                  ? styles["loader-medium13-width"]
                  : styles["loader-full-width"]

                // : styles["loader-full-width"]
              }`}
            ></div>
          </div>
          <div className={styles["host-footer"]}>
            {active === "Overview" && <div></div>}
            {active === "Overview" && (
              <button
                onClick={() => setActive("AboutCentreOverview")}
                className={styles["get-started-btn"]}
              >
                Get started
              </button>
            )}
            {active === "AboutCentreOverview" && (
              <button
                className={styles["back-btn"]}
                onClick={() => setActive("Overview")}
              >
                Back
              </button>
            )}
            {active === "AboutCentreOverview" && (
              <button
                onClick={() => setActive("CentreTypePicker")}
                className={styles["next-btn"]}
              >
                Next
              </button>
            )}
            {active === "CentreTypePicker" && (
              <button
                className={styles["back-btn"]}
                onClick={() => setActive("AboutCentreOverview")}
              >
                Back
              </button>
            )}
            {active === "CentreTypePicker" && (
              <button
                onClick={() => setActive("LocationPicker")}
                className={styles["next-btn"]}
                disabled={!activeType}
              >
                Next
              </button>
            )}
            {active === "LocationPicker" && (
              <button
                className={styles["back-btn"]}
                onClick={() => setActive("CentreTypePicker")}
              
              >
                Back
              </button>
            )}
            {active === "LocationPicker" && (
              <button
                onClick={() => setActive("Capacity")}
                className={styles["next-btn"]}
                disabled={!address}
              >
                Next
              </button>
            )}
            {active === "Capacity" && (
              <button
                className={styles["back-btn"]}
                onClick={() => setActive("LocationPicker")}
              >
                Back
              </button>
            )}
            {active === "Capacity" && (
              <button
                onClick={() => setActive("StandOut")}
                className={styles["next-btn"]}
                disabled={capacity < 20}
              >
                Next
              </button>
            )}
            {active === "StandOut" && (
              <button
                className={styles["back-btn"]}
                onClick={() => setActive("Capacity")}
              >
                Back
              </button>
            )}
            {active === "StandOut" && (
              <button
                onClick={() => setActive("AmenityPicker")}
                className={styles["next-btn"]}
              >
                Next
              </button>
            )}
            {active === "AmenityPicker" && (
              <button
                className={styles["back-btn"]}
                onClick={() => setActive("StandOut")}
              >
                Back
              </button>
            )}
            {active === "AmenityPicker" && (
              <button
                onClick={() => setActive("UploadGallery")}
                className={styles["next-btn"]}
                disabled={activeAmenities.length === 0}
              >
                Next
              </button>
            )}
            {active === "UploadGallery" && (
              <button
                className={styles["back-btn"]}
                onClick={() => setActive("AmenityPicker")}
              >
                Back
              </button>
            )}
            {active === "UploadGallery" && (
              <button
                onClick={() => setActive("NamePicker")}
                className={`${styles["next-btn"]} ${
                  isSubmitDisabled ? styles["disabled"] : ""
                }`}
                disabled={isSubmitDisabled}
              >
                Next
              </button>
            )}
            {active === "NamePicker" && (
              <button
                className={styles["back-btn"]}
                onClick={() => setActive("UploadGallery")}
              >
                Back
              </button>
            )}
            {active === "NamePicker" && (
              <button
                onClick={() => setActive("DescriptionInfo")}
                className={styles["next-btn"]}
                disabled={!name}
              >
                Next
              </button>
            )}
            {active === "DescriptionInfo" && (
              <button
                className={styles["back-btn"]}
                onClick={() => setActive("NamePicker")}
              >
                Back
              </button>
            )}
            {active === "DescriptionInfo" && (
              <button
                onClick={() => setActive("DescriptionPicker")}
                className={styles["next-btn"]}
                disabled={!description}
              >
                Next
              </button>
            )}
            {active === "DescriptionPicker" && (
              <button
                className={styles["back-btn"]}
                onClick={() => setActive("DescriptionInfo")}
              >
                Back
              </button>
            )}
            {active === "DescriptionPicker" && (
              <button
                onClick={() => setActive("FinishSetup")}
                className={styles["next-btn"]}
                disabled={descriptionsPick.length === 0}
              >
                Next
              </button>
            )}
            {active === "FinishSetup" && (
              <button
                className={styles["back-btn"]}
                onClick={() => setActive("DescriptionPicker")}
              >
                Back
              </button>
            )}
            {active === "FinishSetup" && (
              <button
                onClick={() => setActive("PricePicker")}
                className={styles["next-btn"]}
              >
                Next
              </button>
            )}
            {active === "PricePicker" && (
              <button
                className={styles["back-btn"]}
                onClick={() => setActive("FinishSetup")}
              >
                Back
              </button>
            )}
            {active === "PricePicker" && (
              <button
                onClick={() => setActive("Legal")}
                className={styles["next-btn"]}
                disabled={!price}
              >
                Next
              </button>
            )}
            {active === "Legal" && (
              <button
                className={styles["back-btn"]}
                onClick={() => setActive("PricePicker")}
              >
                Back
              </button>
            )}
            {active === "Legal" && (
              <button
                onClick={() => setActive("ReviewListings")}
                className={styles["next-btn"]}
                disabled={!isRadioButtonSelected}
              >
                Next
              </button>
            )}
            {active === "ReviewListings" && (
              <button
                className={styles["back-btn"]}
                onClick={() => setActive("Legal")}
              >
                Back
              </button>
            )}
            {active === "ReviewListings" && (
              <button
                onClick={() => setActive("")}
                className={styles["next-btn"]}
              >
                Next
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default HostAnEventCentrePage;
