import { buildAddress } from "../helpers/school.helper";
import { School } from "../types/types";
import Home from '../assets/icons/home.svg';
import Phone from '../assets/icons/phone.svg';
import { CardBtn } from './CardBtn';
import './CardSchool.css';
export function CardSchool({ school }: { school: School }) {
    return (
        <div className="card-school">
            <div className="card-school-header">
                <p className="code">{school.Codigo}</p>
                <div className="distance">
                    <p className="time">20 min</p>
                    <p className="km">1 km</p>
                </div>
            </div>
            <div className="card-school-body">
                <p className="title">{school.Denominacion_Especifica}</p>
                <p className="subtitle">{school.Denominacion_Generica_VAL}</p>
                <div className="address">
                    <img src={Home} alt="Home" />
                    <p>{buildAddress(school)}</p>
                </div>
                <div className="phone">
                    <img src={Phone} alt="Phone" />
                    <p>{school.Telefono}</p>
                </div>
            </div>
            <div className="card-school-footer">
                <CardBtn text="Llamar" action={() => {}} />
                <CardBtn text="Localizar" action={() => {}} />
                <CardBtn text="Más Info" action={() => {}} />
            </div>
        </div>
    )
}