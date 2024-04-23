import { Outlet,Navigate } from "react-router-dom"
import { useLoginContext } from "../context/LoginContext"
import Login from "./Login"

const PrivateRouter = () => {
    const {signed} = useLoginContext()

  return signed ? <Outlet/> : <Login/>
}

export default PrivateRouter
