import React from "react"
import ScrollButton from "./features/Scrollbutton"
import UpArrow from "./icons/UpArrow.png"

export default function DevelopmentProcess() {


  return (
    <div className="development-process-container">
      <div className="dp-content">
        <div className="upper-content">
          <ScrollButton
            targetId="scrollTarget-BU"
            name="Business Understanding"
          />
          <div className="img-container">
            <img src={UpArrow} alt="UpArrow" className="right-arrow-icon" />
            <img src={UpArrow} alt="UpArrow" className="left-arrow-icon" />
          </div>
          <ScrollButton
            targetId="scrollTarget-DU"
            name="Data Understanding"
          />
          <img src={UpArrow} alt="UpArrow" className="right-arrow-icon" />
          <ScrollButton
            targetId="scrollTarget-DP"
            name="Data Preparation"
          />
        </div>
        <div className="lower-content">
          <ScrollButton
            targetId="scrollTarget-D"
            name="Deployment"
          />
          <img src={UpArrow} alt="UpArrow" className="left-arrow-icon-lower" />
          <ScrollButton
            targetId="scrollTarget-E"
            name="Evaluation"
          />
          <img src={UpArrow} alt="UpArrow" className="left-arrow-icon-lower" />
          <ScrollButton
            targetId="scrollTarget-M"
            name="Modeling"
          />
        </div>
      </div>
    </div>
  )
}