import React from "react"
import panacloud from "../Images/panacloudfootericon.png"
const footer = () => (
  <div style={{ height: "70px", backgroundColor: "#12232f" }}>
    <p
      style={{
        fontSize: "12px",
        lineHeight: "48px",
        color: "white",
        fontWeight: "700px",
        textAlign: "center",
      }}
    >
      © 2019 PIAIC. All rights reserved.
      {/* powered by:<br/> */}
      <div
        style={{
          marginLeft: "left",
          //   display: "inline",
          //   cursor: "pointer",
          //   textAlign: "left",
          //   verticalAlign: "middle",
          float: "right",
        }}
      >
        <span
          style={{
           
          }}
        >
          powered by
        </span>
        <img
          style={{}}
          height="44px"
          width="80px"
          // src="data:https://www.piaic.org/static/media/panacloudfoo"
          src={panacloud}
        />
      </div>
    </p>
    {/* <p style={{display:"inline",color:"white",fontSize:"12px",display:"inline"}}></p> */}
  </div>
)

export default footer
