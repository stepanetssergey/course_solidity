import React from 'react';
import './App.css';

import { Drizzle } from '@drizzle/store';
import { drizzleReactHooks } from '@drizzle/react-plugin';

import drizzleOptions from './drizzleOptions';
import LoadingComponent from './LoadingComponent'
import MessageComponent from './MessageComponent';
import DepositComponent from './DepositComponent';


const drizzle = new Drizzle(drizzleOptions)
const { DrizzleProvider } = drizzleReactHooks;

function App() {
  return (
    <DrizzleProvider drizzle={drizzle}>
      <LoadingComponent>
        <div className="App">
          <header className="App-header">
            <h3>MESSAGE TO SMART CONTRACT</h3>
          </header>
          <MessageComponent/>
          <h3>Deposites</h3>
          <DepositComponent/>
        </div>
      </LoadingComponent>
    </DrizzleProvider>
  );
}

export default App;
