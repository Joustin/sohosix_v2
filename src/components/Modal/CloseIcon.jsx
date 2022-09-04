import React from "react";
import classnames from "classnames";

const CloseIcon = ({ className, ...props }) => (
  <span className={classnames("block", className)} {...props}>
    <svg viewBox="0 0 28 28" xmlns="http://www.w3.org/2000/svg">
      <g fill="none" fillRule="evenodd">
        <circle cx="14" cy="14" fill="#fff" r="14" />
        <path
          d="m20 8.90857143-.9-.90857143-5.1 5.1-5.1-5.1-.9.90857143 5.1 5.09142857-5.1 5.1.9.9 5.1-5.0914286 5.1 5.0914286.9-.9-5.1-5.1z"
          fill="currentColor"
          fillRule="nonzero"
        />
      </g>
    </svg>
  </span>
);

export default CloseIcon;
