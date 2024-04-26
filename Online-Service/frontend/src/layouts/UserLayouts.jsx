import { Outlet, useNavigate } from "react-router-dom";
import UserNavbar from "../components/UserNavbar";
import Footer from "../components/Footer";
import { useEffect } from "react";


export default function UserLayouts(){
    const navigate = useNavigate()
    useEffect(()=>{
        let token=localStorage.getItem('userToken')
        if(!token){
            navigate('/usersignin')
        }else{
            console.log(token)
        }

    },[])
    return(
        <>
            <UserNavbar/>
            <Outlet/>
            <h1>User Layout</h1>
            <Footer/>
        </>
    )
}