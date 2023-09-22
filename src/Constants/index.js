import { logo1, logo2, logo3, logo4, logo5, logo6, logo7, logo8 } from '../Assets/Logo/index'
import {Image1,Image2,Image3} from '../Assets/Images'

export const navLinks = [
    { href: "#jobs", label: "Jobs" },
    { href: "#companies", label: "Companies" },
    { href: "#about", label: "About" },
    { href: "#contact", label: "Contact" },
    { href: "#blog", label: "Blog" },
    { href: "#login", label: "Login" },
    { href: "#register", label: "Register" },
];

export const sortby = [
    { id: 1, value: "Relevance" },
    { id: 2, value: "Inclusive" },
    { id: 3, value: "Starts" },
    { id: 4, value: "Contain" }
];

export const type = [
    { id: 1, value: "Remote" },
    { id: 2, value: "Contract" },
    { id: 3, value: "Fulltime" },
    { id: 4, value: "Parttime" }
];

export const level = [
    { id: 1, value: "Beginner" },
    { id: 2, value: "Experienced" },
    { id: 3, value: "Intermediate" },
    { id: 4, value: "Professional" }
];

export const ValuesData = [
    {
        id: 1,
        logo: Image1,
        title: "Simplicity",
        desc: "Things blent more beautiful simple are at the heart of everything we do.",   
    },
    {
        id: 2,
        logo: Image2,
        title: "Social Good",
        desc: "We Believe in making things better for everyone even if just by a little bit!",   
    },
    {
        id: 3,
        logo: Image3,
        title: "Trust",
        desc: "We work on the basis of creating trust which can be nurtured through authenticity and transprancy",   
    }
];


export const JobsData = [

    {
        id: 1,
        logo: logo1,
        title: "Software Engineer",
        time: "Now",
        location: "United States",
        desc: "Join our dynamic team and work on cutting-edge software projects.",
        company: "Tech Innovators Inc."
    },
    {
        id: 2,
        logo: logo2,
        title: "Data Scientist",
        time: "2Hrs",
        location: "Australia",
        desc: "Unlock the power of data and drive data-driven decisions.",
        company: "Data Insights Co."
    },
    {
        id: 3,
        logo: logo3,
        title: "UX/UI Designer",
        time: "4hrs",
        location: "Germany",
        desc: "Create intuitive and visually appealing user interfaces.",
        company: "Design Hub Ltd."
    },
    {
        id: 4,
        logo: logo4,
        title: "Marketing Manager",
        time: "6hrs",
        location: "United Kingdom",
        desc: "Lead marketing campaigns and strategies for a global brand.",
        company: "Global Marketing Solutions Inc."
    },
    {
        id: 5,
        logo: logo5,
        title: "Frontend Developer",
        time: "8hrs",
        location: "France",
        desc: "Craft responsive and engaging web interfaces.",
        company: "Web Wizards Ltd."
    },
    {
        id: 6,
        logo: logo6,
        title: "Product Manager",
        time: "10hrs",
        location: "Canada",
        desc: "Shape the future of innovative products from concept to launch.",
        company: "Product Visionaries Co."
    },
    {
        id: 7,
        logo: logo7,
        title: "Financial Analyst",
        time: "15hrs",
        location: "Singapore",
        desc: "Analyze financial data and provide strategic insights.",
        company: "Financial Solutions Inc."
    },
    {
        id: 8,
        logo: logo8,
        title: "Web Developer",
        time: "20hrs",
        location: "Canada",
        desc: "Join the team of Uranas and learn,play web with us ",
        company: "Uranas Tech Pvt. Ltd"
    },
]
