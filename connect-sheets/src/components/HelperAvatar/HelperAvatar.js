import React, { useState } from 'react'
import * as myConst from '../../constants.js';
import './HelperAvatar.css';

export default function HelperAvatar(props) {
    console.log(props)
    const [displayBox,setDisplayBox] = useState(false);

    return (
        <>
            {displayBox &&
                <div className='helperFrame'>
                    <div className='card'>
                        <div className='title'>
                            Hola soy tu asesor
                            <span onClick={() => setDisplayBox(false)}>
                                <i className="fas fa-times"></i>
                            </span>
                        </div>
                        <div className='body'>
                            <div className='col col-2 avatarProfile'>
                                <img src={props.avatar?.img? props.avatar.img : "https://ramico.com.mx/img/logo.png"} alt='Avatar' />
                            </div>
                            <div className='col col-2-reverse message'>
                                <div className='msg'>
                                    <div className='msgBox'>
                                        {props.avatar.text? props.avatar.text : "¡Hola! Cuentame en que te puedo servir en cualquiera de nuestras formasde comunicación."}
                                    </div>
                                    <div className='col col-5'>
                                        <a href='https://api.whatsapp.com/send?phone=5216623184512' target="_blank" className="whatsappButton"><i className="fab fa-whatsapp"></i>WhatsApp</a>
                                    </div>
                                    <div className='col col-5'>
                                        <a href='https://m.me/103075448823440/' target="_blank" className="messenger"><i className="fab fa-facebook-messenger"></i>Messenger</a>
                                    </div>
                                    <div className='col col-5'>
                                        <a href='mailto:gabriel.morett@yodesarrollo.mx' target="_blank" className="email"><i className="far fa-envelope"></i>Email</a>
                                    </div>
                                    <div className='col col-5'>
                                        <a href='tel:5216623184512' target="_blank" className="phone"><i className="fas fa-phone"></i>Llamada</a>
                                    </div>
                                    <div className='col col-12'>
                                        <a href='#' target="_blank" className="calendar"><i className="fas fa-calendar"></i>Agendar cita</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>        
                </div>
            }
            <div className='helper'>
                <div className='avatar' onClick={() => setDisplayBox(true)}>
                    <img src={props.avatar?.img? props.avatar.img : "https://ramico.com.mx/img/logo.png"} alt="Avatar" />
                </div>
            </div>
        </>
    )
}
