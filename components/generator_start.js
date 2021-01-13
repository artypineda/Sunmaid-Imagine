import React, { useState } from "react";
import styles from "./layout.module.css";
import Generator from "./parts/generator";

const Generator_Start = () => {
  const [name, setName] = useState("");
  const [afterSubmit, setAfterSubmit] = useState(false);
  const [clicked, setClicked] = useState(false);

  const handleGenerate = (e) => {
    e.preventDefault();
    setAfterSubmit(true);

    if (!clicked) {
      location.href = "#go";
      setClicked(true);
    }
  };

  const handleReset = (e) => {
    e.preventDefault();
    setAfterSubmit(false);
  };

  return (
    <>
      {afterSubmit ? (
        <>
          <section className={styles.genSection}>
            <form onSubmit={handleReset}>
              <h3 className="sr-only">Refresh The Page</h3>
              <div>
                <input disabled text="text" value={name} required />
                <button type="submit">Again?</button>
              </div>
            </form>

            <Generator name={name} />
          </section>
        </>
      ) : (
        <>
          <section id="go" className={styles.genSection}>
            <form onSubmit={handleGenerate}>
              <h3 className="sr-only">Your Name</h3>
              <div>
                <input
                  text="text"
                  onChange={(e) => setName(e.target.value)}
                  value={!clicked ? name : name}
                  placeholder="Your Name"
                  required
                />
                <button type="submit">Generate</button>
              </div>
            </form>
          </section>
        </>
      )}
    </>
  );
};

export default Generator_Start;
