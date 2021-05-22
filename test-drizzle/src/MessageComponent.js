import React from 'react';
import { drizzleReactHooks } from '@drizzle/react-plugin';
import { newContextComponents } from '@drizzle/react-components';

const { ContractData, ContractForm } = newContextComponents;

const { useDrizzle, useDrizzleState } = drizzleReactHooks;


const MessageComponent = () => {

    const { drizzle } = useDrizzle();
    const state = useDrizzleState(state => state);

    return (
        <div>
            <ContractData
            drizzle={drizzle}
            drizzleState={state}
            contract="SimpleContract"
            method="getMessage"
            />
            <h3>SEND MESSAGE TO SMART CONTRACT</h3>
            <ContractForm
            drizzle={drizzle}
            drizzleState={state}
            contract="SimpleContract"
            method="sendMessage" />
        </div>
          

    )
}

export default MessageComponent;