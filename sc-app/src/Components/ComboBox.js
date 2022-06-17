import React, { Component, useState} from 'react';
//import { useState, useEffect } from 'react';
import axios from "axios" ;
//import Tree123 from './Tree123';
const Tree123 = React.lazy(() => import('./Tree123'));
function a_click()
{
    var code=document.getElementById("#code").value;
    var name = document.getElementsByClassName("rstm-tree-item--active")[0].innerText.split("\n")[1];
    axios({
        // Endpoint to send files
        url: `${process.env.REACT_APP_API_URL}/setcodemkb` ,
        method: "POST" ,
        headers: {},
        data: {code, name},
        })
        .then((res) => {alert("Привязано успешно")}) 
        . catch ((err) => { alert ("Ошибка в привязке")}); 
}
function setcode(key0)
{
    document.getElementById("#name").value=document.getElementById("#code").value=key0;
}
export default function ComboBox({goal_url})
 {
    const [code_name, setcode_name] = React.useState(null);
    axios({
        // Endpoint to send files
        url: `${process.env.REACT_APP_API_URL}/getcodemkb`,
        method: "GET" ,
        headers: {},
        })
        .then((res) => { if (JSON.stringify(res.data) !== JSON.stringify(code_name)) setcode_name(res.data);}) 
        . catch ((err) => { alert ("все плохо")}); 
      
        return (
            <div>
            <div class="container ">
                <h4 class="page-header mt-3">Код заболевания</h4>
                <div class="row">
                    <div class="col-sm-3 mt-1">
                        <select id = "#code"  onChange={()=>{document.getElementById("#name").value=document.getElementById("#code").value}} class="form-control">
                        {code_name && code_name.map((code) => (
                            <option value={code[0]}>{code[0]}</option> ))}
                        </select>
                    </div>
                    
                </div>
                
            <br />
            </div>
            <div class="container ">
            <h4 class="page-header mt-1">Название заболевания</h4>
                <div class="row">
                <div class="col-sm-3 mt-2">
                    <select id = "#name" onChange={()=>{document.getElementById("#code").value=document.getElementById("#name").value}} class="form-control">
                    {code_name && code_name.map((code) => (

                        <option value={code[0]}>{code[1]}</option> ))}
                    </select>
                    <button type="button" class="btn btn-outline-secondary mt-2" onClick={()=>{a_click()}}>Привязать</button>
                </div>
            </div>
            <br />
            </div>
            <React.Suspense fallback={<p>Loading...</p>}>
                <Tree123 goal_url="trees" setcode = {setcode}/>
            </React.Suspense>
            
            </div>
        );
    }


