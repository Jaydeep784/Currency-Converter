// import React from "react";

// const InputBox = ({
//   label,
//   onAmountChange,
//   onCurrencyChange,
//   currencyOption = [],
//   amountDisabled,
//   selectedCurrency,
//   amount,
// }) => {
//   return (
//     <div className="flex justify-between w-screen-lg h-30 mx-10 rounded-xl bg-white py-4 ">
//       <div className="flex flex-col">
//         <label className="px-6">{label}</label>
//         <input
//           className="outline-none px-6 mt-6"
//           type="number"
//           value={amount}
//           placeholder="0"
//           onChange={(e) => {
//             onAmountChange(e.target.value);
//           }}
//           disabled={amountDisabled}
//         />
//       </div>
//       <div className="flex flex-col mx-6">
//         <p>Currency Type</p>
//         <select
//           className="mt-6"
//           value={selectedCurrency} n
//           onChange={(e) => {
//             onCurrencyChange(e.target.value);
//           }}
//         >
//           {currencyOption.map((currency) => (
//             <option key={currency} value={currency}>
//               {currency}
//             </option>
//           ))}
//         </select>
//       </div>
//     </div>
//   );
// };

// export default InputBox;

import React from "react";

const InputBox = ({ label, amount, selectedCurrency, onCurrencyChange, onAmountChange, amountDisabled, currencyOptions = [] }) => {
  return (
    <div className="flex justify-between px-8 pt-4">
        
      <div className="flex flex-col">
        <label>{label}</label>
        <input type="Number" className="outline-none border-none mt-4 rounded-md pl-2 w-20 bg-slate-50" 
        onChange={(e) => {onAmountChange(e.target.value)}}
        value={amount}
        disabled ={ amountDisabled}
        />

      </div>
      <div className="flex flex-col">
        <label>Currency Type</label>
        <select className="mt-4 rounded-md pl-2"
        value={selectedCurrency}
            onChange={(e) => {onCurrencyChange(e.target.value)}}
        >
            {currencyOptions.map((currency) => (
                <option key={currency} value={currency}>{currency}</option>
            ))}
        </select>
      </div>
    </div>
  );
};

export default InputBox;
