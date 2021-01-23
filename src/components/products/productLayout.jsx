import React from 'react'
import Header from './Header.jsx'
import Addbutton from './addButton.jsx'
import ListProducts from './ListProducts'

const ProductLayout = ()=> (
    // Aqui se esta utilizando React Fragment para que no genere problemas los chilldren
    <>
    <ListProducts/>
    <Header title = "Welcome to api product"/>
    <Addbutton/>
    </>
)

export default ProductLayout