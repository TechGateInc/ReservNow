"use client"
import React, { useState, useEffect } from "react";
import "./DescriptionPicker.css";

const DescriptionPicker = ({descriptionsPick, setDescriptionsPick}) => {
  const Descripions = [
    {
      name: "Peaceful",
      icon: "data:image/png;base64,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",
    },
    {
      name: "Unique",
      icon: "data:image/png;base64,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",
    },
    {
      name: "Family-friendly",
      icon: "data:image/png;base64,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",
    },
    {
      name: "Stylish",
      icon: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGQAAABkCAYAAABw4pVUAAAACXBIWXMAAAsTAAALEwEAmpwYAAADHElEQVR4nO2av2oVQRSHPy6ECIaApeIDBNRSrdL4AAaSPEXyFKYwZbQztenT5BEsfAExplMESwkR1MaRhS0uw2bvzp27u2fO/j4YWO7snzPz7ezsnL0ghBBCCCGEEHYIKvTZBxKCrZtMQhhfgoTgWIjIQ0KMISHGkBBjSIgxJMQYEmIMCTGGhBhDQowhIcaQEGNMSsijulhmMkJmwAfgY71tlckIOZyL8QC7TELIA+DnXIzXwENsMgkh5w1xXmAT90L2Wr7G7WIP10I2ge8tQn4A97CFayGnUWx/6zL/W7WPJdwK2Qb+RbG9Ao6i36p9XmAHl0LWgU9RXF+AOwvqLOBSyNGCUXDb6LGAOyFbwJ8opncd5xcLaRVXQmZ1eqTLm1TTG5iFtIorIYeJa42mNcrYaRU3Qu5H6ZGuq/F4FT92WsWNkPMlO3ZZkX3hQshe5qMn9VHXJ8UL2VzB5JzyMtA3xQs5XdHra9fX5b4pWsj2ihd4FtIqxQpZ7yEFYiGtUqyQo57u5rHTKkUK2er5eT9mWqU4IbMB3ojGTKusXMgYZXfgT79DlmTGDviCYf8cISEtnXDdc96pKa0iIS2dcED/HJQm5DZ6O7ETBu8fCWlHQowhIcaQEGNIiDEkxBgSYgxzQoZYMK0B+8AZ8Bn4BdzU22d13dqS7cmNd3JCdoCrDue5qvdNbY+EdBQyA44TO6z6IPV6QXpdQpYcIccZnVdJkZCOj6AuQnYaPr/+Bk6AZ8DdulTbb+q6eKS8zLh+yv7m55Dc8601zBlfgcct53wCfGuYU5omeglJ7JD9hpHRJmNeSvx9vjqXhGQKOYvqq8dUV95Gx76XkHwhl1H90wQhz6NjL5e4fur+7ueQm6h+IyHWjejYmwHidS8kZDawtHjdNzAUFq/7BobC4nXfwFBYvMmkBpRaxhYydrzuGxgKi9d9A0Nh8bpvYCgs3mSGvmDoWciqkZAFSMiKCRohvu64UFi85i8YJERCctAIcTaizV8w6JElITlohDgb0dkXVCEptSIhjHvTSAi2Rq2EMDEhQgghhBBCCEEG/wGEVRusmtYuggAAAABJRU5ErkJggg==",
    },
    {
      name: "Central",
      icon: "data:image/png;base64,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",
    },
    {
      name: "Spacious",
      icon: "data:image/png;base64,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",
    },
  ];



  const handleDescriptionClick = (name) => {
    // Check if the clicked description is already selected
    const isDescriptionSelected = descriptionsPick.includes(name);

    if (isDescriptionSelected) {
      // If the clicked description is already selected, remove it from the array
      const updatedDescriptions = descriptionsPick.filter(
        (desc) => desc !== name
      );
      setDescriptionsPick(updatedDescriptions);
    } else {
      // If the clicked description is not selected, add it to the array
      // and ensure only 2 descriptions are selected
      if (descriptionsPick.length < 2) {
        const updatedDescriptions = [...descriptionsPick, name];
        setDescriptionsPick(updatedDescriptions);
      } else {
        // Remove the first selected description and add the new one
        const updatedDescriptions = descriptionsPick.slice(1).concat(name);
        setDescriptionsPick(updatedDescriptions);
      }
    }
  };

  return (
    <div className="DescPicker">
      <div className="DescPickerHoler">
        <div className="descPrompt2">
          <p style={{ fontSize: 30, marginBottom: 10 }}>
            Next, lets describe your Centre
          </p>
          <p style={{ color: "grey" }}>
            Choose up to 2 highlights, We'll use these to get your description
            started
          </p>
        </div>
        <div className="descpills">
          {Descripions.map((desc, index) => (
            <div 
            key={index}
            className={`descpill ${descriptionsPick.includes(desc.name) ? "desc-active" : ""}`}
            onClick={() => handleDescriptionClick(desc.name)}
            >
              <img src={desc.icon} width={25} alt="" />
              <p>{desc.name}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default DescriptionPicker;
