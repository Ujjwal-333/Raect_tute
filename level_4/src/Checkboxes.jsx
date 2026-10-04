import React from "react";

import { useState } from "react";
const Checkboxes = () => {
  const [skills, setSkills] = useState([]);
  const handleCheckbox = (event) => {
    console.log(event.target.value, event.target.checked);
    if (event.target.checked) {
      setSkills([...skills, event.target.value]);
    } else {
      setSkills(skills.filter((skill) => skill !== event.target.value));
    }
  };
  return (
    <>
      <h1>handle checkboxes</h1>
      <input type="checkbox" id="php" value="PHP" onChange={handleCheckbox} />
      <label htmlFor="php">PHP</label>
      <br />
      <input type="checkbox" id="Java" value="Java" onChange={handleCheckbox} />
      <label htmlFor="Java">Java</label>
      <br />

      <input
        type="checkbox"
        id="python"
        value="Python"
        onChange={handleCheckbox}
      />
      <label htmlFor="python">Python</label>
      <br />

      <input
        type="checkbox"
        id="javascript"
        value="JavaScript"
        onChange={handleCheckbox}
      />
      <label htmlFor="javascript">JavaScript</label>
      <br />

      <input type="checkbox" id="sql" value="SQL" onChange={handleCheckbox} />
      <label htmlFor="sql">SQL</label>
      <br />
      <h3>Selected Skills: {skills.join(", ")}</h3>
    </>
  );
};

export default Checkboxes;
