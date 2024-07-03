import React from "react";
import { MdLightMode } from "react-icons/md";
import { Link } from "react-router-dom";
import {useAuthContext} from '../../auth/authContext'

const Header = () => {
  const toggleTheme = () =>{
    document.documentElement.classList.toggle("dark")
  }
  const {isAuthenticated} = useAuthContext();
  return (
    <header>
      <nav className=" w-full Header flex justify-between items-center pt-8 pb-8  dark:bg-slate-800">
        <div className="text-xl ">
          <a href="/">
            <h1 className="font-medium dark:text-white">
              <strong className="text-[#2a68ff] font-extrabold mr-0.5">
                Bolsa
              </strong>
              de Trabajos
            </h1>
          </a>
        </div>
        <ul className="hidden sm:flex items-center gap-2">

        <li
              className="text-[#6f6f6f] dark:text-slate-100"
              key="login">{!isAuthenticated ? <Link to="Login">Login</Link>:<p className="cursor-default whitespace-nowrap">Hola {user.name}</p>}

        </li>

        {isAuthenticated && <li
              className="text-[#6f6f6f] dark:text-slate-100 text-base hover:text-[#2a68ff]"
              key="salir"> <Link to="Logout">Salir</Link>

            </li>}
      
            <li
              className="text-[#6f6f6f] dark:text-slate-100 text-base hover:text-[#2a68ff]"
              key="acerca"> <Link to="About">Acerca</Link>

            </li>
            <li
              className="text-[#6f6f6f] dark:text-slate-100 text-base hover:text-[#2a68ff]"
              key="contacto"> <Link to="Contacto">Contacto</Link>

            </li>
           {!isAuthenticated && <li
              className="text-[#6f6f6f] dark:text-slate-100 text-base hover:text-[#2a68ff]"
              key="Registrarse"> <Link to="/registrarse">Registrarse</Link>

            </li>}


    
            
      
          <MdLightMode onClick={toggleTheme} className="dark:invert cursor-pointer ml-4 h-5 w-full" />
        </ul>
        <div className="absolute right-20">
        <MdLightMode onClick={toggleTheme} className="dark:invert  h-5 w-full sm:hidden"/>
        </div>
        <div className="flex leading-4 flex-col gap-1 sm:hidden">
          <div className="h-[3px] dark:bg-slate-100 bg-black w-8"></div>
          <div className="h-[3px] dark:bg-slate-100 bg-black w-8"></div>
          <div className="h-[3px] dark:bg-slate-100 bg-black w-8"></div>
        </div>
      </nav>

    </header>
  );
};

export default Header;
