import secondaryImg from "../../assets/maskgroup2.png";
import primaryImg from "../../assets/maskgroup.png";
import type { StudiesProps } from "../../types/studies";
import linkedin from "../../assets/linkedin.png"
import x from "../../assets/twitter.png"


const profile = {
    fullName: "Your Name",
    description: `Intro text: Lorem ipsum dolor sit amet, consectetur \n
                                adipiscing elit, sed do eiusmod tempor incididunt ut \n
                                labore et dolore magna aliqua. `,
    photo: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    socials: [
        {
            name: "LinkedIn",
            url: "",
            icon: linkedin
        },
        {
            name: "X",
            url: "",
            icon: x
        },
    ]
}

const Studies: StudiesProps[] = [
    {
        id: 1,
        title: "Work name here",
        tag: "Fintech",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. sed do eiusmod tempor incididunt ut labore et dolore magna.",
        color: '#FFA217',
        bg: "#fff6e9",
        img: primaryImg,
        position: 'left'
    },
    {
        id: 2,
        title: "Work name here",
        tag: "EdTech",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. sed do eiusmod tempor incididunt ut labore et dolore magna.",
        color: '#000AFF',
        bg: "#D0E6FF",
        img: secondaryImg,
        position: 'right'
    },
    {
        id: 3,
        title: "Work name here",
        tag: "Pharma",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. sed do eiusmod tempor incididunt ut labore et dolore magna.",
        color: '#2AB090',
        bg: "#E0FFF8",
        img: secondaryImg,
        position: 'left',
    }
];


export const CONSTANTS = {
    Studies,
    profile
}