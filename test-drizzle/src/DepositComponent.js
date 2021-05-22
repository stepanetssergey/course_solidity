import React from 'react';
import { drizzleReactHooks } from '@drizzle/react-plugin';
import { newContextComponents } from '@drizzle/react-components';

import testOptions from './testOptions'

const { ContractData, ContractForm } = newContextComponents;

const { useDrizzle, useDrizzleState } = drizzleReactHooks;


const DepositComponent = () => {

    const { drizzle } = useDrizzle();
    const state = useDrizzleState(state => state);
    
    const { test1 } = testOptions;

    const variable = 'THAT IS TEST VARIABLE'

    return (
        <div>
            <ContractData
            drizzle={drizzle}
            drizzleState={state}
            contract="SimpleContract"
            method="getDepositeAmount"
            />
            <h3>Set your deposite -- {variable} TEST {test1}</h3>
            <ContractForm
              drizzle={drizzle}
              contract="SimpleContract"
              method="setDepositAmount"
            />
        </div>
          

    )
}

export default DepositComponent;