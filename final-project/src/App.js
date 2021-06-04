import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import TeamBuilderApp from './components/TeamBuilderApp/TeamBuilderApp';

function App() {
  return (
    <div className='team-builder-main'>
      <h1 className='main-header'>Marvel Strike Force Team Builder</h1>
      <TeamBuilderApp />
    </div>
  );
}

export default App;
