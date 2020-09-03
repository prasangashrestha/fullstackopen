import React, {useState} from 'react'

const Login = ({handleLogin}) => {
    
const [username, setUsername] = useState('')
const [password, setPassword] = useState('')

const handleSubmit = (e) => {
    e.preventDefault()

    handleLogin(username, password)

}

const handleUsername = (e) => {
    setUsername(e.target.value)
}

const handlePassword = (e) => {
    setPassword(e.target.value)
}
 
    return (
        <div>
            <h1>Log in to application</h1>
            <form onSubmit= {handleSubmit}>
                <p>
                    <label htmlFor="username">username:  </label>
                    <input type="text" id="username" value={username} onChange={handleUsername}/>
                </p>
                <p>
                    <label htmlFor="password">password:  </label>
                    <input type="password" id="password" value={password} onChange={handlePassword}/>
                </p>

                <button>Submit</button>
                
            </form>
        </div>
    )

}

export default Login
