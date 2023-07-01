import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom'
import Login from './pages/Login.jsx'
import Home from './pages/Home.jsx'
import Profile from './pages/Profile.jsx'
import './App.css'

function App() {
  const [loggedIn, setLoggedIn] = useState(false)
  const [userNumber, setUserNumber] = useState(0)
  const userDetails = [
    ['username', 'password', 'name', 'pfp', 'bio'],
    ['admin', 'admin', 'Dani', 'https://pbs.twimg.com/profile_images/1139870822934466562/-_KKMAE7_400x400.png', 'I am a youtube legend. I make games for fun.'],
    ['dev', 'dev', 'John Green', 'https://images.mubicdn.net/images/cast_member/223408/cache-323423-1521794679/image-w856.jpg?size=800x', 'I am an author, podcast host, and educator.'],
    ['john', 'john', 'Arsalan Ash', 'https://upload.wikimedia.org/wikipedia/commons/1/18/Arslan_Ash_2019_interview.jpg', 'I am a pro Tekken player'],
    ['test', 'test', 'Neutral Nawaz', 'https://encrypted-tbn3.gstatic.com/licensed-image?q=tbn:ANd9GcQ9rTMONBcLOJbxNPc6aQQUpgppVflYYO-I8dbvfH1-LTAHJIc_JeSvb5_pySYLbtOp5tvLf1OFrrNlYZA', 'I am an unbiased politician. People call me Neutral. Nice to meet you!']
  ];

  return (
    <Router>
      <nav className='bg-green-300'>
        <ul className="flex space-x-4 text-xl p-2">
          <li>
            <Link to="/">Home</Link>
          </li>

          {
            !loggedIn && <li>
              <Link to="/login">Login</Link>
            </li>
          }

          {
            loggedIn && <li>
              <Link to="/login" onClick={()=>{setLoggedIn(false)}}>Logout</Link>
            </li>
          }

          {loggedIn && (
            <li>
              <Link to="/profile">Profile</Link>
            </li>
          )}
        </ul>
      </nav>

      <Routes> 
        <Route path="/" element={<Home/>}></Route>
        <Route path="/login" element={<Login loggedIn={loggedIn} setLoggedIn={setLoggedIn} userNumber={userNumber} setUserNumber={setUserNumber} userDetails={userDetails}/>}></Route>
        <Route path="/profile" element={<Profile loggedIn={loggedIn} setLoggedIn={setLoggedIn} userNumber={userNumber} setUserNumber={setUserNumber} userDetails={userDetails}/>}></Route>
      </Routes>
    </Router>
  );
}

export default App
