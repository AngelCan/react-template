import React from 'react'
import Header from './Header.jsx'
import Addbutton from './addButton.jsx'
import ListProducts from './ListProducts'
import {Modal} from 'react-bulma-components'
import Form from './Form.jsx'

const ProductLayout = ()=> {
    const [isModalOpen,setIsModalOpen] = React.useState(false)
    return(
    // Aqui se esta utilizando React Fragment para que no genere problemas los chilldren
        <>
        <ListProducts/>
        <Header title = "Welcome to api product"/>
        <Addbutton onClick={()=>setIsModalOpen(true)} />

        <Modal show={isModalOpen} onClose={()=> setIsModalOpen(false)}>
        <Modal.Card>
            <Modal.Card.Head>Form</Modal.Card.Head>
            <Modal.Card.Body>
                <Form/>
            </Modal.Card.Body>
        </Modal.Card>
        </Modal>
        </>
    )}

export default ProductLayout