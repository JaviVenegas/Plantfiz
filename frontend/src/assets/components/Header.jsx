import React from 'react'

import Iportada from '../imgs/portada4.jpg';




export const Header = () => {
  return (
    <header>
    <div
        className="p-5 text-center bg-image"
        style={{
            backgroundImage: `url(${Iportada})`,
            height: '25rem',
            width: '100%',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            margin: '0'
        }}
    >
        <div
        >
            <div className="d-flex justify-content-left align-items-center h-100">
                <div className="verde">
                    <h1 className="mb-3">Plantiz</h1>
                    <h4 className="mb-3">¡Plantas que llenan de vida tu espacio!</h4>

                </div>
            </div>
        </div>
    </div>
</header>
  )
}

export default Header; 