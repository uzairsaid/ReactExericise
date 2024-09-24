import { createContext, useState} from "react";

export const WeatherContext = createContext();


export const DataProvider = ({children})=>{
    const [data, setData] = useState(null)
   
    return (
        <WeatherContext.Provider value={{data, setData}}>
            {children}
        </WeatherContext.Provider>
    )


}