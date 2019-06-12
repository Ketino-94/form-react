import React, {Component} from 'react';

export default class StepItems extends Component {
  render() {
    const {activeTab} = this.props; 
    return(
        <div className="steps mb-1 mt-3">
          <div className={activeTab === 1 ? "step is-active" : "step is-completed"} >
                <div className="step__marker">1</div>
                <div className="step__title mt-1">Basic</div>
            </div>
            <div className={activeTab === 2 ? "step is-active" : "step is-completed"}>
                <div className="step__marker">2</div>
                <div className="step__title mt-1">Contacts</div>
            </div>
            <div className={activeTab === 3 ? "step is-active" : "step is-completed"}>
                <div className="step__marker">3</div>
                <div className="step__title mt-1">Avatar</div>
            </div>
            <div className={activeTab === 4 ? "step is-active" : "step is-completed"}>
                <div className="step__marker">4</div>
                <div className="step__title mt-1">Finish</div>
            </div>
        </div>
    );
  }
}

