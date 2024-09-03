import Spinner from "./Spinner";
import styles from "./CountryList.module.css";
import CountryItem from "./CountryItem";
import Message from "./Message";
import { useCities } from "../context/CitiesContext";

function CountryList() {
  const { cities, isLoading } = useCities();

  if (isLoading) {
    return <Spinner />;
  }

  if (!cities.length) {
    return (
      <Message message="Add your first countries by clicking a countries on the map" />
    );
  }

  function getCountries(arr) {
    let unique = new Map();

    arr.forEach((city) => {
      unique.set(city.country, { country: city.country, emoji: city.emoji });
    });
    return Array.from(unique.values());
  }

  const countries = getCountries(cities);

  return (
    <ul className={styles.countriesList}>
      {countries.map((country) => (
        <CountryItem country={country} key={country.country} />
      ))}
    </ul>
  );
}

export default CountryList;
