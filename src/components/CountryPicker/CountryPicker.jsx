// import React, { useState, useEffect } from 'react';
// import { NativeSelect, FormControl } from '@material-ui/core';

// import { fetchCountries } from '../../api';

// import styles from './CountryPicker.module.css';

// const Countries = ({ handleCountryChange }) => {
//   const [countries, setCountries] = useState([]);

//   useEffect(() => {
//     const fetchAPI = async () => {
//       setCountries(await fetchCountries());
//     };

//     fetchAPI();
//   }, []);

//   return (
//  <FormControl className={styles.formControl}>
//       <NativeSelect defaultValue="" onChange={(e) => handleCountryChange(e.target.value)}>
//         <option value="">United States</option>
 
//         {countries.map((country, i) => 
//         <option key={i} value={country}>{country}</option>
//         )} 
//        </NativeSelect>
//     </FormControl>
  // );
//  };

import React from "react";
import { useGetAllDataQuery } from "../../RTKQuery/Data";

const Countries = ()=>{
  
const responseInfo = useGetAllDataQuery()

console.log("Responses",responseInfo)
console.log("ISSUCCESS",responseInfo.isSuccess)
console.log("Responses",responseInfo.fulfilledTimeStamp)
console.log("Data",responseInfo.data)


if(responseInfo.isLoading) return <h1>Loading...</h1>
if(responseInfo.isError) return <h1>An error occured {responseInfo.error}</h1>

const datalist = responseInfo.data;
return(
  <div className="App">
   <h1>Corona Tracker App - (All Data)</h1>
   {
   datalist.map((country) =>
      <h1>{country}</h1>
   )


   }

  </div>
)
}
export default Countries;