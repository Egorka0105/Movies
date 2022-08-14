import React from 'react';
import Header from "./Components/Header/Header";
import {Route, Routes} from "react-router-dom";
import MainPage from "./Components/MainPage/MainPage";

function App() {
  return (
    <>
      <Header/>
        <div className='content'>
            <Routes>
                <Route path='/' element={<MainPage/>} />
            </Routes>
        </div>
    </>
  );
}

export default App;
