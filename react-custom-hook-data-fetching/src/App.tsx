import { useState, useEffect } from "react";

import "./App.css";

interface Country {
  name: {
    common: string;
    official: string;
    nativeName: {
      [key: string]: {
        official: string;
        common: string;
      };
    };
  };
}
export default function App() {
  const { data, isLoading, error } = useFetchCountries();
  return (
    <>
      <div>Countries</div>
      {isLoading && <div>Loading...</div>}
      {error && <div>Error: {error}</div>}
      {data && <CountryList countries={data} />}
    </>
  );
}

function CountryList({ countries }: { countries: Country[] }) {
  return (
    <ul>
      {countries &&
        countries.map((country) => (
          <li key={country.name.common}>{country.name.common}</li>
        ))}
    </ul>
  );
}

function useFetchCountries(): {
  data: Country[];
  isLoading: boolean;
  error: string | null;
} {
  const [data, setData] = useState<Country[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function fetchData() {
      try {
        setIsLoading(true);
        const response = await fetch(
          "https://restcountries.com/v3.1/all?fields=name"
        );
        if (!response.ok) {
          setError(`HTTP error! status: ${response.status}`);
          return;
        }
        const data = await response.json();
        if (!data) {
          setError("No data received");
          return;
        }
        setData(data);
      } catch (error) {
        if (error instanceof Error) {
          // Log the error to an external service
          console.error("Error caught:", error);
          // Set a user-friendly error message
          setError(`An unexpected error occurred: ${error.message}`);
        } else {
          // Handle non-Error objects
          setError("An unexpected error occurred.");
        }
      } finally {
        setIsLoading(false);
      }
    }
    fetchData();
  }, []);

  return { data, isLoading, error };
}
