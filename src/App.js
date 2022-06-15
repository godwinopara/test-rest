import Sidebar from "./components/Sidebar";
import Table from "./components/Table";
import "./App.css";
import { useState, useEffect } from "react";

function App() {
  const [countryData, setCountryData] = useState([]);
  const [filterRegionData, setFilterRegionData] = useState([]);
  const [inputValue, setInputValue] = useState([]);

  useEffect(() => {
    getCountriesData();
    //eslint-disable-next-line
  }, []);

  // Fetch Data From The REST COUNTRIES API
  function getCountriesData() {
    fetch("https://restcountries.com/v2/all")
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        const countriesData = data.map((d) => {
          const { name, population, region, capital } = d;
          return { name, population, region, capital };
        });
        setCountryData(countriesData);
        setFilterRegionData(countriesData);
      });
  }

  // DISPLAY COUNTRIES BASED ON THEIR REGIONS WHEN EVER THE USER CLICK
  // ON A PARTICULAR REGION
  const handleClick = (e) => {
    const region = e.target.textContent;
    const filteredRegion = countryData.filter((country) => country.region === region);
    setFilterRegionData(filteredRegion);
  };

  // DISPLAY COUNTRIES BASED ON THE PARTICULAR COUNTRY THE USER IS SEARCH FOR
  const handleSubmit = (e) => {
    e.preventDefault();
    const search = inputValue.toLowerCase();
    const filteredCountry = countryData.filter((country) => country.name.toLowerCase().includes(search));
    setFilterRegionData(filteredCountry);
  };

  // HANDLE USER'S SEARCH INPUT
  const handleOnChange = (e) => {
    setInputValue(e.target.value);
  };

  return (
    <div className="App">
      <Sidebar onClick={handleClick} onSubmit={handleSubmit} onChange={handleOnChange} value={inputValue} />
      <Table data={filterRegionData} />
    </div>
  );
}

export default App;

