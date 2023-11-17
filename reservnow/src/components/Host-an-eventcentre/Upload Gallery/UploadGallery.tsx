"use client";

import React, { useState, useRef } from "react";
import { IoImagesOutline } from "react-icons/io5";
import { BsTrash } from "react-icons/bs";
import { IoAddSharp } from "react-icons/io5";
import { NextPage } from "next";

import "./uploadGallery.css";

interface UploadGalleryProps {
  selectedFiles: any;
  setSelectedFiles: any;
  isSubmitDisabled: any;
  coverPhoto: any;
  remainingPhotos: any;
}

const UploadGallery: NextPage<UploadGalleryProps> = ({
  selectedFiles,
  setSelectedFiles,
  isSubmitDisabled,
  coverPhoto,
  remainingPhotos,
}) => {
  const [isDragging, setIsDragging] = useState(false);
  const fileInputRef = useRef(null);

  const handleFileChange = (event: any) => {
    const files = event.target.files;
    setSelectedFiles((prevFiles: any) => [...prevFiles, ...files]);
  };

  const handleClick = () => {
    fileInputRef.current.click();
  };

  const handleDragOver = (event: any) => {
    event.preventDefault();
    setIsDragging(true);
  };

  const handleDragLeave = (event: any) => {
    event.preventDefault();
    setIsDragging(false);
  };

  const handleDrop = (event: any) => {
    event.preventDefault();
    const files = event.dataTransfer.files;
    setSelectedFiles([...files]);
    setIsDragging(false);
  };

  const handleRemove = (index: any) => {
    const updatedFiles = [...selectedFiles];
    updatedFiles.splice(index, 1);
    setSelectedFiles(updatedFiles);
  };

  const handleRemoveFirstPhoto = () => {
    const updatedFiles = [...selectedFiles];
    updatedFiles.splice(0, 1);
    setSelectedFiles(updatedFiles);
  };

  const handleAddMore = () => {
    fileInputRef.current.click();
  };

  const handleDragStart = (event: any, index: any) => {
    event.dataTransfer.setData("text/plain", index);
  };

  const handleDragOverPhoto = (event: any) => {
    event.preventDefault();
  };

  const handleDropPhoto = (event: any, index: any) => {
    event.preventDefault();
    const draggedIndex = event.dataTransfer.getData("text/plain");
    const updatedFiles = [...selectedFiles];
    const draggedFile = updatedFiles[draggedIndex];
    updatedFiles.splice(draggedIndex, 1);
    updatedFiles.splice(index, 0, draggedFile);
    setSelectedFiles(updatedFiles);
  };

  const handleSubmit = (event: any) => {
    event.preventDefault();

    if (selectedFiles.length < 5) {
      alert("Please select at least 5 files.");
      return;
    }

    if (selectedFiles.length > 20) {
      alert("Please select a maximum of 20 files.");
      return;
    }

    // Reset the selected files
    setSelectedFiles([]);
  };

  return (
    <div className="upload-gallery-root">
      {selectedFiles.length === 0 && (
        <div className="upload-gallery-header-container">
          <div className="upload-gallery-header">
            Add some photos of your event centre
          </div>
          <div className="upload-gallery-sub-header">
            You'll need 5 photos to get started. You can add more or make
            changes later.
          </div>
        </div>
      )}
      <input
        type="file"
        multiple
        ref={fileInputRef}
        style={{ display: "none" }}
        onChange={handleFileChange}
      />
      {selectedFiles.length === 0 ? (
        <div
          style={{
            background: isDragging ? "#f7f7f7" : "#fff",
            color: isDragging ? "black" : "#000",
          }}
          onDragOver={handleDragOver}
          onDragLeave={handleDragLeave}
          onDrop={handleDrop}
          className="upload-photos"
        >
          <div className="img-icon">
            <IoImagesOutline />
          </div>
          <div style={{ fontSize: "25px", fontWeight: "600" }}>
            {isDragging ? "Drop the photo" : "Drag your photos here"}
          </div>
          <div style={{ marginTop: "2%", marginBottom: "5%" }}>
            {isDragging ? "" : "Choose at least 5 photos"}
          </div>
          <div
            style={{
              fontWeight: "600",
              textDecoration: "underline",
              cursor: "pointer",
            }}
            onClick={handleClick}
          >
            Upload from your device
          </div>
        </div>
      ) : (
        <div className="preview-photo">
          {coverPhoto && (
            <div className="cover-photo">
              <div className="header">
                <div className="left">
                  <h2>Choose at least 5 photos</h2>
                  <p style={{ color: "grey", marginTop: "6px" }}>
                    Drag to re-order
                  </p>
                </div>
                <div className="right">
                  <button onClick={handleAddMore}> + Add more</button>
                </div>
              </div>
              <div
                className="img-container"
                onDragOver={handleDragOverPhoto}
                onDrop={(event) => handleDropPhoto(event, 0)}
              >
                <div className="img-wrapper">
                  <img
                    src={URL.createObjectURL(coverPhoto)}
                    alt="First Photo"
                    style={{
                      objectFit: "cover",
                      cursor: "grab",
                    }}
                    draggable
                    onDragStart={(event) => handleDragStart(event, 0)}
                  />
                  <div className="remove-btn">
                    <div
                      className="trash-icon"
                      onClick={handleRemoveFirstPhoto}
                    >
                      <BsTrash />
                    </div>
                  </div>
                  <div className="cover-photo-title">
                    <div className="cover-photo-title-main">Cover Photo</div>
                  </div>
                </div>
              </div>
            </div>
          )}
          {remainingPhotos.length > 0 && (
            <div className="other-photos">
              {remainingPhotos.map((file, index) => (
                <div
                  key={index}
                  className="other-photos-container"
                  onDragOver={handleDragOverPhoto}
                  onDrop={(event) => handleDropPhoto(event, index + 1)}
                >
                  <img
                    src={URL.createObjectURL(file)}
                    alt={`Preview ${index + 1}`}
                    style={{
                      objectFit: "cover",
                      cursor: "grab",
                    }}
                    draggable
                    onDragStart={(event) => handleDragStart(event, index + 1)}
                  />
                  <div className="remove-btn1">
                    <div
                      className="trash-icon1"
                      onClick={() => handleRemove(index + 1)}
                    >
                      <BsTrash />
                    </div>
                  </div>
                </div>
              ))}
              <div className="add-more-box" onClick={handleAddMore}>
                <div className="add-icon">
                  <IoAddSharp />
                </div>
                Add more
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default UploadGallery;
