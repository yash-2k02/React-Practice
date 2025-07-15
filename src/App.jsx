import CountryCard from "./components/countrycard/CountryCard";
import styles from "./App.module.css";
import { useFetch } from "../useFetch";
import SearchBar from "./components/searchbar/SearchBar";
import { useEffect, useState } from "react";

const url = import.meta.env.VITE_COUNTRIES_API

const App = () => {
  const { apiData:countries, loading } = useFetch(url);
  const [filteredCountries, setFilteredCountries] = useState([]);
  const [searchText, setSearchText] = useState("");

  // console.log( typeof countries);
  // countries.map((c) => console.log(c.cca3))

  const handleSearch = (text) => {
    setSearchText(text);
  };

  useEffect(() => {
    const timeout = setTimeout(() => {
      if (searchText === "") {
        setFilteredCountries([]);
      } else {
        const filtered = countries.filter((country) =>
          country.name.common.toLowerCase().startsWith(searchText.toLowerCase())||
          country.region.toLowerCase().startsWith(searchText.toLowerCase())
        );
        setFilteredCountries(filtered);
      }
    }, 300);

    return () => clearTimeout(timeout);
  }, [searchText]);

  if (loading) return <p>Loading countries...</p>;
  const countriesToRender =
    searchText.trim() !== "" ? filteredCountries : countries;

  return (
    <>
      <SearchBar onSearch={handleSearch} />
      <div className={styles.container}>
        {countriesToRender.length === 0 ? (
          <p>No country found.</p>
        ) : (
          countriesToRender.map((country) => (
            <CountryCard key={country.cca3} country={country} />
          ))
        )}
      </div>
    </>
  );
};

export default App;
