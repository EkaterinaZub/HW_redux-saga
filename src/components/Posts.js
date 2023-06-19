import { Fragment, useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { getPostsFetch,deletePostsFetch } from "../redux/postsSlice"

export const Posts=()=>{
    const{posts, isLoading, error} = useSelector(state => state.posts)
    const dispatch = useDispatch()

    useEffect(()=>{
        dispatch(getPostsFetch())
    },[dispatch])

    

    if(isLoading){
        return <div style={{color: 'green', fontSize: '30px'}}>Loading...</div>
    }

    // if(error) {
    //     return <div style={{color: 'red'}}>{error}</div>
    // }


    return (
        <Fragment>
        <h1>POSTS</h1>
        <div>
        {posts.map(post => {
                            return (
                                <div
                                    key={post.id}
                                    style={{background: 'beige', borderRadius: '10px'}}
                                    onClick = {()=>dispatch(deletePostsFetch(post.id))}
                                >
                                
                                    <h3>{post.title}</h3>
                                    <p>{post.body}</p>

                                </div>
                            )
                        })}
        </div>

        </Fragment>
    )
}