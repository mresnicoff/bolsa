import { logo1, logo2, logo3, logo4, logo5, logo6, logo7, logo8 } from '../Assets/Logo/index'
import {Image1,Image2,Image3} from '../Assets/Images'
import axios from 'axios';
export const navLinks = [
    { href: "/", label: "Empleos" },
    { href: "#companies", label: "Empresas" },
    { href: "/about", label: "Acerca" },
    { href: "#contact", label: "Contacto" },
    { href: "#blog", label: "Blog" },
    { href: "#login", label: "Login" },
    { href: "#register", label: "Registrarse" },
];

export const sortby = [
    { id: 1, value: "Fecha" },
    { id: 2, value: "Localidad" },

];

export const type = [
    { id: 1, value: "Remoto" },
    { id: 2, value: "A Plazo" },
    { id: 3, value: "Fulltime" },
    { id: 4, value: "Parttime" }
];

export const level = [
    { id: 1, value: "Principiantes" },
    { id: 2, value: "Experimentado" },
    { id: 3, value: "Intermedio" },
    { id: 4, value: "Profesional" }
];

export const ValuesData = [
    {
        id: 1,
        logo: Image1,
        title: "Simplicity",
        desc: "Las cosas se fusionan mejor cuando son sencillos. Este es nuestro moto.",   
    },
    {
        id: 2,
        logo: Image2,
        title: "Social Good",
        desc: "Creemos en hacer lo mejor que podemos",   
    },
    {
        id: 3,
        logo: Image3,
        title: "Confianza",
        desc: "Trabajamos para la transparencia ciudadana",   
    }
];


export const JobsData = [

    {
        id: 1,
        logo: logo1,
        title: "Software Engineer",
        time: "Recién",
        location: "EEUU",
        desc: "Únete a nuestro equipo.",
        company: "Tech Innovators Inc."
    },
    {
        id: 2,
        logo: logo2,
        title: "Data Scientist",
        time: "2Hrs",
        location: "Australia",
        desc: "Abrí el poder de los datos.",
        company: "Data Insights Co."
    },
    {
        id: 3,
        logo: logo3,
        title: "UX/UI Designer",
        time: "4hrs",
        location: "Alemania",
        desc: "Hacé interfaces copadas.",
        company: "Design Hub Ltd."
    },
    {
        id: 4,
        logo: logo4,
        title: "Marketing Manager",
        time: "6hrs",
        location: "Inglaterra",
        desc: "Conviértete en el maestro del marketing.",
        company: "Global Marketing Solutions Inc."
    },
    {
        id: 5,
        logo: logo5,
        title: "Frontend Developer",
        time: "8hrs",
        location: "Francia",
        desc: "Sólo para maestros en React.",
        company: "Web Wizards Ltd."
    },
    {
        id: 6,
        logo: logo6,
        title: "Product Manager",
        time: "10hrs",
        location: "Canadá",
        desc: "Sé el responsable de los mejores productos del mañana.",
        company: "Product Visionaries Co."
    },
    {
        id: 7,
        logo: logo7,
        title: "Financial Analyst",
        time: "15hrs",
        location: "Singapur",
        desc: "Destácte en las finanzas.",
        company: "Financial Solutions Inc."
    },
    {
        id: 8,
        logo: logo8,
        title: "Web Developer",
        time: "20hrs",
        location: "Canadá",
        desc: "Únete a nuestro equipo ",
        company: "Uranas Tech Pvt. Ltd"
    },
    {
        id: 9,
        logo: logo8,
        title: "Web Developer",
        time: "21hrs",
        location: "Canadá",
        desc: "Otro post mismo empleador ",
        company: "Uranas Tech Pvt. Ltd"
    },
    {
        id: 10,
        logo: logo7,
        title: "Genio",
        time: "22hrs",
        location: "Argentina",
        desc: "El mejor trabajo ",
        company: "Uranas Tech Pvt. Ltd"
    },
]

export const appLoader=async()=>{
    var ok
  
  



   const response=await axios.get(`http://localhost:3001/posts`)

   console.log(response)
   return response


  }

  export const postularseLoader=async({params})=>{

  
  



   const response=await axios.get(`http://localhost:3001/posts/${params.id}`)

   console.log(response)
   return response


  }
 
  
  
  
  

