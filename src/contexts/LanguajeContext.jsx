import {  createContext, useEffect, useState  } from "react";
import spanish from "../utils/spanish.json";
import english from "../utils/english.json";

export const LanguajeContext = createContext({languaje: english});
 
const LanguajeProvider = ({children}) => {
    
    useEffect(() => {
        console.log(LanguajeContext);
    }, [languaje]);

    return (
        
        <LanguajeContext.Provider >

            {children}

        </LanguajeContext.Provider>
        
    )
};



export default {LanguajeProvider};
