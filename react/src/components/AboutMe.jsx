import React from "react";
import styles, { layout } from "./style";

const AboutMe = () => {
    return (
        <section className={`${layout.section}`}>
            <div className={layout.sectionInfo}>
                <h2 className={`${styles.heading2}  dark:text-white`}>
                    About me
                </h2>
                <p className={`${styles.paragraph} max-w-[470px] mt-5 text-md md:text-xl leading-8`}>
                    Hi, I'm <span className={`${styles.textGradient}`}>Advaith</span>, a beginner <span className={`${styles.textGradient}`}>full-stack developer</span> from Kerala.<br />
                    I love coding because it allows me to solve problems and be creative at the same time.
                    I'm passionate about building user-friendly interfaces and making sure that my code is efficient
                    and maintainable.<br />
                    In my free time, I enjoy gaming a little bit and working on personal projects in <span className={`${styles.textGradient}`}>Algorithmic trading. </span>
                    I'm excited to start my career in full-stack development and continue learning and growing in this field.
                </p>
            </div>
            <div className={`${layout.sectionImg} flex-col transition duration-300 ease-in-out delay-150 hover:scale-110 hover:translate-y-1`}>
                <table className="table-auto w-[70%] shadow-2xl shadow-teal-800 rounded border-separate border-spacing-y-1 border-spacing-x-9 ">
                    <tbody className={`${styles.textGradient}`}>
                        <tr>
                            <td>
                                <i className="  devicon-react-original-wordmark text-6xl"></i>
                            </td>
                            <td>
                                <i className="devicon-tailwindcss-original-wordmark text-9xl"></i>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <i className="devicon-postgresql-plain-wordmark text-6xl"></i>
                            </td>
                            <td>
                                <i className="devicon-django-plain-wordmark text-7xl"></i>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <i className="devicon-pandas-original-wordmark text-7xl"></i>
                            </td>
                            <td>
                                <i className="devicon-numpy-original-wordmark text-8xl"></i>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <i className="devicon-ubuntu-plain-wordmark text-6xl"></i>
                            </td>
                            <td>
                                <i className="devicon-pytorch-plain-wordmark text-9xl"></i>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>

        </section >
    )
}

export default AboutMe;