import React from 'react';
import './App.css';
import UseLayoutExample2 from './components/uselayout-example-2';
import { BrowserRouter, Route, Switch, Link } from 'react-router-dom';
import UseLayoutExample1 from './components/uselayout-example-1';
import UseLayoutExample3 from './components/uselayout-example-3';
import UseCallbackExample1 from './components/usecallback-example-1';
import UseCallbackExample2 from './components/usecallback-example-2';
import UseCallbackExample3 from './components/usecallback-example-3';
import UseMemoExample1 from './components/usememo-example-1';
import UseMemoExample2 from './components/usememo-example-2';
import UseMemoExample3 from './components/usememo-example-3';
import UseRefExample1 from './components/useref-example-1';
import UseRefExample2 from './components/useref-example-2';
import UseRefExample3 from './components/useref-example-3';
import CustomHook1 from './components/custom-hook-1';
import CustomHook2 from './components/custom-hook-2';
import CustomHook3 from './components/custom-hook-3';

function App() {

  return (
    <div className="App">
     <BrowserRouter>
     <nav style={{display:'flex', width: '100%'}}>
          <ul style={{display:'flex', width: '100%'}}>
            <div className='wrapper'>
              <div className='hook-wrapper'>
              <li><Link to="/usecallback-example-1">UseCallback1</Link></li>
              <li><Link to="/usecallback-example-2">UseCallback2</Link></li>
              <li><Link to="/usecallback-example-3">UseCallback3</Link></li>
              </div>
              <div className='hook-wrapper'>
              <li><Link to="/usememo-example-1">UseMemo1</Link></li>
              <li><Link to="/usememo-example-2">UseMemo2</Link></li>
              <li><Link to="/usememo-example-3">UseMemo3</Link></li>
                </div>
                <div className='hook-wrapper'>
                <li><Link to="/useref-example-1">UseRef1</Link></li>
                <li><Link to="/useref-example-2">UseRef2</Link></li>
                <li><Link to="/useref-example-3">UseRef3</Link></li>
                </div>
                <div className='hook-wrapper'>
                <li><Link to="/uselayout-example-1">UseLayout1</Link></li>
              <li><Link to="/uselayout-example-2">UseLayout2</Link></li>
              <li><Link to="/uselayout-example-3">UseLayout3</Link></li>
                </div>
                <div className='hook-wrapper'>
                <li><Link to="/custom-hook-1">CustomHook1</Link></li>
              <li><Link to="/custom-hook-2">CustomHook2</Link></li>
              <li><Link to="/custom-hook-3">CustomHook3</Link></li>         
                </div>   
              </div>
          </ul>
        </nav>
        <Switch>
          <Route path="/usecallback-example-1">
            <UseCallbackExample1 />
          </Route>
          <Route path="/usecallback-example-2">
            <UseCallbackExample2 />
          </Route>
          <Route path="/usecallback-example-3">
            <UseCallbackExample3 />
          </Route>
          <Route path="/usememo-example-1">
            <UseMemoExample1 />
          </Route>
          <Route path="/usememo-example-2">
            <UseMemoExample2 />
          </Route>
          <Route path="/usememo-example-3">
            <UseMemoExample3 />
          </Route>
          <Route path="/useref-example-1">
            <UseRefExample1 />
          </Route>
          <Route path="/useref-example-2">
            <UseRefExample2 />
          </Route>
          <Route path="/useref-example-3">
            <UseRefExample3 />
          </Route>
          <Route path="/uselayout-example-1">
            <UseLayoutExample1 />
          </Route>
          <Route path="/uselayout-example-2">
            <UseLayoutExample2 />
          </Route>
          <Route path="/uselayout-example-3">
            <UseLayoutExample3 />
          </Route>
          <Route path="/custom-hook-1">
            <CustomHook1 />
          </Route>
          <Route path="/custom-hook-2">
            <CustomHook2 />
          </Route>
          <Route path="/custom-hook-3">
            <CustomHook3 />
          </Route>
          <Route path="/uselayout-example-1">
            <UseLayoutExample1 />
          </Route>
          <Route path="/uselayout-example-2">
            <UseLayoutExample2 />
          </Route>
          <Route path="/uselayout-example-1">
            <UseLayoutExample1 />
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;