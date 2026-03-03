import {useQuery} from "@tanstack/react-query";
import {useState} from "react";
import {getUsers} from "./apiUusers.js";

export const Users = () => {

    const [page , setPage] = useState(1);

    const limit = 1;



    const { data , isLoading, error } = useQuery({
        queryKey: ['users',  { page , limit }],
        queryFn: getUsers,
        keepPreviousData:true,
        staleTime: 1000 * 60 * 3
    })



    return (
        <>


            <h1>Users</h1>
            <hr/>
            { isLoading && <p>Loading....</p> }
            { data.length === 0 && <p>упсс тут пусто </p> }
            <ul>
                { data?.map((u) => <li key={u?.id}>{u.name}</li>) }

            </ul>
            <button onClick={ () => setPage(prev => prev - 1) } disabled={page === 1}>prev</button>
            <button disabled={data?.length === 0 } onClick={() => setPage(prev => prev + 1)}>next</button>

            <h3>{ ` PAGE: ${page} ` }</h3>

        </>
    )
}