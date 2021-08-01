import React from 'react';
import './signin.style.scss';
import FormInput from "../../components/form-input/form-input.component";
import CustomButton from "../../components/custom-button/custom-button.component";


class Login extends React.Component{
    constructor(props) {
        super(props);
        this.state={
            email:'',
            password:''
        }
    }
    handleSubmit=(e)=>{
        e.preventDefault();
        this.setState({
            email:'',
            password:''
        })
    }

    handleChange=(e)=>{
        const {value,name} = e.target;
        this.setState({
            [name]:value,
        })
    }

    render() {
        return(
            <div className='sign-in'>
                <h2>Have already register?</h2>
                <span>Sign in with your username and password</span>
                <form onSubmit={this.handleSubmit}>
                    <FormInput handleChange={this.handleChange}
                               name="email"
                               type="email"
                               value={this.state.email}
                               label="email"
                               required/>
                    <FormInput handleChange={this.handleChange}
                               name="password"
                               type="password"
                               value={this.state.password}
                               label="password"
                               required/>
                    <div className='buttons'>
                        <CustomButton type="submit">Sign</CustomButton>
                        <CustomButton type="submit">Registration</CustomButton>
                    </div>

                </form>
            </div>
        )
    }

}

export default Login;