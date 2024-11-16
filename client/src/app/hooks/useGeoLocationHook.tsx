'use client'
import { useState, useEffect } from 'react';

interface Coords {
    latitude: number;
    longitude: number;
}

interface GeoLocationData {
    results: Array<{
        annotations: { callingcode: number };
        components: { state_code: string; state: string; city: string };
    }>;
}

const useGeoLocalization = () => {
    const [userCoord, setUserCoord] = useState<Coords | null>(null);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);
    const locationData = localStorage.getItem('locationData');

    const [locationDetails, setLocationDetails] = useState<{
        callingCode: number | null;
        stateCode: string | null;
        state: string | null;
        city: string | null;
    }>({ callingCode: null, stateCode: null, state: null, city: null });

    useEffect(() => {
        const checkExpiration = (expires: number) => {
            const currentTime = new Date().getTime();
            return currentTime > expires;
        };

        if (locationData) {
            const parsedData = JSON.parse(locationData);
            if (checkExpiration(parsedData.expires)) {
                localStorage.removeItem('locationData');
            } else {
                setLocationDetails(parsedData.location);
                setLoading(false);
                return;
            }
        }

        // Se o localStorage está vazio ou os dados expiraram, fazer a solicitação de geolocalização
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(
                async (position) => {
                    const latitude = position.coords.latitude;
                    const longitude = position.coords.longitude;
                    const apiKey = "0df4233f471041ec8b562c507691e1ea";
                    setUserCoord({ latitude, longitude });
                    setLoading(true); // Set loading to true before making the request
                    console.log(`Latitude: ${latitude}, Longitude: ${longitude}`);

                    try {
                        const response = await fetch(`https://api.opencagedata.com/geocode/v1/json?q=${latitude}+${longitude}&key=${apiKey}`);

                        if (!response.ok) {
                            throw new Error('Erro na resposta da API');
                        }
                        const data: GeoLocationData = await response.json();
                        const result = data.results[0];
                        const location = {
                            callingCode: result.annotations.callingcode,
                            stateCode: result.components.state_code,
                            state: result.components.state,
                            city: result.components.city,
                        };
                        setLocationDetails(location);
                        const locationData = {
                            expires: new Date().getTime() + 24 * 60 * 60 * 1000,
                            location: location
                        };
                        localStorage.setItem('locationData', JSON.stringify(locationData));

                        setLoading(false); // Set loading to false after the request is complete

                    } catch (err) {
                        setError("Erro ao obter localização: " + (err as Error).message);
                        setLoading(false);
                    }
                },
                (err) => {
                    setError("Erro ao obter localização: " + err.message);
                    setLoading(false);
                }
            );
        } else {
            setError("Geolocalização não é suportada por este navegador.");
            setLoading(false);
        }
    }, []);

    return { userCoord, locationDetails, loading, error };
};

export default useGeoLocalization;
