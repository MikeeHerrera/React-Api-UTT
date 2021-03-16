import react, { Component, SyntheticEvent } from 'react';
import './Public.css';
import axios from 'axios';
class Registerr extends Component {
first_name = '';
last_name = '';
email = '';
password = '';
password_confirm ='';

    submit = async (e: SyntheticEvent) => {
        e.preventDefault();

   const response = await      axios.post('http://127.0.0.1:8000/api/register',{

            first_name: this.first_name,
            last_name: this.last_name,
            email: this.email,
            password: this.password,
            password_confirm: this.password_confirm
        } ) ;
        console.log(response)
    }
    render() {
        return (

            <div>


                <form className="form-signin"  onSubmit={this.submit}>
                    <h1 className="h3 mb-3 font-weight-normal">Please Register</h1>
                    <label htmlFor="first_name" className="sr-only">First name</label>
                    <input onChange={  e => this.first_name = e.target.value} type="text" id="last_name" className="form-control" placeholder="last name" required />

                    <label htmlFor="last_name" className="sr-only">Last name</label>
                    <input onChange={  e => this.last_name = e.target.value} type="text" id="first_name" className="form-control" placeholder="first name" required />

                    <label htmlFor="email" className="sr-only">Email address</label>
                    <input onChange={  e => this.email = e.target.value} type="email" id="email" className="form-control" placeholder="Email address" required />
                    <label htmlFor="password" className="sr-only">Password</label>
                    <input onChange={  e => this.password = e.target.value} type="password" id="password" className="form-control" placeholder="password" required />


                    <label htmlFor="password_confirm" className="sr-only">Password Confirm</label>
                    <input onChange={  e => this.password_confirm = e.target.value} type="password_confirm" id="password_confirm" className="form-control" placeholder="password_confirm" required />
                    <button className="btn btn-lg btn-primary btn-block" type="submit">Register</button>
                </form>
            </div>
        );
    }
}


export default Registerr;
