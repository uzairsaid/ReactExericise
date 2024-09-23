// import { useContext,createContext ,useEffect, useState} from "react";

// const DataContext = createContext();

// export const useData = ()=>{
//     return useContext(dataContext);
// }

// const DataProvider = ({children})=>{
//     const text = "Welcome to meteo app";
//     const [latitude, setLatitude] = useState(0);
//     const [longitude, setLongitude] = useState(0);
//     const [data, setData] = useState(null);
//     const [loading, setLoading] = useState(false);

//     const appid = "dde0a4dcefbdab3fac4077a9e9c86a05";

//     const handleLatitudeChange = (e)=>{  
//         setLatitude(e.target.value)
        
//     }

//     const handleLongitudeChange = (e)=>{  
//         setLongitude(e.target.value)
        
//     }

//     const handleSubmit = (e)=>{
//         e.preventDefault();
//         setLoading(true);
//         console.log(data);

//     }
//     const [error, setError] = useState(null);

//     useEffect(() => {
//       const fetchData = async () => {
//         try {
//           const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${appid}`);
          
//           if (!response.ok) {
//             throw new Error('Network response was not ok');
//           }
          
//           const responseData = await response.json();
//           setData(responseData);
//         } catch (err) {
//           setError(err);
//         } finally {
//           setLoading(false); 
//         }
//       };
  
//       if (loading) {
//         fetchData(); // Call fetchData when loading is true
//       }
//     }, [loading, latitude, longitude, appid]); // Include appid in the dependencies
  
//     return (
//         <DataContext.Provider value={{loading,data,error}}>

//             {children}
//         </DataContext.Provider>
//     )


// }