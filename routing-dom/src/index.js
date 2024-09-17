import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
// import App from './App';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter,Routes,Route,Link} from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));

const Home=()=>{
  return(
    <div>
      <h1>Home Page</h1>
    </div>
  );
};

const About=()=>{
  return(
    <div> 
      <h1>About</h1>

    </div>
  );
};

const ProfilePage=()=>{

  return(
    <div>
      <h1>Profile Page</h1>

    </div>
  );
};

const Setting=()=>{
  return(
    <div>
      <h1>Settings</h1>

    </div>
  )
}

root.render(
  <React.StrictMode>
    <BrowserRouter>
    {/* <App /> */}
    <Routes>
    <Route path="/" element={<Home/>} />
    <Route path="/about" element={<About/>} />
    <Route path="account">
    <Route path="profile" element={<ProfilePage/>} />
    <Route path="setting" element={<Setting/>} />
    </Route>
    </Routes>
  </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
