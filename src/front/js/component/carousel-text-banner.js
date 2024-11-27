import React from 'react';
import { Carousel } from 'react-bootstrap';

const CarouselTextBanner = () => {
    return (
        <Carousel interval={2000} className="carousel-banner">
            <Carousel.Item>
                <div style={{
                    height: '70px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    textAlign: 'center',
                    padding: '0 15px',
                    backgroundColor: '#e9ecef'
                }}>
                    <p>
                        <i className="fas fa-truck" style={{ marginRight: '10px' }}></i>
                        Envío en <strong>24/48 h</strong>
                        <br />
                        Como cliente VIP, tus envíos en 24/48 horas. Obtén más información y únete.
                    </p>
                </div>
            </Carousel.Item>

            <Carousel.Item>
                <div style={{
                    height: '70px',
                    overflow: 'hidden',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    textAlign: 'center',
                    padding: '0 10px',
                    backgroundColor: '#f8f9fa'
                }}>
                    <p>
                    <i className="fa-solid fa-dollar-sign" style={{ marginRight: '10px' }}></i>
                        Devoluciones y entregas <strong>gratuitas</strong>.
                        <br />
                        Como cliente, tienes envíos y devoluciones gratis en un plazo de 30 días en todos los pedidos.
                    </p>
                </div>
            </Carousel.Item>

            <Carousel.Item>
                <div style={{
                    height: '70px',
                    overflow: 'hidden',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    textAlign: 'center',
                    padding: '0 10px',
                    backgroundColor: '#e9ecef'
                }}>
                    <p>
                        Semana del <strong>Black Friday</strong>.
                        <br />
                        21 Noviembre - 2 Diciembre
                    </p>
                </div>
            </Carousel.Item>
        </Carousel>
    );
};

export default CarouselTextBanner;



