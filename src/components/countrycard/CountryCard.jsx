import styles from "./CountryCard.module.css";
import LocationPinIcon from "@mui/icons-material/LocationOn";

const CountryCard = ({ country }) => {
  const { name, capital, region, population, flags } = country;

  return (
    <div className={styles.card}>
      <img
        src={flags.png}
        alt={`Flag of ${name.common}`}
        className={styles.image}
      />
      <div className={styles.titleBox}>
        <h3>{name.common}</h3>
        <p className={styles.flexbox}>
          <LocationPinIcon fontSize="small" />
          {region}
        </p>
      </div>
      <p>
        <strong>Capital:</strong> {capital?.[0] || "N/A"}
      </p>
      <p>
        <strong>Population:</strong> {population.toLocaleString()}
      </p>
    </div>
  );
};

export default CountryCard;
