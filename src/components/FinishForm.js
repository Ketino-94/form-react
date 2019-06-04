import React, {Component} from 'react';

export default class AvatarForm extends Component {

    state = {
        avatar: ''
    }

    onChangeAvatar = (e) => {
        const reader = new FileReader();
        reader.onload = e => {
          this.setState({
            avatar: e.target.result
          })
        }
    
        reader.readAsDataURL(e.target.files[0]);
        // console.log(e.target.files[0]);
      } 

    render() {

        return(
            <form className="form card-body">
                <div className="form-group">
                    <label htmlFor="avatar">Avatar</label>
                    <input  type="file" 
                            className="form-control-file" 
                            name="avatar"
                            id="avatar" 
                            onChange={this.onChangeAvatar}  />
                </div>
                <div class="d-flex justify-content-center">
                    <button type="button" class="btn btn-primary">Reset</button>
                </div>
            </form>
        );
    }
}