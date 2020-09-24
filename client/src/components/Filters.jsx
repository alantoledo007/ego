//General
import React from 'react';
import {Link} from 'react-router-dom';

//components

//UI
import s from '../styles/filters.module.scss';

//code..
function Filters(){

    return(
        <div className={s['filter-nav']}>
            <span className={s['filter-title']}>
                Filtrar por
            </span>
            <Link to="#" className={s['filter-badge']}>
                Todos
            </Link>
            <Link to="#" className={s['filter-badge']}>
                Autos
            </Link>
            <Link to="#" className={s['filter-badge']}>
                Pickups y Comerciales
            </Link>
            <Link to="#" className={s['filter-badge']}>
                SUVs y Crossovers
            </Link>
            <Link to="#" className={s['filter-title'] + ' ' + s['filter-title-right']}>
                Ordernar por
                <img src="img/fill-1.svg"
                    className={s['Fill-1']} />
            </Link>
        </div>
    );
}

export default Filters;