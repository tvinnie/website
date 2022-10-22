import Home from './components/Pages/Home';
import PageWrapper from './components/PageWrapper';
import { BrowserRouter as Router, Link,Navigate, Route, Routes} from 'react-router-dom';
import { useState } from 'react';

import About from './components/Pages/About';
import Services from './components/Common/Services';
import Portfolio from './components/Common/Portfolio';
import Contact from './components/Pages/Contact';
import Team from './components/Common/Team';
import AdminWrapper from './components/AdminWrapper';
import Login from './components/Pages/Login';

import Dashboard from './components/Pages/Dashboard';

import {connect} from 'react-redux';


function App() {
  const [loggedIn] = useState(true)

  return (
    <Router>

       <Routes>

        <Route
          path="/admin"
          element = {
           <Dashboard />
          }
          
          /> 

        </Routes>

   </Router>
  );
}

const mapStateToProps = state => {
  return {
    auth: state.auth,
  }
}

const mapDispatchToProps = dispatch => {
  return {

  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);





// more routes
// ------------------
// <Route 
// path="/"
// element={
//   <PageWrapper >
//       <Home />
//   </PageWrapper>
// }/>

// <Route 
// path="/about"
// element={
//   <PageWrapper >
//     <About />
// </PageWrapper>
// } />

// <Route 
// path='/services'
// element={
//   <PageWrapper >
//     <Services />
// </PageWrapper>
// } />

// <Route 
// path='/portfolio'
// element={
//   <PageWrapper >
//     <Portfolio />
// </PageWrapper>
// } />

// <Route
// path='/contact'
// element={
// <PageWrapper >
//     <Contact />
// </PageWrapper>
// } />

// <Route 
// path='/team'
// element={
//   <PageWrapper >
//     <Team />
// </PageWrapper>
// } />