import React from "react";
import "../../App.css";
import { BannerForEndHTNL } from "../../components/EndHTML/BannerForEndHTML";
import isaacSticker from "../../assets/img/isaac.webm";


function EndHTML() {

  return (
    <div>
      <BannerForEndHTNL />
      <section>
        <p>Працюємо над цим</p>
        <video src={isaacSticker} width="300" height="220" autoPlay muted loop></video>
      </section>
    </div>
  );
}

export default EndHTML;
