import React from "react";
import Section_heading from "../components/Section_heading";
import Section_name from "../components/Section_name";
import Services_card from "../components/Services_card";

function Services() {
  const data = [
    {
      card_no: "01",
      card_title: "Web Design & Development",
      card_description:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Adipisci eveniet totam optio, ipsa accusantium fugiat consequatur sapiente hic est deserunt.",
    },
    {
      card_no: "02",
      card_title: "Video Editing",
      card_description:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Adipisci eveniet totam optio, ipsa accusantium fugiat consequatur sapiente hic est deserunt.",
    },
    {
      card_no: "03",
      card_title: "Photography",
      card_description:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Adipisci eveniet totam optio, ipsa accusantium fugiat consequatur sapiente hic est deserunt.",
    },
    {
      card_no: "04",
      card_title: "Vidography",
      card_description:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Adipisci eveniet totam optio, ipsa accusantium fugiat consequatur sapiente hic est deserunt.",
    },
    {
      card_no: "05",
      card_title: "Philoshophy",
      card_description:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Adipisci eveniet totam optio, ipsa accusantium fugiat consequatur sapiente hic est deserunt.",
    },
    {
      card_no: "06",
      card_title: "Relationship consultancy",
      card_description:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Adipisci eveniet totam optio, ipsa accusantium fugiat consequatur sapiente hic est deserunt.",
    }
  ];
  return (
    <>
      <section className="primary-sec-color" id="services">
        <div className="container services py-section">
          <Section_name
            name="Services"
            style={{ transform: "rotate(-15deg)", padding: "0" }}
          />
          <Section_heading
            name="Services I Offer"
            style={{ fontSize: "50px", marginBottom: "3rem" }}
          />
            <div className="d-flex flex-wrap">
              {data.map((data, index) => (
                <Services_card
                  key={index}
                  card_no={data.card_no}
                  card_title={data.card_title}
                  card_description={data.card_description}
                />
              ))}
            </div>
        </div>
      </section>
    </>
  );
}

export default Services;
