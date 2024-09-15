import React from 'react'
import { useEffect, useState } from 'react';
import useGeoLocalization from '@/app/hooks/useGeoLocationHook';

const GeoLocalization = () => {
  const { userCoord, locationDetails, error } = useGeoLocalization();
  const [selectedState, setSelectedState] = useState<string>("");

  useEffect(() => {
    if (locationDetails.stateCode) {
      setSelectedState(locationDetails.stateCode);
    }
  }, [locationDetails.stateCode]);

  const handleSelectStateChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedState(event.target.value);
  }

  return (
    <div className="flex py-[0.3em] px-0 rounded-sm bg-gray-100 cursor-pointer text-black font-normal shadow focus:ring-rose-600 focus:border-rose-600">
    <select name="state" id="state" className="bg-transparent px-2" value={selectedState} onChange={handleSelectStateChange}>
      <option value="AC">AC</option>
      <option value="AL">AL</option>
      <option value="AP">AP</option>
      <option value="AM">AM</option>
      <option value="BA">BA</option>
      <option value="CE">CE</option>
      <option value="DF">DF</option>
      <option value="ES">ES</option>
      <option value="GO">GO</option>
      <option value="MA">MA</option>
      <option value="MT">MT</option>
      <option value="MS">MS</option>
      <option value="MG">MG</option>
      <option value="PA">PA</option>
      <option value="PB">PB</option>
      <option value="PR">PR</option>
      <option value="PE">PE</option>
      <option value="PI">PI</option>
      <option value="RJ">RJ</option>
      <option value="RN">RN</option>
      <option value="RS">RS</option>
      <option value="RO">RO</option>
      <option value="RR">RR</option>
      <option value="SC">SC</option>
      <option value="SP">SP</option>
      <option value="SE">SE</option>
      <option value="TO">TO</option>
    </select>
  </div>
  )
}

export default GeoLocalization