import { useEffect, useState } from 'react';
import { getGeoLocationData } from './getGeoLocalizationData';

interface Coords {
  latitude: number;
  longitude: number;
}

interface LocationDetails {
  callingCode: number | null;
  stateCode: string | null;
  state: string | null;
  city: string | null;
}
/**
 * Hook for fetching geolocation and location details.
 * Custom hook for obtaining user's geolocation.
 *
 * This hook utilizes the browser's geolocation API to fetch the user's current
 * position (latitude and longitude), makes a request to an external API to obtain
 * location details, and stores the information in `localStorage` with a 24-hour expiration time.
 *
 * @returns {Object} The object containing geolocation information.
 * @returns {Coords | null} userCoord - The user's coordinates (latitude and longitude).
 * @returns {LocationDetails} locationDetails - The location details including city, state, and country code.
 * @returns {boolean} loading - A flag indicating if the geolocation data is still being fetched.
 * @returns {string | null} error - An error message if an error occurs.
 *
 * @example
 * const { userCoord, locationDetails, loading, error } = useGeoLocalization();
 *
 * @returns {Object} The object containing user's coordinates, location details, loading, and error states.
 */
const useGeoLocalization = () => {
  const [userCoord, setUserCoord] = useState<Coords | null>(null);
  const [locationDetails, setLocationDetails] = useState<LocationDetails>({
    callingCode: null,
    stateCode: null,
    state: null,
    city: null,
  });
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const savedLocationData = localStorage.getItem('locationData');
    if (savedLocationData) {
      const parsedData = JSON.parse(savedLocationData);
      const expires = parsedData.expires || 0;
      if (new Date().getTime() < expires) {
        setLocationDetails(parsedData.location);
        setLoading(false);
        return;
      } else {
        localStorage.removeItem('locationData');
      }
    }

    // If no valid data in localStorage, fetch location data
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        async (position) => {
          const { latitude, longitude } = position.coords;
          setUserCoord({ latitude, longitude });

          try {
            const location = await getGeoLocationData(latitude, longitude);
            if (location) {
              setLocationDetails(location);

              const expires = new Date().getTime() + 24 * 60 * 60 * 1000; // Set expiration for 24 hours
              localStorage.setItem(
                'locationData',
                JSON.stringify({ location, expires })
              );
            } else {
              setError("Failed to fetch location data");
            }
            setLoading(false);
          } catch (err: unknown) {
            // Verifique se o erro é uma instância da classe Error
            if (err instanceof Error) {
              setError("Error fetching geolocation data: " + err.message);
            } else {
              setError("Unknown error occurred");
            }
            setLoading(false);
          }
        },
        (err) => {
          if (err instanceof Error) {
            setError("Error obtaining geolocation: " + err.message);
          } else {
            setError("Unknown error occurred");
          }
          setLoading(false);
        }
      );
    } else {
      setError("Geolocation is not supported by this browser.");
      setLoading(false);
    }
  }, []);


  return { userCoord, locationDetails, loading, error };
};

export default useGeoLocalization;
