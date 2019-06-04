import React, {Component} from 'react';

const ButtonsForm = props =>{
    const {onSubmit} = props ;
    return(
        <div className="d-flex justify-content-center">
            <button type="button" className="btn btn-light mr-4"
                onClick={onSubmit}> Previous </button>
            <button type="button" className="btn btn-secondary"
                onClick={onSubmit}> Next</button>
        </div>
    );
}

export default  ButtonsForm;