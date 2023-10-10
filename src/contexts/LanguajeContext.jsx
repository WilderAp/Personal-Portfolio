import {  createContext, useState  } from "react";

const LanguajeContext = createContext();
 
const LanguajeProvider = () => {
    const [languaje, setLanguaje] = useState({
        english: ["hello world"],
        español: ["hola mundo"],
    })

    return (
        
        <LanguajeContext.Provider value={{languaje, setLanguaje}}>

            

        </LanguajeContext.Provider>
        
    )
};

export default LanguajeProvider;