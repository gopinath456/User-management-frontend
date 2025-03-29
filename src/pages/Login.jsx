import axios from "axios";
import { useState } from "react";
import { toast } from "react-toastify";

const Login = () => {
    const [email,setEmail]=useState(null);
    const [password,setPassword]=useState(null);

    const handelLogin=async()=>{
        if(!email || !password){
            toast.error('email and password requred')
        }
        else{
            try {
                const response=await axios.post("https://reqres.in/api/login",
                    {
                        email,
                        password
                    }
                )
                localStorage.setItem("token", response.data.token);
                console.log(localStorage.getItem("token"));
                toast.success("successfully login");
            } catch (error) {
                console.log(error.message)
            }  
        }
        
    }

    return (
        <div className="flex items-center justify-center h-screen bg-gray-100">
        <div className="bg-white p-6 rounded-lg shadow-md w-96">
            <h2 className="text-xl font-bold mb-4 text-center">Login</h2>
            <input type="email" placeholder="Email" className="w-full p-2 border rounded mb-2" onChange={(e)=>{
            setEmail(e.target.value);
            }}/>
            <input type="password" placeholder="Password" className="w-full p-2 border rounded mb-4" onChange={(e)=>{
            setPassword(e.target.value);
            }}/>
            <button className="w-full bg-blue-500 text-white p-2 rounded cursor-pointer" onClick={handelLogin}>Login</button>
        </div>
        </div>
    );
};


export default Login;