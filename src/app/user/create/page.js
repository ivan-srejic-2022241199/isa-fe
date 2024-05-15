"use client"

import Link from "next/link";
import {useEffect, useState} from "react";
import axios from "axios";

const UserCreate = () => {

    const [loading, setLoading] = useState(false);
    const [data, setData] = useState(null);

    const getFirstName = async () => {
        setLoading(true);
        let result = await axios.get('http://localhost:8080/user/get-user-list');
        console.log(result);
        setData(result.data);
        setLoading(false);
    }
    return (
        <>
            {setLoading && data === null ? (
                <div>
                    <h1>Loading</h1>
                    <button
                        onClick={getFirstName}>Button
                    </button>
                </div>
            ) : (
                <>
                    <p>{JSON.stringify(data)}</p>
                </>
            )}
        </>
    );
}

export default UserCreate;