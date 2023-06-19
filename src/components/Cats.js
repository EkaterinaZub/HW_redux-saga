import { Fragment, useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { getCatsFetch } from "../redux/catsSlice"

export const Cats=()=>{
    const{cats, isLoading, error} = useSelector(state => state.cats)
    const dispatch = useDispatch()

    useEffect(()=>{
        dispatch(getCatsFetch())
    },[dispatch])

    

    if(isLoading){
        return <div style={{color: 'green', fontSize: '30px'}}>Loading...</div>
    }

    // if(error) {
    //     return <div style={{color: 'red'}}>{error}</div>
    // }


    return (
        <Fragment>
        <h1>CAT SPECIES GALLERY</h1>
        <div>
            {
                cats.map(cat => {
                    return (
                        <div key = {cat.id}>
                            <img src={cat.url} width='200' height='200' alt="cats" />
                        </div>
                    )
                })
            }
        </div>

        </Fragment>
    )
}