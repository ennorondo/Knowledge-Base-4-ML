import React from "react"
import ScrollButton from "./features/Scrollbutton"

export default function DevelopmentProcess() {


  return (
    <div className="development-process-container">
      <div className="dp-content">
        <div className="upper-content">
          <ScrollButton
            targetId="scrollTarget-BU"
            name="Business Understanding"
          />
          <ScrollButton
            targetId="scrollTarget-DU"
            name="Data Understanding"
          />
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
          <ScrollButton
            targetId="scrollTarget-E"
            name="Evaluation"
          />
          <ScrollButton
            targetId="scrollTarget-M"
            name="Modeling"
          />
        </div>
      </div>
    </div>
  )
}