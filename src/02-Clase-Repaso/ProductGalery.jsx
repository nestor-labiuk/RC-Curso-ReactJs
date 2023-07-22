import React from 'react';

import './styles/features.css';




export const ProductGalery = () => {
  return (
    <>
        <div className="container px-4 py-5" id="featured-3">
            <h2 className="pb-2 border-bottom text-white">MIS TAREAS</h2>
            <div className="row g-4 py-5 row-cols-1">
                <div className="feature col border-bottom pb-3">
                    <h5 className='text-warning'>Tarea N°: 1</h5>
                    <h3 className="fs-2 text-white">Featured title</h3>
                    <button type='button' className="btn btn-sm btn-outline-danger">
                    Eliminar
                    </button>
                </div>
                <div class="mb-3 col-5">
                    <input type="text" class="form-control"  placeholder="Agregar una tarea"/>
                </div>
                <div class="mb-3 col-5">
                    <button className='btn btn-success'>AGREGAR</button>
                </div>

            </div>
        </div>
        
    </>
  )
}
