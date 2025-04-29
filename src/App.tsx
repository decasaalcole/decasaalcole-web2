import { Header } from './components/Header.tsx'
import { Finder } from './components/Finder.tsx'
import { Results } from './components/Results.tsx'
import { useEffect, useState } from 'react';
import { SchoolRegimen, SchoolType, School, SchoolDayType, Province } from './types/types.ts';
import rawSchools from './assets/data/schools.json';
import { filterSchoolsByRegimen, filterSchoolsByZipCode } from './helpers/school.helper.ts';

function App() {
  const [zipCode, setZipCode] = useState(46113);
  const [regimens, setRegimen] = useState([SchoolRegimen.Public]);
  const [types, setType] = useState([SchoolType.Infantil]);
  const [schools, setSchools] = useState<School[]>([]);
  const [dayTypes, setDayTypes] = useState([SchoolDayType.Intensive, SchoolDayType.Splitted]);
  const [province, setProvince] = useState([Province.Castellon, Province.Valencia, Province.Alicante]);

  useEffect(() => {
    const filteredSchoolsByZipCode = filterSchoolsByZipCode(rawSchools as School[], zipCode);
    console.log('filteredSchoolsByZipCode', filteredSchoolsByZipCode);
    const filteredSchoolsByRegimen = filterSchoolsByRegimen(filteredSchoolsByZipCode, regimens);
    console.log('filteredSchoolsByRegimen', filteredSchoolsByRegimen);
    setSchools(filteredSchoolsByRegimen);
  }, [regimens, zipCode]);

  const handleRegimenChange = (value: SchoolRegimen) => {
    console.log('value', value);
    if (regimens.includes(value)) {
      setRegimen(prev => prev.filter(regimen => regimen !== value));
    } else {
      setRegimen(prev => [...prev, value]);
    }
    if (regimens.length === 0) {
      setRegimen([SchoolRegimen.Public, SchoolRegimen.Private, SchoolRegimen.PrivateConc]);
    }
  }

  const handleTypeChange = (value: SchoolType) => {
    if (types.includes(value)) {
      setType(prev => prev.filter(type => type !== value));
    } else {
      setType(prev => [...prev, value]);
    }
    if (types.length === 0) {
      setType([SchoolType.Primaria]);
    }
  }

  const handleDayTypesChange = (value: SchoolDayType) => {
    if (dayTypes.includes(value)) {
      setDayTypes(prev => prev.filter(dayType => dayType !== value));
    } else {
      setDayTypes(prev => [...prev, value]);
    }
    if (dayTypes.length === 0) {
      setDayTypes([SchoolDayType.Intensive, SchoolDayType.Splitted]);
    }
  }

  const handleProvinceChange = (value: Province) => {
    if (province.includes(value)) {
      setProvince(prev => prev.filter(prov => prov !== value));
    } else {
      setProvince(prev => [...prev, value]);
    }
  }

  if (regimens.length === 0) {
    setRegimen([SchoolRegimen.Public, SchoolRegimen.Private, SchoolRegimen.PrivateConc]);
  }
  if (types.length === 0) {
    setType([SchoolType.Primaria, SchoolType.Infantil, SchoolType.Especial, SchoolType.ESO, SchoolType.Bachillerato, SchoolType.FP, SchoolType.Adultos]);
  }

  if (dayTypes.length === 0) {
    setDayTypes([SchoolDayType.Intensive, SchoolDayType.Splitted]);
  }
  if (province.length === 0) {
    setProvince([Province.Castellon, Province.Valencia, Province.Alicante]);
  }

  return (
    <>
      <Header />
      <Finder 
        zipCode={zipCode} 
        setZipCode={setZipCode} 
        regimens={regimens} 
        setRegimen={handleRegimenChange} 
        types={types} 
        setType={handleTypeChange} 
        dayTypes={dayTypes}
        setDayTypes={handleDayTypesChange}
        province={province}
        setProvince={handleProvinceChange}
      />
      <Results schools={schools} />
    </>
  )
}

export default App
