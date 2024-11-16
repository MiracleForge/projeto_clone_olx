// hooks/getGeoLocationData.ts (Server-Side Hook)
export async function getGeoLocationData(latitude: number, longitude: number) {
    const apiKey = '0df4233f471041ec8b562c507691e1ea';

    try {
        const response = await fetch(`https://api.opencagedata.com/geocode/v1/json?q=${latitude}+${longitude}&key=${apiKey}`);
        if (!response.ok) throw new Error('Failed to fetch geolocation data');
        const data = await response.json();
        const { annotations, components } = data.results[0];
        return {
            callingCode: annotations.callingcode,
            stateCode: components.state_code,
            state: components.state,
            city: components.city,
        };
    } catch (error) {
        console.error('Error fetching geolocation:', error);
        return null;
    }
}
