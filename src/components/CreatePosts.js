import { useState } from "react"
import {v4 as uuidv4} from 'uuid';
import { setPostsFetch} from "../redux/postsSlice";
import { useDispatch } from "react-redux";

export const CreatePost = () => {
    const [title, setTitle] = useState('')
    const [body, setBody] = useState('')
    const dispatch = useDispatch()

    const savePost =()=> {
        dispatch(setPostsFetch( {
            title: title,
            body: body,
            userId: uuidv4(),
            id: uuidv4()
        }))
       
       
    }
    return (
        <div>
            <input
                type='text'
                placeholder='title'
                value={title}
                onChange={(e) => setTitle(e.target.value)}
            />

            <input
                type='text'
                placeholder='body'
                value={body}
                onChange={(e) => setBody(e.target.value)}
            />

            <button onClick={savePost}>Add</button>

        </div>
    )
}