import { useState, useEffect } from 'react';

interface Coords {
    latitude: number;
    longitude: number;
}

interface GeoLocationData {
    results: any[]; // Defina o tipo apropriado conforme a resposta da API
}

const useGeoLocalization = () => {
    const [userCoord, setUserCoord] = useState<Coords | null>(null);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);
    const [userLocation, setUserLocation] = useState<GeoLocationData | null>(null);

    useEffect(() => {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(
                async (position) => {
                    const latitude = position.coords.latitude;
                    const longitude = position.coords.longitude;
                    const apiKey = "0df4233f471041ec8b562c507691e1ea";
                    setUserCoord({ latitude, longitude });
                    setLoading(false);
                    console.log(`Latitude: ${latitude}, Longitude: ${longitude}`);

                    try {
                        const response = await fetch(`https://api.opencagedata.com/geocode/v1/json?q=${latitude}+${longitude}&key=${apiKey}`);
                        
                        if (!response.ok) {
                            throw new Error('Erro na resposta da API');
                        }
                        const data: GeoLocationData = await response.json();
                        setUserLocation(data);
                        console.log(data);                      
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

    return { userCoord, userLocation, loading, error };
};

export default useGeoLocalization;
