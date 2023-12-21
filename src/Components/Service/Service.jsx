import React, { useState } from 'react'
import './service.scss'
import Modal from './Modal/Modal'
import { data } from '../../Assets/data/serviceData'

const Service = () => {

  const [ services ] = useState(data.services);

  const [single, setSingle] = useState();
  const [openModal, setOpenModal] = useState(false);

  const getSingleEl = el => {
    setOpenModal(true);
    setSingle(el);
  }

  return (
    <div className='service'>
      <div className='service-wrapper'>
        <h1>- Clients -</h1>
        <div className='cards'>
          {
            services.map((el) => (
              <div className='cards-services' key={el.id} onClick={() => getSingleEl(el)}>
                <img src={el.logo} alt={el.name} />
              </div>
            ))
          }
        </div>
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
  )
}

export default Service