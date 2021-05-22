import React from 'react';
import { drizzleReactHooks } from '@drizzle/react-plugin';

const { useDrizzleState } = drizzleReactHooks;


const LoadingComponent = ({children}) => {
    const drizzleStatus = useDrizzleState(state => state.drizzleStatus)
    if (drizzleStatus.initialized === false) {
        return "Loading....."
    }
    return (
        <>
          { children }
        </>
    )
}

export default LoadingComponent