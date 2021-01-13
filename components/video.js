import React from "react";
import ReactPlayer from "react-player";
import styles from "./layout.module.css";

export default function Video() {
  //     function isInView(elem) {
  //     return $(elem).offset().top - $(window).scrollTop() < $(elem).height();
  //   }
  //   $(".autoplay").each(function (index, elem) {
  //     var hasReachedUserExperience = false;
  //     $(window).scroll(function () {
  //       if (isInView($(elem)) && !hasReachedUserExperience) {
  //         hasReachedUserExperience = true;
  //         $("video", elem).get(0).play();
  //       }
  //     });
  //   });

  const url = "./video/video1.mp4";

  return (
    <>
      <section className={`${styles.video}`}>
        <div className={styles.pre_video}>
          <p>
            Explore the future of whole fruit through the official "Imagine
            That!" page featuring our new commercial.
          </p>
        </div>
        <ReactPlayer
          playing
          url={url}
          playing={true}
          muted
          controls
          width="100%"
          height="100%"
        />
      </section>
    </>
  );
}
