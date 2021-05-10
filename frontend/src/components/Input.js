import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft, faSearch } from "@fortawesome/free-solid-svg-icons";

const Input = ({ icon, onFocus, className, ...props }) => {
  const [touched, setTouched] = useState(false);
  const handleFocus = (e) => {
    setTouched(true);

    if (typeof onFocus === "function") {
      onFocus(e);
    }
  };

  const onClickIcon = (e) => {
    if (typeof props.onClickIcon === 'function') {
      props.onClickIcon(e);
    }
  }

  return (
    <div className={`InputContainer ${className}`}>
      <input
        className={`${(touched ? "InputContainer__InputTouched" : "")} ${icon ? "InputIcon" : ""}`}
        onFocus={handleFocus}
        {...props}
      ></input>
      {icon && (
        <FontAwesomeIcon onClick={(e) => onClickIcon(e)} icon={icon} />
      )}
    </div>
  );
};

export const InputSearch = ({ ...props }) => {
  const [icon, setIcon] = useState(faSearch);

  const handleFocus = (e) => {
    setIcon(faArrowLeft);
  };

  const handleBlur = (e) => {
    setIcon(faSearch);
  };

  return (
    <Input
      className={`InputSearch`}
      onFocus={handleFocus}
      onBlur={handleBlur}
      icon={icon}
      {...props}
    />
  );
};

export default Input;
