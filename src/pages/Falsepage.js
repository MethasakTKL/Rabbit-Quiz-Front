import React from 'react'
import './Falsepage.css'
import Error from '../Static/image/rabbiterror.png'

function Falsepage() {
  return (
    <div> 
        <br/>
        <img className='pic' alt="rabbitfalse" src={Error} width={'25%'}/>
        <div className='body'>ขออภัย ไม่พบหน้าที่คุณกำลังค้นหา</div>
    </div>
  )
}

export default Falsepage;