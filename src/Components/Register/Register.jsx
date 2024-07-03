import { Form, NavLink, redirect, useActionData } from 'react-router-dom';
import {useAuthContext} from '../../auth/authContext';
import { useEffect } from 'react';
import App from "../../App"

function Register() {
const {login}= useAuthContext();
  const myData=useActionData()
  useEffect(() => {
    if (myData && myData.ok){login()
    
    }
console.log(myData)
  }, [myData])


useEffect
  return (<>
 
<Form method="post" action="/login">
<div className="grid gap-6 mb-6 md:grid-cols-2 w-3/5 text-center">
<label for="nombre" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Nombre</label>

      <input  type="text" name="nombre" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder='John Doe'/>

      <label for="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Email</label>

      <input  type="text" name="email" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder='john@doe.com'/>

      <label for="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Password</label>
      <input type="password" name="password" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />
      <label for="empresa" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Empresa</label>

<input  type="text" name="empresa" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder='John Doe'/>

     
      <div>
      <button type="submit" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Enviar</button></div>
      </div>
    </Form>
    </>)

}

export default Register;

export const loginAction=async({request})=>{

    const data = await request.formData()
console.log(request)
const envio={
    email:data.get('email'),
    password:data.get('password')
 
}

return {ok:"puede logearse"}}