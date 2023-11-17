"use client";

import React, { useState, useEffect } from "react";
import { IoPeopleOutline } from "react-icons/io5";
import { BsFan } from "react-icons/bs";
import { MdArrowForwardIos } from "react-icons/md";
import { NextPage } from "next";

import "./detailsInformation.css";
import { AmenitiesPopup } from "@/src/components/modals/Popup/Popup";
import { DescriptionPopup } from "@/src/components/modals/Popup/Popup";
import { useGetAmenityCategoryQuery } from "@/src/api/features/amenityCategory/amenityCategorySlice";

interface DetailsInformationProps {
  eventCentre: any;
}

const DetailsInformation: NextPage<DetailsInformationProps> = ({
  eventCentre,
}) => {
  const [amenities, setAmenities] = useState(false); // to activate the amenities popup
  const [description, setDescription] = useState(false);
  const [groupedAmenities, setGroupedAmenities] = useState({});

  const {
    data: amenity,
    isLoading: amenityLoading,
    isSuccess: amenitySuccess,
    isError: amenityError,
    error: amenityErrorData,
  } = useGetAmenityCategoryQuery({});

  useEffect(() => {
    if (eventCentre.amenities) {
      // Step 1: Group amenities by category
      const grouped = eventCentre.amenities.reduce((result: any, item: any) => {
        if (!result[item.category]) {
          result[item.category] = [];
        }
        result[item.category].push(item);
        return result;
      }, {});
      // Step 2: Sort categories alphabetically

      // Step 3: Sort item names within each category alphabetically
      for (const category in grouped) {
        if (grouped && grouped[category] && Array.isArray(grouped[category])) {
          grouped[category].sort((a: any, b: any) => {
            if (a && a.name && b && b.name) {
              return a.name.localeCompare(b.name);
            }
            // Handle cases where `name` property is missing or not a string
            return 0; // Or choose a default sorting behavior
          });
        }
      }

      setGroupedAmenities(grouped);
    }
  }, [eventCentre.amenities]);

  useEffect(() => {
    let scrollPosition = 0;

    const handleScroll = () => {
      if (amenities || description) {
        window.scrollTo(0, scrollPosition);
      }
    };

    if (amenities || description) {
      scrollPosition = window.scrollY;
      document.body.classList.add("popup-open");
      document.body.style.paddingRight = `${
        window.innerWidth - document.documentElement.clientWidth
      }px`;
      window.addEventListener("scroll", handleScroll);
      return () => {
        document.body.style.overflow = "";
        document.body.style.paddingRight = "";
        window.removeEventListener("scroll", handleScroll);
      };
    } else {
      document.body.classList.remove("popup-open");
    }
  }, [amenities, description]);

  return (
    <div className="details-card-root" key={eventCentre._id}>
      <div className="details-card-left">
        <div className="details-card-header">
          {eventCentre && eventCentre.venueOwner && (
            <div className="left">
              <p>{eventCentre.venueOwner.name}</p>
              <span>Contact: {eventCentre.venueOwner.phoneNo}</span>
            </div>
          )}
          <div className="right">
            <img src="/images/details.jpg" alt="" />
          </div>
        </div>
        <hr className="line" />
        <div className="details-card-middle">
          <div className="card-middle-content">
            <div className="first-line">
              <img
                src="data:image/png;base64,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"
                alt=""
                style={{ height: "25px", width: "25px" }}
              />
              <div className="content-text">Address</div>
            </div>
            <div
              style={{
                marginLeft: "45px",
                color: "grey",
                fontSize: "14px",
                marginTop: "4px",
              }}
            >
              {eventCentre.address}, {eventCentre.city}, {eventCentre.state}
            </div>
          </div>
          <div className="card-middle-content">
            <div className="first-line">
              <IoPeopleOutline style={{ fontSize: "25px" }} />
              <div className="content-text">Capacity</div>
            </div>
            <div
              style={{
                marginLeft: "46px",
                color: "grey",
                fontSize: "14px",
                marginTop: "4px",
              }}
            >
              {eventCentre.capacity}
            </div>
          </div>
        </div>
        <hr className="line" />
        <div className="details-card-footer">{eventCentre.description}</div>
        {eventCentre && eventCentre.description.length > 150 && (
          <div className="desc-show-more" onClick={() => setDescription(true)}>
            Show more <MdArrowForwardIos />
          </div>
        )}
        <DescriptionPopup trigger={description} setTrigger={setDescription}>
          <div
            style={{ textAlign: "justify", padding: "10px", lineHeight: "1.5" }}
          >
            {eventCentre.description}
          </div>
        </DescriptionPopup>
        <hr className="line" />
        <div className="details-card-amenities">
          <div className="amenities-title">What this place offers</div>
          <div className="amenities-content">
            {eventCentre.amenities &&
              eventCentre.amenities.slice(0, 10).map((item) => (
                <div className="amenities-item" key={item._id}>
                  <div className="amenities-icon">
                    <BsFan />
                  </div>
                  <div
                    className="amenities-name"
                    style={{ marginLeft: "10px" }}
                  >
                    {item.name}
                  </div>
                </div>
              ))}
          </div>
          {eventCentre.amenities && eventCentre.amenities.length > 1 && (
            <div className="amenities-viewAll-btn">
              <button onClick={() => setAmenities(true)}>
                Show all {eventCentre.amenities.length} amenities
              </button>
            </div>
          )}
          <AmenitiesPopup trigger={amenities} setTrigger={setAmenities}>
            <div className="details-card-amenities">
              <div className="amenities-title">What this place offers</div>
              <div className="amenities-content">
                {Object.keys(groupedAmenities).map((categoryId) => {
                  // Find the category name using the categoryId
                  const category =
                    amenitySuccess === true &&
                    amenity.find((cat) => cat._id === categoryId);
                  return (
                    <React.Fragment key={categoryId}>
                      <div className="category-header">
                        {category ? category.name : ""}
                      </div>
                      {groupedAmenities[categoryId].map((item) => (
                        <div style={{ width: "100%" }} key={item._id}>
                          <div className="amenities-item1">
                            <div className="amenities-icon">
                              <BsFan />
                            </div>
                            <div className="amenities-name">{item.name}</div>
                          </div>
                          <hr
                            style={{ marginTop: "30px", marginBottom: "30px" }}
                          />
                        </div>
                      ))}
                    </React.Fragment>
                  );
                })}
              </div>
            </div>
          </AmenitiesPopup>
        </div>
      </div>
    </div>
  );
};

export default DetailsInformation;
