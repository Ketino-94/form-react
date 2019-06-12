import React, {Component} from 'react';

export default class ButtonsForm extends Component{
    render() {
    const {onSubmit, onPrevious, activeTab} = this.props;
      return(
          <div className="d-flex justify-content-center">
              <button type="button" className="btn btn-light mr-4"
                  onClick={onPrevious} 
                  disabled={activeTab === 1}> Previous </button>
              <button type="button" className="btn btn-secondary"
                  onClick={onSubmit}> Next</button>
          </div>
      );
    }
    
}