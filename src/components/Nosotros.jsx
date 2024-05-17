import React, { useEffect } from 'react'

const Nosotros = () => {

  useEffect(() => {

    const clickear = () => {
      console.log("Click");
    }

    window.addEventListener("click", clickear)

    return () => {
      window.removeEventListener("click", clickear)
    }

  }, [])

  return (
    <div className="container">
        <h1 className="main-title">Mi tienda en linea</h1>
        <p>Mi Tienda en linea es mucho más que una tienda virtual. Es un cambio en la esencia de la manera de vender por internet. Nosotros podemos hacer llegar nuestros productos de la canasta familiar hasta tu hogar.

</p>
    </div>
  )
}

export default Nosotros