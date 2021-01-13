import React from "react";
import styles from "../layout.module.css";

export default function Intro() {
  return (
    <>
      <section className={`${styles.center} mt100`}>
        <h2>Generate Your Own</h2>
        <h2 className="special1">imaginative job title</h2>
        <h2 className="special2">Job Title</h2>

        <article className="container">
          <p>
            In honor of our new "Imagine That!" campaign, Sun-Maid is
            celebrating Imagination. Use the generator below to reveal your fun,
            new, title. Share on your personal social media channels for a
            chance to win a prize.
          </p>
        </article>
      </section>
    </>
  );
}
