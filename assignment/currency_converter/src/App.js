// `https://api.frankfurter.app/latest?amount=100&from=EUR&to=USD`

import { useEffect, useState } from "react";

export default function App() {
  const [search, setSearch] = useState(1);
  const [fromCurrency, setFromCurrency] = useState("EUR");
  const [toCurrency, setToCurrency] = useState("USD");
  const [convertedCurrency, setConvertedCurrency] = useState(0);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(
    function () {
      async function fetchData() {
        setIsLoading(true);
        const res = await fetch(
          `https://api.frankfurter.app/latest?amount=${search}&from=${fromCurrency}&to=${toCurrency}`
        );
        const data = await res.json();

        setConvertedCurrency(data.rates[toCurrency]);
        setIsLoading(false);
      }
      if (toCurrency === fromCurrency) return setConvertedCurrency(search);
      fetchData();
    },
    [search, fromCurrency, toCurrency]
  );

  return (
    <div>
      <input
        type="text"
        value={search}
        onChange={(e) => setSearch(Number(e.target.value))}
      />
      <select
        value={fromCurrency}
        onChange={(e) => setFromCurrency(e.target.value)}
        disabled={isLoading}
      >
        <option value="USD">USD</option>
        <option value="EUR">EUR</option>
        <option value="CAD">CAD</option>
        <option value="INR">INR</option>
      </select>
      <select
        value={toCurrency}
        onChange={(e) => setToCurrency(e.target.value)}
        disabled={isLoading}
      >
        <option value="USD">USD</option>
        <option value="EUR">EUR</option>
        <option value="CAD">CAD</option>
        <option value="INR">INR</option>
      </select>
      <p>OUTPUT {isLoading ? "Loading... " : convertedCurrency}</p>
    </div>
  );
}
