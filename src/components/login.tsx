import React, { Component } from 'react';

type FormValue = { name: string, value: string }
type Forms = FormValue[];
class Login extends Component<{}, { forms: Forms }> {
    forms: Forms | undefined;

    componentDidMount() {
        this.setState({
            forms: [
                { name: 'email', value: '' },
                { name: 'password', value: '' },
            ]
        })
    }

    handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const fieldName = e.target.name;
        const forms = this.state.forms.map(el => el.name === fieldName ? {
            value: e.target.value,
            name: fieldName,
        } : el)
        this.setState({ forms })
    }



    handleClick = () => {
        const invalid = this.state.forms.some(el => el.value === '')
        invalid && alert("Please input your password")
        !invalid && alert("Thank you")
    }


    render() {

        console.log('render', this.state)
        return (
            <>

                {this.state && this.state.forms.map((e, i) =>
                    <>
                    {e.name}
                    <label key={i}  >
                        <input value={e.value} name={e.name} onChange={this.handleChange} />
                    </label> <br/>
                    </>)}

                {this.state && (<div>
                    {/* <div>{this.state.value}</div>     */}
                    <form>
                        <div>
                            <label>Email address:</label>
                            <input type="text"
                                name='email'
                                // value={this.state.value}
                                onChange={this.handleChange}
                            // onChange={ e => this.handleChange(e) }
                            />
                        </div>
                        <div>
                            <label>Password:</label>
                            <input type="password"
                                name='password'
                                onChange={this.handleChange}
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
                </div>)}

                {!this.state && <div>loading...</div>}
            </>
        );
    }
}
export default Login;