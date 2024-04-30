import React from 'react'
import Secondary_button from "../components/Secondary_button";
import { ArrowRight } from "react-bootstrap-icons";

function card({img, card_title, card_text}) {
  return (
    <div className="card col-4 p-3 border-0 bg-transparent">
            <img src={img} className="card-img-top" alt="..." />
            <div className="card-body bg-white">
              <h5 className="card-title fw-bold">{card_title}</h5>
              <div className="d-flex justify-content-between align-items-center">
                <p className="card-text text-muted">{card_text}</p>
                <div style={{ transform: "rotate(-15deg)", padding: "0" }}>
                <Secondary_button
                  text={<ArrowRight />}
                  style={{ borderRadius: "50px" }}
                />
                </div>
              </div>
            </div>
          </div>
  )
}

export default card