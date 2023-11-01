
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import React, { useState} from 'react'
import NavBar from './classCompo/NavBar';
import News from './classCompo/News';
import LoadingBar from 'react-top-loading-bar'


 const App=()=> {

const [progress, setProgress] = useState(0)

    return (
      <>
        <div>
          <Router>
            <NavBar />
            <LoadingBar
              height={3}
              color='white'
              progress={progress}
            />
            <Routes>
              <Route exact path='/'  element={<News key='general' setProgress={setProgress} pageSize={12} country='in' category='general' />}>

              </Route>
              <Route exact path='/business'  element={<News key='business' setProgress={setProgress} pageSize={12} country='in' category='business' />}>

              </Route>
              <Route exact path='/entertainment'  element={<News key='entertainment' setProgress={setProgress} pageSize={12} country='us' category='entertainment' />}>

              </Route>
              <Route exact path='/general' element={<News key='general' setProgress={setProgress} pageSize={12} country='in' category='general' />}>

              </Route>
              <Route exact path='/health'  element={<News key='health' setProgress={setProgress} pageSize={12} country='in' category='health' />}>

              </Route>
              <Route exact path='/science'  element={<News key='science' setProgress={setProgress} pageSize={12} country='in' category='science' />}>

              </Route>
              <Route exact path='/sports'  element={<News key='sports' setProgress={setProgress} pageSize={12} country='in' category='sports' />}>

              </Route>
              <Route exact path='/technology'  element={<News key='technology' setProgress={setProgress} pageSize={12} country='in' category='technology' />}>

              </Route>
            </Routes>

          </Router></div></>
    )

}
export default App
