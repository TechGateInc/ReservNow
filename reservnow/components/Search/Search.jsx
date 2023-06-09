"use client";
import "../Header/header.css";
import Link from "next/link";
import { useState } from "react";

const Search = ({
  toggleExtend,
  isExtended,
  toggleExtend2,
  isExtended2,
  toggleDropdown2,
  isOpen2,
  duplicatedButton,
  handleRemove,
  duplicatedButton2,
  handleRemove2,
}) => {
  const [duplicatedButton3, setDuplicatedButton3] = useState(null);

  const handleDuplicate3 = (button3) => {
    setDuplicatedButton3(button3);
  };

  const handleRemove3 = () => {
    setDuplicatedButton3(null);
  };

  const buttons3 = [
    "Less than 50",
    "50 - 100",
    "100 - 500",
    "Greater than 500",
  ];

  const handleToggleExtend = () => {
    toggleExtend();
    if (isExtended2) {
      toggleExtend2();
    }
  };

  const handleToggleExtend2 = () => {
    toggleExtend2();
    if (isExtended) {
      toggleExtend();
    }
  };

  return (
    <div>
      <div className="SearchBar">
        <div className="extend-button locationBtn" onClick={handleToggleExtend}>
          {duplicatedButton ? (
            <div>
              <p onClick={handleRemove}>{duplicatedButton}</p>
            </div>
          ) : (
            "Anywhere"
          )}
        </div>

        <div>
          <div className="weekBtn extend-button" onClick={handleToggleExtend2}>
            {duplicatedButton2 ? (
              <div>
                <p onClick={handleRemove2}>{duplicatedButton2}</p>
              </div>
            ) : (
              "Any Event"
            )}
          </div>
        </div>
        <div className="guestBtn extend-button" onClick={toggleDropdown2}>
          {duplicatedButton3 ? (
            <div>
              <p onClick={handleRemove3}>{duplicatedButton3}</p>
            </div>
          ) : (
            "Any Guest"
          )}
        </div>
        {isOpen2 && (
          <div className="DropdownContent2">
            {buttons3.map((button3, index) => (
              <Link
                href={""}
                className="DropdownLinks2"
                onClick={() => handleDuplicate3(button3)}
              >
                <p> {button3}</p>
              </Link>
            ))}
          </div>
        )}
        <img
          src="data:image/png;base64,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"
          width={20}
          height={20}
        />
      </div>
    </div>
  );
};

export default Search;
