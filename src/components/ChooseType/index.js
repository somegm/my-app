import React, { useState, useEffect } from "react";
import axios from "axios";
import "../ChooseType/style.css";
import personal from "../../images/icons/personal.svg";
import app from "../../images/icons/app.svg";
import business from "../../images/icons/business.svg";
import event from "../../images/icons/event.svg";
import form from "../../images/icons/form.svg";
import images from "../../images/icons/images.svg";
import multiple from "../../images/icons/multiple.svg";
import music from "../../images/icons/music.svg";
import pdf from "../../images/icons/pdf.svg";
import social from "../../images/icons/social.svg";

const ChooseType = () => {
  const [data, setData] = useState({});
  const [petData, setPetData] = useState({});
  console.log(data)
  //token degiskeni
  let userToken = localStorage.getItem("user_token");
  let userId = localStorage.getItem("userId");

  //kullanıcı veri çekme

  const fetchData = async () => {
    try {
      const response = await fetch(
        "https://s-tekin.jotform.dev/intern-api/user/" +
          userId +
          "/details?user_token=" +
          userToken
      );

      if (!response.ok) {
        throw new Error("Veri alınamadı");
      }

      const responseData = await response.json();
      setData(responseData);
    } catch (error) {
      console.error("Veri çekme hatası: ", error);
    }
  };
  useEffect(() => {
    fetchData();
  }, []);







  
  //pet bilgilerini çekme 
  const petFetchData = async () => {
    try {
      const responsePets = await fetch(
        "https://s-tekin.jotform.dev/intern-api/pet/48?user_token="+userToken
      );

      if (!responsePets.ok) {
        throw new Error("Veri alınamadı");
      }

      const responsePetData = await responsePets.json();
      setPetData(responsePetData);
      console.log(responsePetData)
    } catch (error) {
      console.error("Veri çekme hatası: ", error);
    }
  };
  useEffect(() => {
    petFetchData();
  }, []);

  return (
    <>
     
        <link rel="stylesheet" href="style.css" />
        <div className="main-top">
          <div className="circle">
            <button>
              <i className="fa-solid fa-users" style={{ color: "#4831d4" }} />
              <i
                className="fa-solid fa-layer-group"
                style={{ color: "#4831d4" }}
              />
            </button>
            <p>Choose Type</p>
          </div>
          <div className="circle">
            <button>
              <i
                className="fa-solid fa-pen-to-square"
                style={{ color: "#4831d4" }}
              />
            </button>
            <p>Edit Information</p>
          </div>
          <div className="circle">
            <button>
              <i
                className="fa-solid fa-wand-magic-sparkles"
                style={{ color: "#4831d4" }}
              />
            </button>
            <p>Customize</p>
          </div>
          <div className="circle">
            <button>
              <i
                className="fa-solid fa-download"
                style={{ color: "#4831d4" }}
              />
            </button>
            <p>Download QR</p>
          </div>
        </div>
        <div className="main-center">
          <div className="left-side-container">
            <h5>Choose Your QR Code Type</h5>
            <div className="left-side">
              <button className="chosen-button">
                <img src={personal} alt="" />
                Profile Card
                <p>Personal Page</p>
              </button>
              <button>
                <img src={multiple} alt="" />
                Multiple Links
                <p>Multiple Links</p>
              </button>
              <button>
                <img src={social} alt="" />
                Social Media
                <p>Profile Card</p>
              </button>
              <button>
                <img src={images} alt="" />
                Images
                <p>Images</p>
              </button>
              <button>
                <img src={pdf} alt="" />
                PDF
                <p>PDF</p>
              </button>
              <button>
                <img src={app} alt="" />
                App
                <p>App</p>
              </button>
              <button>
                <img src={music} alt="" />
                MP3
                <p>MP3</p>
              </button>
              <button>
                <img src={form} alt="" />
                Form
                <p>Form</p>
              </button>
              <button>
                <img src={business} alt="" />
                Business Card
                <p>Business Card</p>
              </button>
              <button>
                <img src={event} alt="" />
                Event
                <p>Event</p>
              </button>
            </div>
          </div>
          <div className="right-side">
            <div className="right-side-top">
              <h5>Preview</h5>
            </div>
            <div className="right-side-center">
              <div className="profile">
                <img src="/img/Ellipse 4.svg" alt="" />
              </div>
              <div className="name">
                {data && data.content ? (
                  <>
                    <h5>
                      {data.content.name} {data.content.last_name}
                    </h5>
                    <p>{data.content.user_title}</p>
                    <div className="info">
                      <h5>Phone Number:</h5>
                      <p>{data.content.phone_number}</p>
                    </div>
                    <div className="info">
                      <h5>Address</h5>
                      <p>{data.content.address}</p>
                    </div>
                    <div className="info">
                      <h5>E-mail Address</h5>
                      <p>{data.content.email}</p>{" "}
                      {/* E-posta adresi verisi bu şekilde gösterilebilir */}
                    </div>
                    <div className="info">
                      <h5>Message</h5>
                      <p>{data.content.user_message}</p>
                    </div>
                    <div className="info">
                      <h5>Pet Title</h5>
                      <p>{petData.content.pet_title}</p>
                    </div>
                    <div className="info">
                      <h5>Pet Name</h5>
                      <p>{petData.content.pet_name}</p>
                    </div>
                    <div className="info">
                      <h5>Legal Vaccines Completed ? </h5>
                      <p>{petData.content.legal_vaccines}</p>
                    </div>
                    <div className="info">
                      <h5>Breed</h5>
                      <p>{petData.content.pet_breed}</p>
                    </div>
                    <div className="info">
                      <h5>Illnesses</h5>
                      <p>{petData.content.illness}</p>
                    </div>
                    <div className="info">
                      <h5>Adoption Date</h5>
                      <p>{petData.content.adoption_date}</p>
                    </div>
                    <div className="info">
                      <h5>Pet Message</h5>
                      <p>{petData.content.pet_message}</p>
                    </div>
                  </>
                ) : (
                  <p>Loading...</p>
                )}
              </div>
            </div>
            <div className="right-side-bottom">
              <button>Previous</button>
              <button>Next</button>
            </div>
          </div>
        </div>
    </>
  );
};

export default ChooseType;
