// import { useState, useEffect } from "react";

import { useEffect } from "react";
import { useState } from "react";

// function useCurrency(currency) {
//   const [data, setData] = useState({});
//   useEffect(() => {
//     fetch(
//       `https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/${currency}.json`
//     )
//       .catch((err) => console.log("Couldn't connect try again later"))
//       .then((res) => res.json())
//       .then((res) => setData(res[currency]));
//   }, [currency]);
//   return data;
// }

// export default useCurrency;

function useCurrency(currency){
    const [data, setData] = useState({});
    useEffect(() => {
        fetch(`https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/${currency}.json`).then((res) => res.json()).then((res) => setData(res[currency]))}, [currency])
    console.log(data);
    return data;
}

export default useCurrency;