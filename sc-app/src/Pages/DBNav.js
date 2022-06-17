import React, { Component } from 'react';
//import Tree123 from '../Components/Tree123';
import axios from "axios" ;
const Tree123 = React.lazy(() => import('../Components/Tree123'));
function func_delete()
{
    axios({
        // Endpoint to send files
        url: `${process.env.REACT_APP_API_URL}/funcdelete`,
        method: "GET" ,
        headers: {},
        })
        .then((res) => { alert("Данные удалены")}) // Handle the response from backend here
        . catch ((err) => { alert ("все плохо")}); // Catch errors if any
}
export default function DBNav ()
{
    const [update, setupdate] = React.useState(null);
        return (
            <div>
                <div class="d-grid gap-2 col-6 mx-auto">
                    <button type="submit" class="btn btn-outline-secondary text-center mt-3" onClick={()=>{func_delete(); setupdate(1)}}>Очистить базу данных</button>
                </div>
                <React.Suspense fallback={<p>Loading...</p>}>
                    <Tree123 goal_url="treesmkb" />
                </React.Suspense>
                
            </div>
        );
}

