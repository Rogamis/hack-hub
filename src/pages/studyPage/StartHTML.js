import React from "react";
import "../../App.css";
import { BannerForStartHTML } from "../../components/StartHTML/BannerForStartHTML";
import isaacSticker from "../../assets/img/isaac.webm";
import { useNavigate } from "react-router";

function StartHTML() {
    const navigate = useNavigate();
    function handleClick() {
      navigate("/");
    }
  return (
    <div>
      <BannerForStartHTML />
      <section>
              <p>Працюємо над цим</p>
              <video src={isaacSticker} width="300" height="220" autoPlay muted loop></video>
          <div>
            <button className="next_page_study" onClick={handleClick}>
              <span>На домашню сторінку</span>
            </button>
        </div>
      </section>
    </div>
  );
}

export default StartHTML;
