import React from 'react';
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

function Login(props){
    const [submittedOnce, setSubmittedOnce] = useState(false)
    const [userExists, setUserExists] = useState(false);

    // const loggedIn = props.loggedIn;
    const {loggedIn, setLoggedIn, userNumber, setUserNumber, userDetails} = props;

    const navigate = useNavigate();
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleUsernameChange = (event) => {
        setUsername(event.target.value);
      };
    
    const handlePasswordChange = (event) => {
        setPassword(event.target.value);
    };

    const handleSubmit = async (event) => {
        // Prevent browser refresh on submit. 
        event.preventDefault();
        setSubmittedOnce(true);

        // for testing
        console.log('Username:', username);
        console.log('Password:', password);

        setUserExists(false);
        for(let i = 1; i < userDetails.length; i++){
            
            if(username === userDetails[i][0]){
                console.log("User exists");
                setUserExists(true);
            }
            
            if(username === userDetails[i][0] && password === userDetails[i][1]){
                console.log('Login successful');
                setLoggedIn(true);
                setUserNumber(i);
                console.log("loggedIn:", loggedIn)
                break;
            }
        }

        if(!userExists){
            console.log('User does not exist');
        }
      };

    useEffect(() => {
        console.log("refreshed")
      if(loggedIn) {
        navigate('/profile');
      }
    }, [loggedIn]);

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
                {
                    submittedOnce
                    &&
                    !userExists 
                    &&
                    (<p className='text-red-500'>Unfortunately, username doesn't exist</p>)
                }

                <div>
                <label>
                    <span>Password:</span>
                    <input type="password" value={password} onChange={handlePasswordChange} className='m-4 p-1 bg-green-100 outline outline-1'/>
                </label>
                </div>
                {
                    userExists 
                    &&
                    !loggedIn
                    &&
                    (<p className='text-red-500'>Unfortunately, password is incorrect.</p>)
                }

                <div>
                <button type="submit" className='outline outline-1 p-1 px-3 m-3 bg-green-300'>Login</button>
                </div>
            </form>
        </div>
    );
}

export default Login;