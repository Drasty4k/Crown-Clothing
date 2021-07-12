import React from "react";

import './custom-button.styles.scss'

const CustomButton = ({ children, ...props }) => (
  <div class='custom-button' {...props}>{children}</div>
);

export default CustomButton;
