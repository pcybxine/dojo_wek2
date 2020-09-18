import React, {Component} from 'react';

class Login extends Component<any, any> {

    constructor(props: any){
        super(props);
        this.state = { value: '',pass:'' };
    }
      
    handleChange = (e: any) =>{ 
        this.setState({value: e.target.value});
    }

    handleClick = () => {
        if(this.state.value === ''){
            alert("Please submit your email")
        }
        // else if(this.state.pass === ''){
        //      alert("Please submit your password")
        //  }
        else{
            alert("Thank you")
        }

      }
    
    render() {
        return (
            <div>
            {/* <div>{this.state.value}</div>     */}
            <form>
                <div>
                    <label>Email address:</label>
                    <input type="text" 
                        value={this.state.value} 
                        onChange={ e => this.handleChange(e) }/>    
                </div>
                <div>
                    <label>Password:</label>
                    <input type="password" 
                        //value={this.state.pass} 
                        //onChange={this.handleChange}
                    />
                </div>            
            </form>
                <button 
                    type="submit" 
                    onClick={this.handleClick}
                >
                    Register
                </button>
        </div>
        );
      }
    }
export default Login;