import react from 'react';
import Counter from './Counter/Counter'

import './App.css';

function getRandomPostTime() {
    return (Math.floor(Math.random() * 10) + 1) + 'h';
}

const App = (props) => {

    return ( 
      <div className='counter-container'>
        <Counter counter={10} displayBtns={true}/>
      </div>
    
    )

}


export default App;