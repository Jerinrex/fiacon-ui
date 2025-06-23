import React from 'react';
import './App.css';
import Header from './components/Header';
import AppIntro from './components/AppIntro';
import AppLinks from './components/AppLinks';
import ActionButtons from './components/ActionButtons';
import Footer from './components/Footer';

function App() {
  return (
    <div>
      <Header />
      <AppIntro />
      <AppLinks />
      <ActionButtons />
      <Footer />
    </div>
  );
}

export default App;
