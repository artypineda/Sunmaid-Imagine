import React, { useState, useEffect } from "react";
import styles from "../layout.module.css";
import axios from "axios";
import Jobs from "./elements/jobs";
import Words from "./elements/words";
import Flavors from "./elements/flavors";

import {
  FacebookShareButton,
  FacebookIcon,
  TwitterShareButton,
  TwitterIcon,
} from "react-share";

const Generator = (props) => {
  const { name } = props;

  const [jobs, setJobs] = useState([]);
  const [words, setWords] = useState([]);
  const [flavors, setFlavors] = useState([]);
  const [descriptor, setDescriptor] = useState("");

  const imaginationFunc = async () => {
    const users = await axios.get(
      "https://sunmaidimagination.com/api/list.json"
    );

    let jobsList = users.data.imagination.jobs;
    let rand1 = Math.floor(Math.random() * jobsList.length);
    setJobs(jobsList[rand1].title);

    let wordsList = users.data.imagination.words;
    let rand2 = Math.floor(Math.random() * wordsList.length);
    setWords(wordsList[rand2].word);

    let flavorsList = users.data.imagination.flavors;
    let rand3 = Math.floor(Math.random() * flavorsList.length);
    setFlavors(flavorsList[rand3].flavor);

    const descriptor =
      "I'm happy to introduce my new job title as part of Sun-Maid's new Imagine That Campaign! We’re committed to fueling children’s imaginations one whole fruit snack at a time.";

    setDescriptor(descriptor);
  };

  useEffect(() => {
    imaginationFunc();
  }, []);

  // const clearFields = () => {
  //   if (!name.length > 0) {
  //     setName("");
  //   }
  // };

  return (
    <>
      <div id="spacer" className={styles.spacer}></div>
      <div className={styles.form_data}>
        <div className={styles.top}>
          <Jobs randomJobSelect={jobs} />
          <Words randomWord={words} />
          <Flavors randomFlavor={flavors} />
        </div>
        <div className={styles.bottom}>
          <h2 className="delay4">
            {name}, <Jobs randomJobSelect={jobs} /> <Words randomWord={words} />{" "}
            <Flavors randomFlavor={flavors} />{" "}
          </h2>
        </div>
      </div>

      <div className={styles.socialtext}>
        <h3>Share Your Results</h3>
      </div>

      <div className={styles.socials}>
        <a href="/#facebook">
          <div className={styles.fb_share}>
            <FacebookShareButton
              url="sunmaid.com/imaginethat"
              quote={`Imagination Title: ${jobs} ${words} ${flavors}\n\n  –  ${descriptor}`}
              hashtag="#ImagineThat"
            >
              <FacebookIcon />
            </FacebookShareButton>
          </div>
        </a>

        <a href="/#twitter">
          <div className={styles.tw_share}>
            <TwitterShareButton
              url="https://sunmaid.com/imaginethat"
              title={`${name}: ${jobs} ${words} ${flavors}\n\n${descriptor}`}
              quote={`Imagination Department: ${jobs} ${words} ${flavors}`}
              hashtags={["ImagineThat", "Sunmaid"]}
            >
              <TwitterIcon />
            </TwitterShareButton>
          </div>
        </a>
      </div>
    </>
  );
};

export default Generator;
