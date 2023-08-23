import React from "react";
import ProjCard from "./ProjCard";

const Projects = () => {
    return (
        <div id="projects" style={{ marginBottom: "10rem", marginTop: "7rem" }}>
            <div
                data-aos="fade-up"
                data-aos-duration="2000"
                className="fs-1 text-center mt-3 "
                style={{
                    // color: "White",
                    marginTop: "1.7rem",
                    height: "7vh",
                    textAlign: "center",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    "@media (max-width: 767px)": { height: "auto" },
                    // textShadow: "3px 3px #881ac3",
                    // textShadow: "3px 3px #0277BD",
                    fontWeight: "700",
                    borderRadius: "30px",
                    background: "transparent",
                    // textDecoration: 'underline #0277BD',
                }}
            >
                {" "}
                <h1>Projects</h1>
            </div>
            <div className="d-flex flex-row flex-wrap justify-content-center mt-3">
                <ProjCard
                    name="React Projects"
                    title="Project 1"
                    description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque vero quisquam, quaerat sint inventore, excepturi vel non dolores magnam mollitia neque quo explicabo eos soluta reiciendis maiores repellat illum facilis."
                />
                <ProjCard
                    name="React Projects"
                    title="Project-2"
                    description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque vero quisquam, quaerat sint inventore, excepturi vel non dolores magnam mollitia neque quo explicabo eos soluta reiciendis maiores repellat illum facilis."
                />
                <ProjCard
                    name="React Projects"
                    title="Project -3"
                    description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque vero quisquam, quaerat sint inventore, excepturi vel non dolores magnam mollitia neque quo explicabo eos soluta reiciendis maiores repellat illum facilis."
                />

                {/* <ProjCard/>
      <ProjCard/> */}
            </div>
        </div>
    );
};

export default Projects;