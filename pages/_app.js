import '../styles/globals.css'
import { useEffect, useState } from 'react'
import { useRouter } from 'next/router';
import axios from 'axios';
export default function App({Component,pageProps})
{
    const route = useRouter();
    const [student,setStudent] = useState({value:null});
    const [user,setUser] = useState({value:null});
    const logout = ()=>{
        const token = localStorage.getItem('token');
        if(token){
            localStorage.removeItem('token');
            setUser({value:null});
            route.push('/');
        }
    }
    useEffect( ()=>{
       
        const token = localStorage.getItem('token');
        if(token){
            setUser({value:token});
        }

        
    },[])
    useEffect(()=>{
        const func = async ()=>{
        const res = await axios.get('http://localhost:3000/api/allStudent');
        console.log("this was rec "+(res.data.data).length + JSON.stringify(res.data.data));
        setStudent({value:res.data.data});
        }
        func();
        return ()=>{

        }
    },[])
    console.log(student);
    return <Component  {...pageProps} user={user} setUser={setUser} logout={logout} student={student}/>
}