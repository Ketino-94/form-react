import React from 'react' ;

const Number = () => {
    return(
        <form className="form card-body">
          
        <div className="form-group">
           <div> <label>Age</label></div>
           <div className="btn-group">
              <button type="button" 
                      className="btn btn-secondary"
                      onClick={this.decrementAge}> - </button>
              <input type="number" 
                      className="form-control"
                      placeholder="Enter age"
                      name="age"
                      value={this.state.age}
                      onChange={this.onChange}/>
              <button type="button" 
                      className="btn btn-secondary"
                      onClick={this.incrementAge}> + </button>
           </div>
           {this.state.errors.age ? (
          <div className="invalid-feedback" >{this.state.errors.age}</div>) : null}
        </div>
        <div className="form-check mb-2">
          <input className="form-check-input" 
                  type="checkbox" 
                  id="agree" 
                  name="agree"
                  value={this.state.agree}
                  onChange={this.onChangeAgree} 
                  checked={this.state.agree} />
          <label className="form-check-label" htmlFor="agree">
            Agree
          </label>
        </div>
        <button type="submit" className="btn btn-primary w-100"
                onClick={this.onSubmit}> Submit</button>

      </form>
    )
}

export default Number;
       