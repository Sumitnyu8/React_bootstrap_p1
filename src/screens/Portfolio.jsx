import React from "react";
import Section_name from "../components/Section_name";
import Section_heading from "../components/Section_heading";
import Card from '../components/Card';

function Portfolio() {
  const data = [
    {
      img: "https://boston-react.vercel.app/assets/img/project-1.jpg",
      card_title: "Agency Landing page",
      card_text:
        "Web/WordPress",
    },
    {
      img: "https://boston-react.vercel.app/assets/img/project-2.jpg",
      card_title: "Agency Landing page",
      card_text:
        "Web/WordPress",
    },
    {
      img: "https://boston-react.vercel.app/assets/img/project-2.jpg",
      card_title: "Agency Landing page",
      card_text:
        "Web/WordPress",
    },
    {
      img: "https://boston-react.vercel.app/assets/img/project-4.jpg",
      card_title: "Agency Landing page",
      card_text:
        "Web/WordPress",
    },
    {
      img: "https://boston-react.vercel.app/assets/img/project-5.jpg",
      card_title: "Agency Landing page",
      card_text:
        "Web/WordPress",
    },
    {
      img: "https://boston-react.vercel.app/assets/img/project-6.jpg",
      card_title: "Agency Landing page",
      card_text:
        "Web/WordPress",
    }
    
  ];

  return (
    <>
      <section className="primary-sec-color" id='portfolio'>
        <div className="container services py-section">
          <Section_name
            name="Portfolio"
            style={{ transform: "rotate(-15deg)", padding: "0" }}
          />
          <Section_heading
            name="Latest Projects"
            style={{ fontSize: "50px", marginBottom: "3rem" }}
          />
          {/* <div className="d-flex flex-wrap">
              {data.map((data, index) => (
                <Services_card
                  key={index}
                  card_no={data.card_no}
                  card_title={data.card_title}
                  card_description={data.card_description}
                />
              ))}
            </div> */}

          {/* <Card style={{ width: "18rem" }}>
            <Card.Img variant="top" src="holder.js/100px180" />
            <Card.Body className="">
              <Card.Title>Card Title</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </Card.Text>
              <Button variant="primary">Go somewhere</Button>
            </Card.Body>
          </Card> */}

          <div className="d-flex flex-wrap">
            {
              data.map((data, index) => (
                <Card 
                key={index}
                img={data.img}
                card_title={data.card_title}
                card_text={data.card_text}     
                />
              ))
            }
          </div>

        </div>
      </section>
    </>
  );
}

export default Portfolio;
