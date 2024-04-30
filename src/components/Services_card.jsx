import React from "react";
import { ArrowRight } from 'react-bootstrap-icons';

function Services_card({ card_no, card_title, card_description}) {
  return (
        <div className="card mb-4 col-4 px-3 border-0 bg-transparent">
          <div className="card-body p-5 bg-white">
            <h5 className="card-title h1" style={{ fontSize: "60px" }}>
              {card_no}
            </h5>
            <h6 className="card-subtitle mb-2 text-muted" style={{ fontSize: "32px" }}>{card_title}</h6>
            <p className="card-text">{card_description}</p>
            <div>
              {/* {card_icon} */}
              <ArrowRight />
            </div>
          </div>
        </div>
  );
}

export default Services_card;
