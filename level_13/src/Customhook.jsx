import useToggle from "./useToggle";

const Customhook = () => {
  const [value, toggleValue, showValue, hideValue] = useToggle(true);

  return (
    <>
      <button onClick={toggleValue}>Toggle Heading</button>

      <button onClick={hideValue}>Hide Heading</button>

      <button onClick={showValue}>Show Heading</button>

      {value && <h1>Hello Ujjwal</h1>}
    </>
  );
};

export default Customhook;