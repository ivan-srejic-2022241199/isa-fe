"use client"

import Link from "next/link";
import {useState} from "react";

const UserCreate = () => {
    const [counter,setCounter] = useState(0);

    const handleClick = () => {
        setCounter(counter + 1);
    }
     return (
    <>
        <h1>User Create Page</h1>
        <br />
        <br />
        <Link href={'list'}>List page</Link>
        <div onClick={handleClick}>CLICK</div>
        <h1>{counter}</h1>
        <h1 onClick={() => {
            setCounter(0);
        }}>RELOAD</h1>
    </>
    )
}

export default UserCreate;