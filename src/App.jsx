// import { useState } from "react";
// import backgroundImage from "../src/assets/currencyImage.jpg";
// import InputBox from "./component/InputBox";
// import "./App.css";
// import useCurrency from "./hooks/useCurrency";
// import { useEffect } from "react";

// function App() {
//   const [to, setTo] = useState("inr");
//   const [from, setFrom] = useState("usd");
//   const [amount, setAmount] = useState(1);
//   const [convertedAmount, setConvertedAmount] = useState(0);
//   const [amountDisabled, setAmountDisabled] = useState(true);

//   const currencyData = useCurrency(from);
//   const option = Object.keys(currencyData);

//   const swap = () => {
//     const currentTo = to;
//     const currentFrom = from;
//     const currentAmount = amount;
//     const currentConvertedAmount = convertedAmount;

//     setTo(currentFrom);
//     setFrom(currentTo);
//     setAmount(currentConvertedAmount);
//     setConvertedAmount(currentAmount);
//   };

//   const convert = () => {
//     setConvertedAmount(Math.round(amount * currencyData[to] * 100)/100);
//   }

//   useEffect(() => {
//     convert();
//   }, [currencyData, amount, to ] )

//   return (
//     <>
//       <div
//         className="w-full h-screen"
//         style={{
//           backgroundImage: `url(${backgroundImage})`,
//           backgroundSize: "cover",
//           backgroundPosition: "center",
//           backgroundRepeat: "no-repeat",
//           height: "100vh",
//           width: "100vw",
//           overflow: "hidden",
//         }}
//       >
//         <form
//           onSubmit={(e) => {
//             e.preventDefault();
//             convert();
//           }}
//         >
//           <div className="flex flex-col justify-between max-w-screen-md h-72 bg-gray-500 rounded-xl mx-auto mt-48 py-6">
//             <InputBox
//               label="from"
//               amount={amount}
//               selectedCurrency={from}
//               currencyOption={option}
//               onCurrencyChange={(currency) => {
//                 setFrom(currency);
//               }}
//               onAmountChange={(amount) => {
//                 setAmount(amount);
//               }}
//             />
//             <button
//               onClick={swap}
//               className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-lg w-20 self-center h-12 absolute swap"
//             >
//               Swap
//             </button>
//             <InputBox
//               label="to"
//               amount={convertedAmount}
//               selectedCurrency={to}
//               currencyOption={option}
//               onCurrencyChange={(currency) => setTo(currency)}
//               amountDisabled
//             />

//           </div>

//           <button
//               type="submit"
//               className="convertBtn"
//             >
//               Convert {from.toUpperCase()} to {to.toUpperCase()}
//             </button>

//         </form>
//       </div>
//     </>
//   );
// }

// export default App;

import React from "react";
import { useState } from "react";
import InputBox from "./component/InputBox";
import useCurrency from "./hooks/useCurrency";
import { useEffect } from "react";

function App() {
  const [to, setTo] = useState("inr");
  const [from, setFrom] = useState("usd");
  const [amount, setAmount] = useState(1);
  const [convertedAmount, setConvertedAmount] = useState(0);
  const amountDisabled = true;

  const currencyData = useCurrency(from);
  const options = Object.keys(currencyData);

  const convert = () => {
    setConvertedAmount(Math.round(amount * currencyData[to] * 100)/100);
  };

  useEffect(() => {
    convert();
  }, [to, currencyData, amount])

  const swap = () => {
    setTo(from);
    setFrom(to);
    setAmount(convertedAmount);
    setConvertedAmount(amount);
  }

  return (
    <>
      <div className="max-w-screen-lg h-96 mt-16  mx-auto bg-gray-300 rounded-lg">
        <h1 className="text-center p-4 text-4xl font-mono font-extrabold text-green-900">CURRENCY CONVERTER</h1>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            convert();
          }}
          className="flex flex-col justify-around"
        >
          <InputBox
            label="From"
            selectedCurrency={from}
            amount={amount}
            currencyOptions={options}
            onCurrencyChange={(currency) => setFrom(currency)}
            onAmountChange={(amount) => setAmount(amount)}
          />
          <InputBox
            label="to"
            selectedCurrency={to}
            amount={convertedAmount}
            currencyOptions={options}
            onCurrencyChange={(currency) => setTo(currency)}
            amountDisabled
          />
          <button
            type="submit"
            className="w-48 h-12 rounded-lg p-2 text-white mx-auto mt-6 bg-gray-800"
          >
            
            Convert {from.toUpperCase()} to {to.toUpperCase()}
          </button>
          <button onClick={swap} className="mt-6 bg-gray-500 w-16 mx-auto h-10 rounded-lg font-semibold ">Swap</button>
        </form>
      </div>
    </>
  );
}

export default App;
