import { Form, useActionData } from 'react-router-dom';
import {useAuthContext} from '../../auth/authContext';
import { Navigate } from 'react-router-dom';
import axios from 'axios';
function Post() {
  const {user}= useAuthContext();
  const myData=useActionData()


if(!user.isAuthenticated){return <Navigate to="/"/>}
if(myData && myData.ok=="Pudo postear") {


 
 return (
 
 <div>{myData && myData.ok=="Pudo postear" && <p className="py-8 title font-bold group-hover:text-white text-xl dark:text-blueColor">Trabajo cargado con éxito</p>}</div>)}
  return (<>
 
<Form method="post" action="/post">
<div class="grid gap-6 mb-6 md:grid-cols-2 w-3/5 text-center">
<label htmlfor="title" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Title</label>

      <input  type="text" name="title" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder='Titulo del puesto'/>

      <label htmlfor="localidad" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Localidad</label>
      <input type="text" name="localidad" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder='Localidad del trabajo'/>

      <label htmlfor="empresa" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Empresa:</label>
      <input type="text" name="empresa" value={user.empresa}   className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"/>
      
      <label htmlfor="desc" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Descripción:</label>
      <textarea name="desc" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />
      <div>
      <button type="submit" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Enviar</button></div>
      </div>
    </Form>
    </>)

}

export default Post;

export const postAction=async({request})=>{
  var ok

    const data = await request.formData()
const envio={
    title:data.get('title'),
    localidad:data.get('localidad'),
    empresa:data.get('empresa'),
    desc:data.get('desc'),

}
console.log(envio)
try{
  const cargado=await axios
  .post(`http://localhost:3001/posts/`, envio)
 ok="Pudo postear"}
catch{
   ok="No pudo postear"
}

  return {ok}



}