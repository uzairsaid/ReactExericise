import { createContext, useState} from "react";

export const WeatherContext = createContext();


export const DataProvider = ({children})=>{
    const [data, setData] = useState(null)
    const [loading, setLoading] = useState(false)

   
    return (
        <WeatherContext.Provider value={{data, setData, loading, setLoading}}>
            {children}
        </WeatherContext.Provider>
    )


}