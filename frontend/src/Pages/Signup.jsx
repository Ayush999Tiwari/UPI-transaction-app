import { Heading } from '../components/Heading';
import { Subheading } from '../components/Subheading';
import { Inputbox } from '../components/Inputbox';
import {Button} from '../components/Button'; 
import {BottomWarning} from '../components/BottomWarning';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import Axios from 'axios'

export const Signup = () => {
    const [firstname , setfirstname] = useState(' ');
    const [lastname , setlastname] = useState(' ');
    const [email , setemail] = useState(' ');
    const [password , setpassword] = useState(' ');
    const navigate = useNavigate();
    return <div className="bg-slate-300 h-screen flex justify-center">
        <div className="flex flex-col justify-center"> 
            <div className="rounded-lg bg-white w-80 text-center p-2 h-max px-4">
                <Heading label = {"Signup"}></Heading>
                <Subheaading label = {"Enter your information to create an account fucker"}></Subheaading>
                <Inputbox placeholder = 'Ayush' label = {'First Name'} onChange={(e)=>{
                    setfirstname(e.target.value);
                }}></Inputbox>
                <Inputbox placeholder = 'Tiwari' label = {'Last Name'} onChange={(e)=>{
                    setlastname(e.target.value);
                }}></Inputbox>
                <Inputbox placeholder = 'ayvsht999@gmail.com' label = {'Email'} onChange={(e)=>{
                    setemail(e.target.value);
                }}></Inputbox>
                <Inputbox placeholder = 'ayvsht999@gmail.com' label = {'Password'} onChange={(e)=>{
                    setpassword(e.target.value);
                }}></Inputbox>
                <div className = 'pt-4'>
                    <Button onClick = { async () =>{
                        try {
                            const response = await Axios.post("http://localhost:3000/api/v1/user/signup", {
                                username,
                                firstName,
                                lastName,
                                password
                            });
                            const amount = response.data.intialAmount;
                            localStorage.setItem('token', response.data.token);
                            navigate(`/dashboard?amount=${amount}&firstName=${username[0].toUpperCase()}`);
                        } catch (error) {
                            console.log(error);
                        }  
                    }} label={"Sign In"}></Button>
                </div>
                <BottomWarning label={"Already have an account?"} buttonText={"Sign up"} to={"/signin"}></BottomWarning>
            </div>
        </div>
    </div>
}