import React from 'react';

function Profile(props){
    const {loggedIn, setLoggedIn, userNumber, setUserNumber, userDetails} = props;
    return (
        <div className='flex'>
                <div className="w-1/2 inline-block">
                    <img src={userDetails[userNumber][3]} alt="Profile Picture" className=" h-full w-full mx-auto"/>
                    <p className="font-bold text-5xl mx-auto">{userDetails[userNumber][2]}</p>
                </div>
                <div className="w-1/2 flex">
                    <p className='text-4xl font-extrabold my-auto mx-auto px-3'>{userDetails[userNumber][4]}</p>
                </div>
        </div>
    );
}

export default Profile;