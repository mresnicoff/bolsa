import React from "react";
import {
  AiFillInstagram,
  AiFillFacebook,
  AiFillTwitterCircle,
} from "react-icons/ai";

const Footer = () => {
  return (
    <footer>
      <div className="grid grid-cols-2 p-10 sm:grid-cols-3  lg:grid-cols-5 gap-6 bg-[#2a68ff] rounded-lg">
        <div>
          <a href="/">
            <h1 className="text-lg font-medium text-white pb-2">
              <strong className="text-white font-extrabold mr-0.5">Bolsa</strong>
              de Trabajos
            </h1>
          </a>
          <p className="text-white text-sm font-thin leading-6 opacity-90 text-start">
            Siempre hacemos que nuestros candidatos consigan su empleo ideal y que las empresas que publican consigan el candidato justo.
          </p>
        </div>
        <div className="flex flex-col gap-2 sm:gap-3">
          <span className="text-base font-semibold text-white">Empresa</span>
          <li className="text-white opacity-75 font-thin text-sm leading-6 hover:opacity-100">
            Acerca
          </li>
          <li className="text-white opacity-75 font-thin text-sm leading-6 hover:opacity-100">
            Características
          </li>
          <li className="text-white opacity-75 font-thin text-sm leading-6 hover:opacity-100">
            Noticias
          </li>
          <li className="text-white opacity-75 font-thin text-sm leading-6 hover:opacity-100">
            FAQs
          </li>
        </div>
        <div className="flex flex-col gap-2 sm:gap-3">
          <span className="text-base font-semibold text-white">Recursos</span>
          <li className="text-white opacity-75 font-thin text-sm leading-6 hover:opacity-100">
            Cuenta
          </li>
          <li className="text-white opacity-75 font-thin text-sm leading-6 hover:opacity-100">
            Centro de Ayuda
          </li>
          <li className="text-white opacity-75 font-thin text-sm leading-6 hover:opacity-100">
            Feedback
          </li>
          <li className="text-white opacity-75 font-thin text-sm leading-6 hover:opacity-100">
            Contacto
          </li>
        </div>
        <div className="flex flex-col gap-2 sm:gap-3">
          <span className="text-base font-semibold text-white">Ayuda</span>
          <li className="text-white opacity-75 font-thin text-sm leading-6 hover:opacity-100">
            Eventos
          </li>
          <li className="text-white opacity-75 font-thin text-sm leading-6 hover:opacity-100">
            Promos
          </li>
          <li className="text-white opacity-75 font-thin text-sm leading-6 hover:opacity-100">
            Demo
          </li>
          <li className="text-white opacity-75 font-thin text-sm leading-6 hover:opacity-100">
            Carreras
          </li>
        </div>
        <div className="flex flex-col gap-2 col-span-2 sm:col-auto sm:gap-3">
          <span className="text-base font-semibold text-white ">
            Info de Contacto
          </span>
          <a
            className="text-white opacity-80 hover:opacity-100 text-xs lg:text-sm"
            href="malto:contact@jobportal.com"
          >
            contact@jobportal.com
          </a>
          <div className="">
            <AiFillInstagram className="bg-slate-200 p-2 w-9 h-9 rounded-full text-[#2a68ff] inline-block mr-1 sm:mr-3 hover:text-blue-600 hover:bg-white" />
            <AiFillFacebook className="bg-slate-200 p-2 w-9 h-9 rounded-full text-[#2a68ff] inline-block mr-1 sm:mr-3  hover:text-blue-600 hover:bg-white" />
            <AiFillTwitterCircle className="bg-slate-200 p-2 w-9 h-9 rounded-full text-[#2a68ff] inline-block hover:text-blue-600 hover:bg-white" />
          </div>
        </div>
      </div>
      <div className="h-10"></div>
    </footer >
  );
};

export default Footer;
