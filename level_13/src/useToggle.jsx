import { useState } from "react";

const useToggle = (initialValue) => {
  const [value, setValue] = useState(initialValue);

  const toggleValue = () => {
    setValue(!value);
  };

  const showValue = () => {
    setValue(true);
  };

  const hideValue = () => {
    setValue(false);
  };

  return [value, toggleValue, showValue, hideValue];
};

export default useToggle;