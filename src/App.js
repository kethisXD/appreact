import React from 'react';
import './styles/App.css';
import Header from './components/header/Header';
import Block1 from './components/block1/block1';
import Block2 from './components/block2/block2';
import Block3 from './components/block3/block3';
import Block4 from './components/block4/block4';
import Block5 from './components/block5/block5';

function App() {
  return(
    <div className='App'>
    <Header />
    <main>
     <Block1 />
     <Block2 />
     <Block3 />
     <Block4 />
     <Block5 />
    </main>
    </div>
  );
}

export default App;
