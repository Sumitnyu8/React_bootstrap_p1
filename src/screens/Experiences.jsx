import React from "react";
import Section_name from "../components/Section_name";
import Section_heading from "../components/Section_heading";
import Description from "../components/Description";
import Skill_card from "../components/Skill_card";
import { FaHtml5 } from "react-icons/fa";
import Secondary_button from  "../components/Secondary_button";

function Experiences() {
    const data = [
        {
            icon : <FaHtml5/>,
            title : 'Html'
        },
        {
            icon : <FaHtml5/>,
            title : 'Html'
        },
        {
            icon : <FaHtml5/>,
            title : 'Html'
        },
        {
            icon : <FaHtml5/>,
            title : 'Html'
        },
        {
            icon : <FaHtml5/>,
            title : 'Html'
        },
        {
            icon : <FaHtml5/>,
            title : 'Html'
        },
    ]
  return (
    <>
      <section className="py-section" id="skills">
        <div className="container d-flex ">
          <div className="col-6 title">
            <div className="col-6">
              <Section_name name="Hello" />
              <Section_heading
                name="Skills and "
                style={{ fontSize: "50px", marginBottom: "0" }}
              />
              <Section_heading
                name="Experience"
                style={{ fontSize: "50px", marginBottom: "2rem" }}
              />
              <Description text="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Pariatur error fuga distinctio officiis ut! Quidem rem aliquam velit expedita?" />
            </div>
            <div className="col-12">
              <Section_heading
                name="My Skills"
                style={{ fontSize: "30px", marginTop: "4rem" }}
              />
              <div className="d-flex flex-wrap">
                {data.map((data, index) => (
                  <Skill_card key={index} icon={data.icon} title={data.title} />
                ))}
              </div>
            </div>
          </div>
          <div className="col-5 ms-auto">
          <Section_heading
                name="Experiences"
                style={{ fontSize: "30px", marginBottom: "0" }}
              />
            <div className="Experiences-content">
                <div className="col-12 border-top d-flex p-3">
                    <p className="col-6 fw-bolder m-0">Jan 2021 - Present</p>
                    <p className="col-6 m-0">
                        <p className="m-0 fw-bolder">Creative Director</p>
                        <Description text='pxdraft Ltd, UK' style={{ fontSize: "15px", marginBottom: "0" }}/>

                    </p>
                </div>
                <div className="col-12 border-top d-flex p-3">
                    <p className="col-6 fw-bolder m-0">Jan 2021 - Present</p>
                    <p className="col-6 m-0">
                        <p className="m-0 fw-bolder">Creative Director</p>
                        <Description text='pxdraft Ltd, UK' style={{ fontSize: "15px", marginBottom: "0" }}/>

                    </p>
                </div>
                <div className="col-12 border-top d-flex p-3">
                    <p className="col-6 fw-bolder m-0">Jan 2021 - Present</p>
                    <p className="col-6 m-0">
                        <p className="m-0 fw-bolder">Creative Director</p>
                        <Description text='pxdraft Ltd, UK' style={{ fontSize: "15px", marginBottom: "0" }}/>

                    </p>
                </div>
                <div className="col-12 border-top d-flex p-3">
                    <p className="col-6 fw-bolder m-0">Jan 2021 - Present</p>
                    <p className="col-6 m-0">
                        <p className="m-0 fw-bolder">Creative Director</p>
                        <Description text='pxdraft Ltd, UK' style={{ fontSize: "15px", marginBottom: "0" }}/>

                    </p>
                </div>
                <div className="me d-flex flex-column align-items-center">
                    <img src="https://boston-react.vercel.app/assets/img/avatar.png" alt="me" className="mb-3"/>
                    <Secondary_button text='Hire me' style={{width : '100px', Height : '10px', paddingRight : '8px', paddingLeft : '8px',  paddingTop : '5px', paddingBottom : '5px'}}/>
                </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Experiences;
