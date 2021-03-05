import React from 'react';
import Home from '../src/pages/Admin/Home';
import Header from '../src/pages/Header';
import Bio from "../src/pages/Bio";
import Music from "../src/pages/Music"
import Avatars from "../src/components/Avatar";
import News from "../src/pages/News";
import Contact from "../src/pages/Contact";
function App() {
  return (
    <div>
    <Avatars/>
    <Header/>
    <Bio/>
    <Music/>
    <News/>
    <Contact/>
    </div>
  );
}

export default App;
