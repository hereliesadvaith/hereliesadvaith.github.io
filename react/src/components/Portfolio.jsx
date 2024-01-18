import React from "react";
import { projects } from "../constants";
import styles, { layout } from "./style";

const ProjectCard = ({ content, title, img }) => {
    return (
        <div className=" basis-1/3 flex-1 transition duration-300 ease-in-out delay-150 hover:scale-110 hover:translate-y-1">
            <h2 className={`${styles.heading3} dark:text-white`}>{title}</h2>
            <img className="py-4 mx-auto rounded-lg object-cover " width={"100%"} height={"100%"} src={img} alt="picture" />
            <p className={`${styles.paragraph} text-md md:text-xl leading-8`}>{content}</p>
        </div>
    )
}


const Portfolio = () => {
    return (
        <section>
            <div>
                <h3 className={`${styles.heading2} pt-10 dark:text-white`}>Portfolio</h3>
                <p className={`${styles.paragraph}  mt-5 text-md md:text-xl leading-8`}>
                    As a beginner, I am eager to start my journey as a programmer.
                    Although I don't have any professional experience, I have been honing my skills
                    through personal projects mentioned below. I am a quick learner and am willing to work
                    closely with clients to ensure that their needs and expectations are met.
                </p>
            </div>
            <div className="flex flex-col gap-10 py-10 lg:flex-row lg:flex-wrap">
                {projects.map((card) => <ProjectCard key={card.id} {...card} />)}
            </div>
        </section>
    )
}

export default Portfolio;