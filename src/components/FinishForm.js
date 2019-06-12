import React, {Component} from 'react';  

// import countries from "../data/countries"; 
// import cities from "../data/cities"; 
  
export default class FinishForm extends Component {  
  render() {  
    const {values, resetData} = this.props;
    return(  
      <div className="container-fluid card-body">  
        <div className="row mb-4">  
            <div className="col-4">  
              <img className="mb-4" width="100%" src={values.avatar} alt="avatar"/>
            </div>  
            <div className="col-8 d-flex align-items-center">  
                <h4>{values.username} {values.lastname}</h4>  
            </div>  
        </div>  
        <div className="row mb-4">  
            <div className="col-12">  
              <p><strong>Email</strong> {values.email}</p>
              <p><strong>Mobile</strong> {values.mobile}</p>
              <p><strong>Location</strong> {values.country} , {values.city}</p>
            </div>  
        </div>  
        <div className="d-flex justify-content-center">  
            <button type="button" 
                    className="btn btn-primary" onClick={console.log(values.email, values.mobile, values.username)}>Reset</button>  
        </div>  
      </div>  
    );  
  }  
}  