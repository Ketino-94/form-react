import React, {Component} from 'react';  
  
export default class FinishForm extends Component {  
  
    render() {  
      const {avatar, username} = this.props;
  
        return(  
            <div className="container-fluid">  
                <div className="row mb-4">  
                    <div className="col-4">  
                      {avatar}
                    </div>  
                    <div className="col-8 d-flex align-items-center">  
                        <h4>{username}</h4>  
                    </div>  
                </div>  
                <div classNam="row mb-4">  
                    <div className="col-12">  
                      <p><strong></strong></p>
                    </div>  
                </div>  
                <div class="d-flex justify-content-center">  
                    <button type="button" class="btn btn-primary">Reset</button>  
                </div>  
            </div>  
        );  
    }  
}  