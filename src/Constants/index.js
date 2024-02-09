import html from "../Assests/HTMl.png";
import csharp from "../Assests/csharp.png";
import css from "../Assests/CSS.png";
import contact from "../Assests/Contact.png";
import frontend from "../Assests/Frontend.png";
import java from "../Assests/java.png";
import uiux from "../Assests/UIUX.png";
import backend from "../Assests/bakend.png";
import git from "../Assests/git.png";
import github from "../Assests/github.png";
import pro1 from "../Assests/pro1.png";
import pro2 from "../Assests/pro2.png";

const services = [
    {
        title: "Frontend Developer",
        icon: frontend,
    },
    {
        title: "Backend Developer",
        icon: backend,
    },
    {
        title: "UI UX Designer",
        icon: uiux,
    },
];

const technologies = [
    {
        name: "HTML 5",
        icon: html,
    },
    {
        name: "CSS",
        icon: css,
    },
    {
        name: "C#",
        icon: csharp,
    },
    {
        name: "JAVA",
        icon: java,
    },
    {
        name: "git",
        icon: git,
    },
    {
        name: "github",
        icon: github,
    },
];

const projects = [
    {
        name: "Free Hold",
        description:
            "Web site for made using React Js and Tailwindcss  to style and make it responsive",
        tags: [
            {
                name: "Typescript",
                color: "blue-text-gradient",

            },
            {
                name: "Angular",
                color: "green-text-gradient",
            },
            {
                name: "Bootstrap",
                color: "pink-text-gradient",
            },
        ],
        image: pro1,
        source_code_link: "",
        source_deploy_link: "",
    },

    {
        name: "To do",
        description:
            "Web site for made using React Js and Tailwindcss  to style and make it responsive",
        tags: [
            {
                name: "Typescript",
                color: "blue-text-gradient",

            },
            {
                name: "Angular",
                color: "green-text-gradient",
            },
            {
                name: "Bootstrap",
                color: "pink-text-gradient",
            },
        ],
        image: pro2,
        source_code_link: "",
        source_deploy_link: "",
    },

];

export { services, technologies, projects };