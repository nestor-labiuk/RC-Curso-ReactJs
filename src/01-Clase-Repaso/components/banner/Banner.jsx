import React from 'react'

export const Banner = () => {
  return (
    <div>
        <div className='bg-white p-5 text-center'>
          <div style={{fontSize: '80px', fontWeight: 'bold'}}>Hey.. Developers!</div>
          <div style={{fontSize: '30px'}}>Los mejores Cursos para Desarrollo!</div>
          <div style={{ marginTop: '20px'}}>
            <button className='btn btn-primary'>Comprar Ahora!</button>
          </div>
        </div>
    </div>
  )
}
