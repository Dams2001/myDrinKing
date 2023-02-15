import React from 'react';

const ListaCategorias = ({ categorias, filtroCategoria }) => {
  return (
    <div className="categorias__container">
      {categorias &&
      categorias.map(categoria => (
          <button
          className='categorias__btn'
          onClick={() => filtroCategoria(categoria)}
          key={categoria}
          >{categoria}
          </button>
      ))}
    </div>
  )
}

export default ListaCategorias;