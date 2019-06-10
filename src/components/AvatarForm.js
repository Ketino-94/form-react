import React, {Component} from 'react';
import DefaultAvatar from '../img/default-avatar.png'
import ButtonsForm from './ButtonsForm' ;

export default class AvatarForm extends Component {
  const {values} = props;

    onChangeAvatar = (e) => {
        const reader = new FileReader();
        reader.onload = e => {
          this.setState({
            values.avatar : e.target.result
          })
        }
    
        reader.readAsDataURL(e.target.files[0]);
        // console.log(e.target.files[0]);
      } 


    render() {
        const {values,errors, onSubmit} = this.props; 
        return(
            <form className="form card-body">
                <img className="mb-4" width="100%" src={values.avatar.length ? values.avatar : DefaultAvatar} alt="avatar"/>
                <div className="custom-file mb-4">
                    <input  type="file" 
                            className="custom-file-input" 
                            name="avatar"
                            id="avatar" 
                            onChange={this.onChangeAvatar}  />
                    <label className="custom-file-label"  htmlFor="avatar">Choose avatar</label>
                </div>
                {errors.avatar ? (
                      <div className="invalid-feedback" >{errors.avatar}</div>) : null}
                <ButtonsForm onSubmit={onSubmit}/>
            </form>
        );
    }
}