import {useLoaderData, Form} from "react-router-dom";
import { IoMdCloseCircleOutline } from "react-icons/io";
import { Link } from "react-router-dom";
import React from "react";
export const Postularse = () => {

var joBpostulando=  useLoaderData().data[0]

    return (
        <div className="h-screen w-screen fixed top-0 left-0 z-50 no-doc-scroll bg-black bg-opacity-30 balckdrop-blur-sm <">
        <div className="absolute top-10 left-5 bg-white p-5 rounded-lg "> <Link to="/"><IoMdCloseCircleOutline className="text-4xl text-red-700 cursor-pointer"/></Link>
        <p className="py-8 title font-bold group-hover:text-white text-xl dark:text-blueColor">Se está postulando a:</p>
        <p className="title font-bold group-hover:text-white text-xl dark:text-blueColor">{joBpostulando.title}</p>
        <p className="text-sm font-medium ml-1 dark:text-slate-300">
        Empresa: {joBpostulando.empresa} </p>
        <p className="text-sm font-medium ml-1 dark:text-slate-300 ">
      Localidad: {joBpostulando.localidad} </p>
      <p className=" text-sm font-medium ml-1 dark:text-slate-300">
    {joBpostulando.desc}
  </p>
  <Form method="post" action={`/postularse/${joBpostulando.id}`}>
 
  <div className="grid gap-6 mb-6 md:grid-cols-2 w-3/5 text-center m-5">
  <label htmlFor="id" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Job Id</label>

<input  type="text" name="id"  disabled="disabled" value={joBpostulando.id} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder='Jane Doe'/>
  <label htmlFor="nombre" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Nombre</label>

      <input  type="text" name="nombre" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder='Jane Doe'/>
      <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Nombre</label>

<input  type="text" name="email" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder='jdoe@gmail.com'/>
<label htmlFor="desc" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Carta presentación:</label>
<textarea name="desc" rows="4" cols="50" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />
<button type="submit" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Postularse</button>
  </div>
  </Form>
        
        </div>
        </div>)

}

export default Postularse;

export const sendEmail=async({request})=>{
  
  var ok

    const data = await request.formData()
const envio={
    nombre:data.get('nombre'),
    email:data.get('email'),
    desc:data.get('desc'),

}
console.log(envio)
try{
  const cargado=await axios
  .post(`http://localhost:3001/emails/`, envio)
 ok="Pudo postear"}
catch{
   ok="No pudo postear"
}

  return {ok}
}