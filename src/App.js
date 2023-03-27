import logo from './logo.svg';
import './App.css';
import React from 'react';
import IntervalHookCounter from './components/IntervalHookCounter';
import IntervalClassMethod from './components/intervalClassMethod';
import CounterRed from './components/counterRed';
import ParentControl from './components/ParentControl';
import MemoPr from './components/MemoPr';
import FocusHook from './components/FocusHook';
import useForm from './components/hooks/useForm';
import Data from './Data/comments';
import AgeCounterCheck from './components/AgeCounterCheck';
import Sandy from './components/Sandy';

export const UserContext = React.createContext();


function App() {
  //using custom hooks for sharing code
 
  const [firstCount,firstbind,restFirst] = useForm('');
  const [secondCount,secondbind,restSecond] = useForm('');

  const submitHandler = ()=>{
    alert('hi '+ firstCount + ' '+ secondCount)
    // restFirst()
    // restSecond()
  }

  return (
    <div className="App">
      <UserContext.Provider value={'Israil'}>
      <IntervalHookCounter/>
      </UserContext.Provider>
      {/* <IntervalClassMethod /> */}
      <div>
        <CounterRed data = {Data} />
      </div>
      {/* <ParentControl/> */}
      {/* <MemoPr /> */}
      {/* <FocusHook /> */}
      <div>
<form onSubmit={submitHandler}>
<div>FirstName: 
   <input
   {...firstbind}
   type='text'
   />
</div>
<div>LastName: 
   <input
   {...secondbind}
   type='text'
   />
</div>
<button>Submit</button>
</form>
      </div>
      <AgeCounterCheck/>
      <Sandy student="Sandy" ass = {60}  weight={10}/>
    </div>
  );
}

export default App;
