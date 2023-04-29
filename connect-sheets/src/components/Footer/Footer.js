import React from 'react';
import './Footer.css';

const Footer = () => {
    return (
        <>
            <div className="footer">
                <div className="row">
                    <div className="col col-2 no-display-movil"></div>
                    <div className="col col-6">
                        <div className="footer-text text-note">
                            Yo Desarrollo se reserva el derecho de realizar modificaciones en los planos, diseños exteriores, precios, materiales, especificaciones, acabados y características en cualquier momento y sin previo aviso. Las fotografías e imágenes son solo un concepto ilustrativo.
                        </div>
                    </div>
                    <div className="col col-2 no-display-movil"></div>
                </div>
                <div className="row">
                    <div className="col col-10">
                        <a href="https://www.facebook.com/Yo-Desarrollo-103075448823440/" target="_blank" rel='noreferrer'>
                            <i className="fab fa-facebook-f"></i>
                        </a>
                        <a href="https://www.instagram.com/yodesarrollo" target="_blank" rel='noreferrer'>
                            <i className="fab fa-instagram"></i>
                        </a>
                        <a href="https://api.whatsapp.com/send?phone=5216623184512" target="_blank" rel='noreferrer'>
                            <i className="fab fa-whatsapp"></i>
                        </a>
                    </div>
                </div>
                <div className="row">
                    <div className="col col-10">
                        <div className="footer-text">
                            <p>Yodesarrollo.mx</p>
                            <p>Desarrollador por <a href="https://ramico.com.mx"><span className="ra">ra</span><span className="mi">mi</span><span className="co">co</span></a></p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Footer