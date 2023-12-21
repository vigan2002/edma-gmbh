import React, { useState } from 'react'
import './home.scss'
import { NavLink } from 'react-router-dom'
import bck from '../../Assets/bck/bck.jpg'
import cube from '../../Assets/cube.jpg'
import card1 from '../../Assets/card1.png'
import card2 from '../../Assets/card2.png'
import card3 from '../../Assets/card3.png'
import { data } from '../../Assets/data/serviceData'
import Modal from '../Service/Modal/Modal'

const Home = () => {

    const [services] = useState(data.services);

    const [single, setSingle] = useState();
    const [openModal, setOpenModal] = useState(false);

    const getSingleEl = el => {
        setOpenModal(true);
        setSingle(el);
    }

    return (
        <div className='home'>
            <img src={bck} alt="" className='bck-img' />
            <div className='home-wrapper'>
                <div className='about-home'>
                    <div className='about-left'>
                        <h1>- ÜBER UNS</h1>
                        <h2>EDMA ist ein Beratungs- und Bauingenieurunternehmen, das auf
                            <br /> die Planung, Überwachung und den Bau öffentlicher und privater
                            <br /> Projekte spezialisiert ist.</h2>
                        <p>Es wurde im Jahr 2010 von einem Team von Ingenieurexperten gegründet
                            <br /> und hat über einen Zeitraum von mehr als einem Jahrzehnt mehr als 400
                            <br /> Projekte mit unterschiedlichem Fachwissen im Bereich Bauingenieurwesen
                            <br /> und Beratung abgeschlossen. Wir sind bestrebt, unsere Projekte an die
                            <br /> neuesten Entwicklungen anzupassen und die Spitzentechnologie zu nutzen,
                            <br /> wobei wir uns stets auf die Wünsche des Kunden konzentrieren, die wir als
                            <br /> Schlüssel zum Erfolg betrachten. Unser Ziel ist es, unsere Projekte mit hoher
                            <br /> Qualität, Funktionalität, Ästhetik und Gebrauchstauglichkeit zu entwickeln,
                            <br /> indem wir Ideen und Ratschläge dazu liefern, wie der Raum aussehen wird, in
                            <br /> dem Sie leben, arbeiten oder entspannen</p>
                        <NavLink to="/uber-uns"><button>MEHR ...</button></NavLink>
                    </div>
                    <div className='about-right'>
                        <img src={cube} alt="" />
                    </div>
                </div>
                <div className='specilization'>
                    <h2>WHAT WE DO</h2>
                    <h1>Our specilization</h1>
                    <div className='cards'>
                        <div>
                            <img src={card1} alt="" />
                            <h3>ARCHITECTURE & INFRASTRUCTURE</h3>
                            <p>We are keen to adapt our projects to the latest
                                <br /> developments and using the high-end technology
                                <br /> by always being focused in the clients requests,
                                <br /> which we consider the key to success.</p>
                        </div>
                        <div>
                            <img src={card2} alt="" />
                            <h3>ARCHITECTURE & INFRASTRUCTURE</h3>
                            <p>We are keen to adapt our projects to the latest
                                <br /> developments and using the high-end technology
                                <br /> by always being focused in the clients requests,
                                <br /> which we consider the key to success.</p>
                        </div>
                        <div>
                            <img src={card3} alt="" />
                            <h3>ARCHITECTURE & INFRASTRUCTURE</h3>
                            <p>We are keen to adapt our projects to the latest
                                <br /> developments and using the high-end technology
                                <br /> by always being focused in the clients requests,
                                <br /> which we consider the key to success.</p>
                        </div>
                    </div>
                </div>
                <div className='clients'>
                    <h2>AWESOME PARTNERS</h2>
                    <h1>Our Clients</h1>
                    <div className='cards'>
                        {
                            services.map((el) => (
                                <div className='cards-services' key={el.id} onClick={() => getSingleEl(el)}>
                                    <img src={el.logo} alt={el.name} />
                                </div>
                            ))
                        }
                    </div>
                    {
                        openModal && (
                            <Modal
                                logo={single.logo}
                                name={single.name}
                                desc={single.desc}
                                closeModal={() => setOpenModal(false)}
                            />
                        )
                    }
                </div>
            </div>
        </div>
    )
}

export default Home