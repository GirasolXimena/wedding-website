import React from 'react';
import Hero from './components/Hero';
import NavBar from './components/NavBar';
import EventsList from './components/EventsList';
import HowWeMet from './components/HowWeMet';
import Invitation from './components/Invitation';
import EngagementPics from './components/EngagementPics';

const App: React.FC = () => {
  return (
    <div className="App">
      <NavBar />
      <Hero />
      <EventsList />
      <HowWeMet />
      <Invitation />
      <EngagementPics />
    </div>
  );
}

export default App;
