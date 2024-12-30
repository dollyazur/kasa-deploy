import React from "react";
import image_desktop from "../../images/Footer/Size=Desktop.png";
import image_mobile from "../../images/Footer/Size=Mobile.png";
import "../../components/Footer/footer.scss";

function Footer() {
  return (
    <div className="footer">
      <div className="footer_desktop">
        <img src={image_desktop} alt="footer_desktop kasa fond noir" />
      </div>
      <div className="footer_mobile">
        <img src={image_mobile} alt="footer_mobile kasa fond noir" />
      </div>
    </div>
  );
}

export default Footer;
