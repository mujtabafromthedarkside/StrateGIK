import React from 'react';

function addCommasToNumber(number){
    let cnt = 0;
    for(let i=number.length-1; i>=0; i--){
        cnt++;
        if(cnt%3===0 && i!==0){
            number = number.slice(0,i) + ',' + number.slice(i);
        }
    } return number;
} 

function Leaderboard(props){
    const {userStats} = props;
    userStats.sort((a,b)=>b.contribution-a.contribution);
    //SORT THE userStats ARRAY HERE

    return (
        <>
            <div>
                <h2 className=" text-3xl text-left font-bold hover:font-extrabold">Top Gainers</h2>
            </div>

            <div className="flex justify-center">
                {[userStats[1], userStats[0], userStats[2]].map(
                        (item, index) => 
                            index >=3 ? null : (
                                <div key={item.username} className="relative border-[1px] border-solid border-black m-2 w-[30%] flex flex-col overflow-hidden">
                                    <div className="flex items-center justify-start flex-col overflow-hidden">
                                        <div className={`${index === 1 ? "bg-purple-400" : ""} w-[100%] border-none`}>
                                        {/* <div className="bg-purple-400 w-[100%] border-none"> */}
                                            <p className="text-2xl my-2 font-bold break-words w-[100%]">{addCommasToNumber(item.contribution)}</p>
                                        </div>
                                        <div className=" w-full relative flex justify-center items-center border-none">
                                            <div className={`${index===1?'bg-purple-400':''} h-[50%] absolute top-0 left-0 w-full`}></div>
                                            {/* <div className="bg-purple-400 h-[50%] absolute top-0 left-0 w-full"></div> */}
                                            <img className="w-[80px] h-[80px] rounded-full z-0" src={item.pfp} alt="Profile Picture" />
                                        </div>
                                        
                                        {/* <div className=''> */}
                                            <p className="text-2xl font-bold break-words w-[100%]">{item.name}</p>
                                        {/* </div> */}
                                        <p className="break-words w-[100%]">@{item.username}</p>
                                        <button className="hover:border-green-500 border-[2px] border-green-300 text-green-500 font-bold text-[0.8rem]  self-end break-words mr-2 mb-2 max-w-[90px] w-[70%]">Congratulate</button>
                                        {/* <br></br>
                                        <br></br> */}
                                    </div>
                                    <div className="bg-purple-400">
                                        {/* <button className="hover:border-green-500 border-[2px] border-green-300 text-green-500 font-bold text-[0.8rem]  self-end absolute bottom-2 right-2 break-words max-w-[90px] w-[70%]">Congratulate</button> */}
                                    </div>
                                </div>
                            )
                    )
                }
            </div>

            <div className="container mx-auto p-4 w-[100%]">
                <table className=" table-auto border-separate border-spacing-x-3 w-[100%]">

                    <tbody className="border-y-2">
                            
                            <tr>
                                {
                                    [userStats[1], userStats[0], userStats[2]].map(
                                        (item, index) =>
                                            <td className={` font-bold text-xl pt-2 border-y-0 border-t-2 border-x-2 border-gray-200 ${index===1?"bg-purple-500":""}`}>{addCommasToNumber(item.contribution)}</td>
                                    )
                                }
                            </tr>

                            <tr>
                                {
                                    [userStats[1], userStats[0], userStats[2]].map(
                                        (item, index) =>
                                            <td className="p-0 border-y-0 border-x-2 border-gray-200">
                                                <div className="flex justify-center relative">
                                                    <div className = {`absolute top-0 left-0 w-full h-[50%] ${index===1?"bg-purple-500":""}`}></div>
                                                    <img className="m-2 w-[80px] h-[80px] z-0 rounded-full" src={item.pfp} alt="Profile Picture" />
                                                </div>
                                            </td>
                                    )
                                }
                            </tr>

                            <tr>
                                {
                                    [userStats[1], userStats[0], userStats[2]].map(
                                        (item, index) =>
                                            <td className=" font-bold text-base border-y-0 border-x-2 border-gray-200">{item.name}</td>
                                    )
                                }
                            </tr>

                            <tr>
                                {
                                    [userStats[1], userStats[0], userStats[2]].map(
                                        (item, index) =>
                                            <td className=" text-xs border-y-0 border-x-2 border-gray-200">@{item.username}</td>
                                    )
                                }
                            </tr>

                            <tr>
                                {
                                    [userStats[1], userStats[0], userStats[2]].map(
                                        (item, index) =>
                                            <td className=" text-sm border-y-0 border-b-2 border-x-2 border-gray-200">
                                                <div className="flex justify-end">
                                                    <button className="m-2 hover:border-green-600 hover:text-green-600 border-solid border-[1px] border-green-500 text-green-500 p-1 text-xs font-bold">
                                                        Congratulate
                                                    </button>
                                                </div>
                                            </td>
                                    )
                                }
                            </tr>
                    </tbody>
                </table>
            </div>


        
            <div>
                <h2 className=" text-3xl text-left font-bold hover:font-extrabold">All Users</h2>
            </div>


            {/*
                <div className="flex w-full">
                <div className="flex flex-auto w-[200px] flex-col items-start justify-center bg-green-400">
                <p className="bg-red-300 font-bold">User</p>
                {
                    userStats.map(
                        (item)=>(
                                <>
                                <div className="flex flex-auto w-[200px]">
                                <img className="m-2 w-[50px] h-[50px] rounded-full flex-none" src={item.pfp} alt="Profile Picture" />
                                <div className="flex flex-col items-start">
                                            <p className="text-xl font-bold break-words">{item.name}</p>
                                            <p className="break-words">@{item.username}</p>
                                        </div>
                                        </div>
                                        </>
                            )
                        )
                    }
                    </div>
                    
                    <div className="flex flex-auto w-[200px] flex-col items-start justify-center bg-blue-400">
                    <p className="bg-red-300 font-bold">Contribution</p>
                    {
                        userStats.map(
                            (item)=>(
                                <p>
                                <p className="h-[60px]">{addCommasToNumber(item.contribution)}</p>
                                </>
                                )
                                )
                    }
                    </div>
                    
                    <div className="flex flex-auto w-[200px] flex-col items-start justify-center bg-red-400">
                    <p className="font-bold">Followers</p>
                    {
                        userStats.map(
                            (item)=>(
                                <>
                                <p className="h-[60px]">{addCommasToNumber(item.followers)}</p>
                                </>
                                )
                                )
                            }
                            </div>
                            
                            <div className="flex flex-auto w-[200px] flex-col items-start justify-center bg-orange-400">
                    <p className="font-bold ">Posts</p>
                    {
                        userStats.map(
                            (item)=>(
                                <>
                                    <p className="h-[60px]">{addCommasToNumber(item.posts)}</p>
                                </>
                            )
                        )
                    }
                </div>

                <div className="flex flex-auto w-[200px] flex-col items-start justify-center bg-yellow-400">
                    <p className="flex font-bold">Email</p>
                    {
                        userStats.map(
                            (item)=>(
                                <>
                                    <p className="flex h-[60px]">{item.email}</p>
                                </>
                            )
                        )
                    }
                </div>

                <div className="flex flex-auto w-[200px] flex-col items-start justify-center bg-purple-400">
                    <p className="font-bold">Congratulate</p>
                    {
                        userStats.map(
                            (item)=>(
                                <>
                                    <button className="h-[60px]">
                                        Congratulate
                                    </button>
                                </>
                            )
                        )
                    }
                </div>
            </div>
            */
            }
            {/* <div className="w-full">
                <div className="flex font-bold">
                    <span className="flex flex-auto w-[200px] justify-center bg-green-400">User</span>
                    <span className="flex flex-auto w-[100px] justify-center bg-blue-400">Contribution</span>
                    <span className="flex flex-auto w-[100px] justify-center bg-purple-400">Followers</span>
                    <span className="flex flex-auto w-[100px] justify-center bg-orange-400">Posts</span>
                    <span className="flex flex-auto w-[200px] justify-center bg-red-400">Email</span>
                    <span className="flex flex-none w-[150px] justify-center bg-yellow-400">Congratulate</span>
                </div>

                        {
                            userStats.map(
                                (item) => (
                                    <div className="flex border-solid border-black my-3 bg-green-100">
                                        <span className="flex flex-auto w-[200px] bg-green-400 items-center justify-start">
                                            <img className="m-2 w-[50px] h-[50px] rounded-full flex-none" src={item.pfp} alt="Profile Picture" />
                                            <div className="flex flex-col items-start">
                                                <p className="text-xl font-bold break-words">{item.name}</p>
                                                <p className="break-words">@{item.username}</p>
                                            </div>
                                        </span>
                                        <span className="flex flex-auto w-[100px] items-center justify-center  bg-blue-400">
                                            <p className="text-2xl p-1 my-2 font-bold break-words">{addCommasToNumber(item.contribution)}</p>
                                        </span>
                                        <span className="flex flex-auto break-words w-[100px] items-center justify-center  bg-purple-400">
                                            <p className="my-2 p-1 break-words">{addCommasToNumber(item.followers)}</p>
                                        </span>
                                        <span className="flex flex-auto w-[100px] items-center justify-center  bg-orange-400">
                                            <p className="my-2 p-1 break-words">{addCommasToNumber(item.posts)}</p>
                                        </span>
                                        <span className="flex flex-auto w-[200px] items-center justify-center  bg-red-400">
                                            <p className="my-2 p-1 break-words">{item.email}</p>
                                        </span>
                                        <span className="flex flex-none w-[150px] items-center justify-center  ">
                                            <button className="hover:bg-green-600 bg-green-500 text-white border-[2px] p-1 text-[0.8rem] break-words">Congratulate</button>
                                        </span>
                                    </div>
                                )
                            )
                        }
            </div> */}


             <div className="container mx-auto p-4 w-[100%]">
                <table className="table-auto border-separate border-spacing-y-5 border-spacing w-[100%]">
                    <thead>
                        <tr>
                            <th className=" text-left pl-4 w-[25%]">Name</th>
                            <th className=" text-left pl-8 w-[12%]">Contribution</th>
                            <th className=" text-left pl-4 w-[12%]">Followers</th>
                            <th className=" text-left pl-4 w-[11%]">Posts</th>
                            <th className=" text-left pl-4 w-[30%]">Email</th>
                            <th className=" text-left pl-4 w-[10%]">Congratulate</th>
                        </tr>
                    </thead>

                    <tbody>
                        {
                            userStats.map(
                                (item) => (
                                    <tr className="" key={item.username}>
                                        <td className=" flex flex-row items-center text-left border px-4 py-2 border-y-2 border-l-2 border-r-0 border-gray-100">
                                            <img className="m-2 w-[50px] h-[50px] rounded-full" src={item.pfp} alt="Profile Picture" />
                                            
                                            <div className="flex-col flex">
                                                <p className="text-xl font-bold">{item.name}</p>
                                                <p className=" text-sm text-gray-500">@{item.username}</p>
                                            </div>
                                        </td>

                                        <td className=" font-bold text-2xl text-left border pl-8 pr-4 py-2 border-y-2 border-x-0 border-gray-100">{addCommasToNumber(item.contribution)}</td>
                                        <td className=" text-xl text-left border px-4 py-2 border-y-2 border-x-0 border-gray-100">{addCommasToNumber(item.followers)}</td>
                                        <td className=" text-xl text-left border px-4 py-2 border-y-2 border-x-0 border-gray-100">{addCommasToNumber(item.posts)}</td>
                                        <td className=" text-left border px-4 py-2 border-y-2 border-x-0 border-gray-100">{item.email}</td>
                                        <td className=" text-left border px-4 py-2 border-y-2 border-l-0 border-r-2 border-gray-100">
                                            <button className="hover:bg-green-600 bg-green-500 text-white p-1 text-sm">
                                                Congratulate
                                            </button>
                                        </td>
                                    </tr>
                                )
                            )
                        }
                    </tbody>
                </table>
            </div>
        </>
    );
}

export default Leaderboard;