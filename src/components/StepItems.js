import React, {Component} from 'react';

export default class AvatarForm extends Component {
    render() {
        return(
            <div class="steps mb-4">
                <div class="step is-completed">
                    <div class="step__marker">1</div>
                    <div class="step__title mt-1">Basic</div>
                </div>
                <div class="step is-completed">
                    <div class="step__marker">2</div>
                    <div class="step__title mt-1">Contacts</div>
                </div>
                <div class="step is-completed">
                    <div class="step__marker">3</div>
                    <div class="step__title mt-1">Avatar</div>
                </div>
                <div class="step is-active">
                    <div class="step__marker">4</div>
                    <div class="step__title mt-1">Finish</div>
                </div>
            </div>
        );
    }
}

