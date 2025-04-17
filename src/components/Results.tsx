import './Results.css';
import { School } from '../types/types';
import { CardSchool } from './CardSchool';

export function Results({ schools }: { schools: School[] }) {
    return (
        <>
        <div className="results">            
            <h2>Listado de colegios ordenados</h2>
            {schools.map((school) => (
                <CardSchool key={school.Codigo} school={school} />
            ))}
        </div>
        </>
    )
}