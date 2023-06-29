import React from 'react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Login(){
    const navigate = useNavigate();
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleUsernameChange = (event) => {
        setUsername(event.target.value);
      };
    
    const handlePasswordChange = (event) => {
        setPassword(event.target.value);
    };

    const handleSubmit = (event) => {
        // Prevent browser refresh on submit. 
        event.preventDefault();

        // Perform login logic here, such as sending login credentials to a server
        console.log('Username:', username);
        console.log('Password:', password);

        // Compare
        const userList = ['admin', 'dev', 'john', 'test'];
        const passList = ['admin', 'dev', 'john', 'test'];

        let userExists = false;
        let loggedIn = false;
        for(let i = 0; i < userList.length; i++){
            if(username === userList[i]){
                console.log("User exists");
                userExists = true;
            }
            
            if(username === userList[i] && password === passList[i]){
                console.log('Login successful');
                loggedIn = true;
                break;
            }
        }

        if(!userExists){
            console.log('User does not exist');
        }

        if(loggedIn){
            navigate('/');
        }
      };

    return (
        <div>
            <h1 className="text-3xl">Login</h1>
            <form onSubmit={handleSubmit}>
                <div>
                <label>
                    <span>Username:</span>
                    <input type="text" value={username} onChange={handleUsernameChange} className='m-4 p-1 bg-green-100 outline outline-1'/>
                </label>
                </div>

                <div>
                <label>
                    <span>Password:</span>
                    <input type="password" value={password} onChange={handlePasswordChange} className='m-4 p-1 bg-green-100 outline outline-1'/>
                </label>
                </div>
                
                <div>
                <button type="submit" className='outline outline-1 p-1 px-3 m-3 bg-green-300'>Login</button>
                </div>
            </form>
        </div>
    );
}

export default Login;