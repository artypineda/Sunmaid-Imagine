import React from "react";

export default function Clouds() {
  return (
    <section className="clouds">
      <div className="clouds_1 floating_1">
        <img src="/images/cloud.png" alt="clouds" width="700" height="181" />
      </div>

      <div className="clouds_2 floating_2">
        <img src="/images/cloud.png" alt="clouds" width="700" height="181" />
      </div>

      <div className="clouds_3 floating_2">
        <img src="/images/cloud.png" alt="clouds" width="700" height="181" />
      </div>

      <div className="clouds_4 floating_1">
        <img src="/images/cloud.png" alt="clouds" width="700" height="181" />
      </div>

      {/* ParaGliders */}
      <div className="paraglider">
        <img
          src="/images/paragulider.png"
          alt="Paraglide"
          width="386"
          height="282"
          className="tilt_1"
        />
      </div>

      <div className="paraglider_2">
        <img
          src="/images/paragulider.png"
          alt="Paraglide"
          width="486"
          height="auto"
          className="tilt_2"
        />
      </div>

      <div className="paraglider_3">
        <img
          src="/images/paragulider.png"
          alt="Paraglide"
          width="120"
          height="auto"
          className="tilt_2"
        />
      </div>
    </section>
  );
}
