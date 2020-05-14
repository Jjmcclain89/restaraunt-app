import React from 'react';

const RestarauntContext = React.createContext();

export const RestarauntProvider = RestarauntContext.Provider;
export const RestarauntConsumer = RestarauntContext.Consumer;
export default RestarauntContext;
