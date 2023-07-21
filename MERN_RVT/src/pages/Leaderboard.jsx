import React from 'react';

function Leaderboard(props){
    const {userStats} = props;
    return (
        <>
            <div>
                <h2 className=" text-3xl text-left font-bold hover:font-extrabold">Top Gainers</h2>
            </div>

            {
                <div className="flex justify-center">
                    <span className="flex items-center justify-center w-[30%]">abc</span>
                    <span className="flex items-center justify-center w-[30%]">
                        <img src={userStats[1][6]} alt="Profile Picture" className=" flex items-center justify-center w-[20%]"/>
                    </span>
                    <p className="text-bold ">userStats</p>
                    <span className="flex items-center justify-center w-[30%]">abc</span>
                </div>
            }
            
            <div>

            </div>
        </>
    );
}

export default Leaderboard;