import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const PasswordToggle = () => {
  const [visible, setVisiblity] = useState(false);

  const Icon = (
    <FontAwesomeIcon
      icon={visible ? "eye" : "eye-slash"}
      onClick={() => setVisiblity((visibility) => !visibility)}
    />
  );

  const InputType = visible ? "text" : "password";

  return [InputType, Icon];
};

export default PasswordToggle;
