import React,{useState} from 'react'
import Loading from "./Loading.jsx"
//Debido a que por defecto busca un .js colocamos solo el nombre de la carpeta y lo busca por nosotros
import {getProducts} from './services'


const ListProducts = () => {
    //Utilizamos "destructuring assignment"
    const [isLoading, setIsLoading] = useState(true)
    const [products, setProducts] = useState([])

    React.useEffect(()=>{
        async function loadProducts(){
            const response = await getProducts()
            if(response.status === 200){
                console.log(response.data.items)
                setProducts(response.data.items)
            }
            setIsLoading(false)
        }
        loadProducts()
        //[] funciona como un return para hacer le breack
    },[])

    if(isLoading){
        return <Loading/>
    }
    //Su equivalente sería: if(!products.length)
    if(products.length === 0){
        return <h2 className="tittle has-text-centered">There is no products yet</h2>
    }

    return(
        'show fetch response'
    )
}

export default ListProducts