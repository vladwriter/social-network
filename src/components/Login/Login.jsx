import React from 'react';
import { Field, reduxForm } from 'redux-form';

const LoginForm = (props) => {
    return <form onSubmit={props.handleSubmit}>
        <div>
            <Field placeholder={'Login'} name={'login'} component={'input'}/>
        </div>
        <div>
            <Field placeholder={'Password'} name={'password'} component={'input'}/>
        </div>
        <div>
            <Field type={'checkbox'} name={'rememberMe'} component={'input'}/> remember me
                </div>
        <div>
            <button>Submit</button>
        </div>
    </form>
}

const LoginReduxForm = reduxForm({form: 'login'})(LoginForm)

const Login = (props) => {
    return <div>
        <h1>Login</h1>
        <LoginReduxForm />
    </div>

}

export default Login;