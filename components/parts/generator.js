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
  const [teams, setTeams] = useState("");

  const imaginationFunc = async () => {
    const users = await axios.get("https://arturoweb.com/apis/sunmaid/list");

    let jobsList = users.data.imagination.jobs;
    let rand1 = Math.floor(Math.random() * jobsList.length);
    setJobs(jobsList[rand1].title);

    let wordsList = users.data.imagination.words;
    let rand2 = Math.floor(Math.random() * wordsList.length);
    setWords(wordsList[rand2].word);

    let flavorsList = users.data.imagination.flavors;
    let rand3 = Math.floor(Math.random() * flavorsList.length);
    setFlavors(flavorsList[rand3].flavor);
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

      <div className={styles.socials}>
        <div className={styles.fb_share}>
          <FacebookShareButton
            url="https://sunmaidimagination.com"
            quote={`Imagination Title: ${jobs} ${words} ${flavors}`}
            hashtag="#SunmaidImagination"
          >
            <FacebookIcon />
          </FacebookShareButton>
        </div>

        <div className={styles.tw_share}>
          <TwitterShareButton
            url="https://sunmaidimagination.com"
            title={`${name}: ${jobs} ${words} ${flavors}`}
            quote={`Imagination Department: ${jobs} ${words} ${flavors}`}
            hashtags={["SunmaidImagination", "Sunmaid"]}
          >
            <TwitterIcon />
          </TwitterShareButton>
        </div>
      </div>
    </>
  );
};

export default Generator;
