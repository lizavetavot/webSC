import React, { Component} from 'react';
import { useState } from 'react';
import 'react-simple-tree-menu/dist/main.css';
import axios from "axios" ;
import TreeMenu, { defaultChildren, ItemComponent } from 'react-simple-tree-menu';

export default function Tree123({goal_url, setcode})
  {
    const [treeData,settreeData] = React.useState(null);
    axios({
      // Endpoint to send files
      url: `${process.env.REACT_APP_API_URL}/${goal_url}`,
      method: "GET" ,
      headers: {},
      })
      .then((res) => { if (JSON.stringify(res.data) !== JSON.stringify(treeData)) settreeData (res.data)}) // Handle the response from backend here
      . catch ((err) => { alert ("все плохо")}); // Catch errors if any
    
    return (
      <div>
        <TreeMenu data={treeData} onClickItem ={(p)=>{setcode && setcode(p["key0"])}}>
      {({ search, items, resetOpenNodes }) => (
        <div>
          {defaultChildren({search, items})}
        </div>
      )}
  </TreeMenu>

      </div>
    );
  }