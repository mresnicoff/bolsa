import {useEffect} from 'react';
import {useAuthContext} from '../../auth/authContext';
import { Navigate } from 'react-router-dom';

function Logout() {
  const {logout} = useAuthContext();
  useEffect(() => logout());
  return (
<Navigate to={"/"} />)

}

export default Logout;