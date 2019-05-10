import React,{Component} from 'react';

import axios from '../utils/axios';

class Login extends Component {
    state = {
        usuario: '',
        password: ''
    }
    usuarioHandler = e => this.setState({usuario: e.target.value})
    passwordHandler = e => this.setState({password: e.target.value})
    submitHandler = e => {
        e.preventDefault();
        axios({
            method: 'post',
            url: 'user/signin',
            data: {
                username: this.state.usuario,
                password: this.state.password
            }
        }).then(response => {
            console.log('mi respuesta ', response)
        }).catch(error => {
            console.log('hubo un error ', error)
        })
    }
    render(){
        return (<form onSubmit={this.submitHandler}>
            <div>
                <label>Usuario</label>
                <input 
                    type='text'
                    placeholder='Usuario para sesion'
                    value={this.state.usuario}
                    onChange={this.usuarioHandler} />
            </div>
            <div>
                <label>Contraseña</label>
                <input 
                    type='password'
                    placeholder='Clave para sesion'
                    value={this.state.password}
                    onChange={this.passwordHandler} />
            </div>
            <button type='submit'>Iniciar Sesion</button>
        </form>);
    }
}

export default Login;