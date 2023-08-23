import React from "react";
import "./css/ProjCard.css";
import AOS from 'aos'
import 'aos/dist/aos.css'

const ProjCard = (props) => {
    console.log(props);
    return (
        <div
            className="MainCard mx-3"
            data-aos="fade-zoom-in"
            data-aos-easing="ease-in-back"
            // data-aos-delay="100"
            data-aos-offset="0">


            <div className="card mb-0 mt-4 mx-4">
                <img
                    src="https://wallpapercave.com/wp/wp9684443.jpg"
                    style={{ width: "19.97rem", height: "34rem", marginBottom: '0' }}
                    className="card-img-top mb-2 "
                    alt="..."
                />



                <div className="card-body-2 mb-0 ">
                    <h5 className="fw-bold bg-transparent"> {props.title} </h5>
                    <p
                        className="card-text bg-transparent"
                        style={{ fontSize: "0.9rem" }}
                    >
                        {props.description}
                    </p>
                </div>
            </div>


            <div className="Proj-Button1">
                <div className="card-body h-auto ps-2 pt-2 pb-1  ">
                    <h5 className="fw-bolder fs-5 bg-body">{props.title}</h5>

                    <div
                        className="card-lower m-1 mt-4 pt-1 fs-6 fw-normal bg-body d-flex flex-row"
                        style={{
                            position: "absolute",
                            bottom: "1rem",
                            fontFamily: "verdana",
                            margin: "0 auto",
                        }}
                    >
                        {/* <button class="button-15 mx-3" role="button">
                            Source Code
                        </button>
                        <button class="button-15 mx-3" role="button">
                            Live Demo
                        </button> */}
                    </div>
                </div>
                <div className="Proj-Button">
                    <a style={{ backgroundColor: 'transparent', border: 'none', outline: 'none' }} href="#" target="_blank"> <button class="button-15  mx-3" role="button">
                        Source Code
                    </button></a>
                    <a style={{ backgroundColor: 'transparent', border: 'none', outline: 'none' }} href="#" target="_blank"> <button class="button-15  mx-3" role="button">
                        Live Demo
                    </button></a>

                </div>
            </div>



        </div>
    );
};

export default ProjCard;