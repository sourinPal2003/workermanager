import { createContext, useContext } from "react";

export const OperationContext = createContext({});

export const OperationProvider = OperationContext.Provider;

export const useOperation = () => {
    return useContext(OperationContext);
};


