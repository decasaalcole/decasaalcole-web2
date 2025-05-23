import './Results.css';
import { School } from '../types/types';
import { CardSchool } from './CardSchool';
import noResults from '../assets/icons/no_results.svg';
import { DownloadBtn } from './DownloadBtn';

export function Results({ schools }: { schools: School[] }) {
    return (
        <>
        <div className="results">            
            <h2>Listado de colegios ordenados</h2>
            <div className="total">{schools.length} colegios encontrados</div>
            {schools.length === 0 ? (
                <div className="no-results">
                    <img src={noResults} alt="" />
                    <p>No se han encontrado colegios con los criterios seleccionados</p>
                </div>
            ) : (
                
                schools.map((school) => (
                    <CardSchool key={school.Codigo} school={school} />
                ))
            )}
            {schools.length > 0 && (
                <div className="results-footer">
                    <DownloadBtn />
                </div>
            )}
        </div>
        </>
    )
}