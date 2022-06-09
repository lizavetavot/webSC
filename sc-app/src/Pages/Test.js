import React, { Component } from 'react';

class Test extends Component {
    render() {
        return (
            <>

            <div class="btn-group-vertical d-grid gap-2">
                <button type="button" class="btn btn-outline-secondary btn-lg mt-2">Показать предобработанный текст</button>
                <button type="button" class="btn btn-outline-secondary btn-lg mt-2">Выделить синдромы</button>
                <button type="button" class="btn btn-outline-secondary btn-lg mt-2">Выделить симптомы</button>
            </div>
            <div class="container ">
                <h4 class="page-header mt-5">Выберите код МКБ-10</h4>
                <div class="row">
                    <div class="col-sm-3 mt-3">
                        <select class="form-control">
                            <option value="+47">Norge (+47)</option>
                            <option value="+46">Sverige (+46)</option>
                            <option value="+45">Danmark (+45)</option>
                        </select>
                    </div>
                </div>
            <br />
            </div>
            <div class="container ">
                <h4 class="page-header mt-5">Выберите код МКБ-10</h4>
                <div class="row">
                    <div class="col-sm-3 mt-3">
                        <select class="form-control">
                            <option value="+47">Norge (+47)</option>
                            <option value="+46">Sverige (+46)</option>
                            <option value="+45">Danmark (+45)</option>
                        </select>
                    </div>
                </div>
            <br />
            </div>
            
            
            
            </>
            
        );
    }
}

export default Test;