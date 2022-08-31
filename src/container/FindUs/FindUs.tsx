import React from 'react';

import mapLogo from '../../assets/map_logo.svg';
import './findUs.css';

const FindUs = () => {
  return (
    <div className='findUs'>
        <div className='findUs__container section__padding'>           
            <div className='findUs__map'>
                <iframe title='maps' width="520" height="400" frameBorder="0" id="gmap_canvas" src="https://maps.google.com/maps?width=520&amp;height=400&amp;hl=en&amp;q=%20+(estatua%20de%20la%20libertad)&amp;t=&amp;z=13&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"></iframe>
            </div>
            <div className='findUs__content'>
                <span className='about__desc-title'>
                    <h2 className='p__title'>Encuéntranos</h2>
                    <img src={mapLogo} alt="mapLogo" />
                </span>
                <div className='app__wrapper-content'>
                    <p className='p__text'>Estamos localizados en:</p>
                    <p className='p__text'>Cordova, Av. Simon Bolivar y Sudamerica</p>
                    <p className='p__text' style={{marginTop: '2rem', fontWeight: '700'}}>Horario de atención</p>
                    <p className='p__text'>Lun - Vie: 14:00 - 23:00</p>
                    <p className='p__text'>Sab y Dom: 17:00 - 01:00</p>
                </div>
            </div>
        </div>

    </div>
  )
}

export default FindUs