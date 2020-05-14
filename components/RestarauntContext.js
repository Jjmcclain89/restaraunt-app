import React from 'react';
import mqtt from 'mqtt';

const RestarauntContext = React.createContext();

export const RestarauntProvider = SocketContext.Provider;
export const RestarauntConsumer = SocketContext.Consumer;
export default SocketContext;
