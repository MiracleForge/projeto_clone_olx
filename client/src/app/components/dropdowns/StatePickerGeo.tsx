import React, { useEffect, useState } from 'react';
import useGeoLocalization from '@/app/hooks/useGeoLocalization';

/**
 * A dropdown component that allows users to select a state, with default selection based on the user's geolocation.
 *
 * This component uses the `useGeoLocalization` hook to fetch the user's location details, and if a state code is available,
 * it pre-selects the state in the dropdown. Users can change the selected state through the dropdown menu.
 * The selected state is stored in the component's state and updated when changed.
 *
 * @component
 * @example
 * return <StatePickerGeo />;
 *
 * @returns {JSX.Element} The `StatePickerGeo` component, which renders a select dropdown for state selection.
 */
const StatePickerGeo = () => {
  const { locationDetails, error, loading } = useGeoLocalization();
  const [selectedState, setSelectedState] = useState<string>("");

  useEffect(() => {
    if (locationDetails.stateCode) {
      setSelectedState(locationDetails.stateCode);
    }
  }, [locationDetails.stateCode]);

  const handleSelectStateChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedState(event.target.value);
  };

  return (
    <div className="flex py-[0.3em] px-0 rounded-sm bg-gray-100 cursor-pointer text-black font-normal shadow focus:ring-rose-600 focus:border-rose-600"
    itemScope
    itemProp="geo"
    itemType="http://schema.org/Place"
  >
    <label
      htmlFor="state"
      className="sr-only"
    >
      Estado
    </label>
      <select
        name="state"
        id="state"
        className="bg-transparent px-2"
        value={selectedState}
        onChange={handleSelectStateChange}
        aria-label="Selecionar Estado"
        itemProp="addressRegion"
      >
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
  );
};

export default StatePickerGeo;
