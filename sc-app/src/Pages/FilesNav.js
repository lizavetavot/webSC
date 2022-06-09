import React, { Component } from 'react';
import ButFiles from "../Components/ButFiles";
class FilesNav extends Component {
    render() {
        return ( 
            <>          
            <blockquote class="blockquote text-center mt-5 fs-3">
                <p class="mb-0">SympChecker - приложение для автоматизированного извлечения данных и знаний из неструктурированного  информационного ресурса с целью построение БД 
синдромов и симптомов заболеваний.</p>
            </blockquote>
            <blockquote class="blockquote text-center mt-3 fs-5">
                <ButFiles></ButFiles>
            </blockquote>
            </> 
        );
    }
}

export default FilesNav;