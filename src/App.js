import Home from './components/Pages/Home';
import PageWrapper from './components/PageWrapper';
import { BrowserRouter as Router, Link, Route, Routes} from 'react-router-dom';
import About from './components/Pages/About';
import Services from './components/Common/Services';
import Portfolio from './components/Common/Portfolio';
import Contact from './components/Pages/Contact';
import Team from './components/Common/Team';
import Timeline from './components/Common/Timeline';

function App() {
  return (
    <Router>
      <PageWrapper>
        <Routes>

          <Route 
          path="/"
          element={<Home />}
          />

        <Route 
          path="/about"
          element={<About />}
          />
        
        <Route 
          path='/services'
          element={<Services/>}
        />

        <Route 
          path='/portfolio'
          element={<Portfolio/>}
        />

        <Route
        path='/contact'
        element={<Contact/>}
        />

        <Route 
          path='/team'
          element={<Team />}
          />


        </Routes>
      </PageWrapper>
   </Router>
  );
}

export default App;
