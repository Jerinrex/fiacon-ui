import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import AppIntro from './components/AppIntro';
import AppLinks from './components/AppLinks';
import ActionButtons from './components/ActionButtons';
import Footer from './components/Footer';
import HeaderInfo from './components/headerInfo';
import RegistrationInfo from './components/RegistrationInfo';
import TopNav from './components/TopNav';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={
          <>
            <Header />
            <AppIntro />
            <AppLinks />
            <ActionButtons />
            <Footer />
          </>
        } />
        <Route path="/register" element={
          <>
            <TopNav />
            <HeaderInfo />
            <RegistrationInfo />
             <AppLinks />
            <Footer />
          </>
        } />
      </Routes>
    </Router>
  );
}

export default App;
