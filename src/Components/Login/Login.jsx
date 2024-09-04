import { Form, Navigate, redirect, useActionData } from 'react-router-dom';
import {useAuthContext} from '../../auth/authContext';
import axios from 'axios';

function Login() {
  const {login, user}= useAuthContext();
  const myData=useActionData()


if(myData && myData.ok=="logueado con éxito" && user.isAuthenticated==false){

console.log("HOla",myData.empresa)
 login(myData.name, myData.empresa)
return <Navigate to={"/"} />
}
 






  return (<>
 {myData && myData.ok=="error en logueo" && <p className="py-8 title font-bold group-hover:text-white text-xl dark:text-blueColor">Error de Logueo, por favor vuelva a intentar</p>}
<Form method="post" action="/login">
<div className="grid gap-6 mb-6 md:grid-cols-2 w-3/5 text-center">
<label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Email</label>

      <input  type="text" name="email" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder='John@doe.com'/>

      <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Password</label>
      <input type="password" name="password" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />
      <div>
      <button type="submit" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Enviar</button></div>
      </div>
    </Form>
    </>)

}

export default Login;

export const loginAction=async({request})=>{
var ok, name, empresa
    const data = await request.formData()
const envio={
    email:data.get('email'),
    password:data.get('password')
 
}
try{
     const respuesta= await axios.get(`http://localhost:3001/usuarios/?email=${envio.email}&password=${envio.password}`)
    ok="logueado con éxito"
    name=respuesta.data.nombre
    empresa=respuesta.data.empresa
    }
catch{
  ok="error en logueo"
}
return {ok, name, empresa}}