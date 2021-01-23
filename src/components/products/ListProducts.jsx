import React,{useState} from 'react'
import Loading from "./Loading.jsx"
//Debido a que por defecto busca un .js colocamos solo el nombre de la carpeta y lo busca por nosotros
import {getProducts} from './services'

const ListProducts = () => {
    //Utilizamos "destructuring assignment"
    const [isLoading, setIsLoading] = useState(true)
    //const [products, setProducts] = useState([])

    React.useEffect(()=>{
        async function loadProducts(){
            const response = await getProducts()
            if(response.status === 200){
                console.log(response.data.items)
                //setProducts(response.data)
            }
        }
        loadProducts()
    },[])

    React.useEffect(()=>{
        const timeId = setInterval(()=>{
            console.log('useEffect')
            setIsLoading(false)
        },2000)
        return ()=> clearInterval(timeId)
    })

    React.useEffect(()=>{
        console.log('only once time')
        //[] funciona como un return para hacer le breack
    },[])

    return(
        isLoading
        ?<Loading/>
        :'show fetch response'
    )
}

export default ListProducts