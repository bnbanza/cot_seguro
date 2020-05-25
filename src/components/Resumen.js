import React from 'react';
import PropTypes from 'prop-types';
import {primerMayuscula} from '../helper';
import styled from '@emotion/styled';


const ContenedorResumen = styled.div`
    padding: 1rem;
    text-align: center;
    background-color: #00838F;
    color: #ffff;
    margin-top: 1rem;
`;

const Resumen = ({datos}) => {

    //extraer de datos
    const {marca, year, plan} = datos;
    
    if(marca === '' || year === '' || plan === '') return null;

    return ( 

        <ContenedorResumen>
            <h2>Resumen de cotizacion</h2>
            <ul>
                <li>Marca: {primerMayuscula(marca)} </li>
                <li>Plan: {primerMayuscula(plan)} </li>
                <li>Año del automovil: {year} </li>
            </ul>
        </ContenedorResumen>
     );
}
 
Resumen.propTypes = {
    datos: PropTypes.object.isRequired
}
export default Resumen;