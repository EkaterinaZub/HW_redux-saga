import { takeEvery, call, put } from 'redux-saga/effects'
import { getCatsFailure, getCatsSuccess } from './catsSlice'
import { getPostsSuccess, getPostsFailure } from './postsSlice'
import { setPostsSuccess, setPostsFailure } from './postsSlice'
import { deletePostsSuccess, deletePostsFailure } from './postsSlice'


// function* workGetCatsFetch() {
//     try {
//         const response = yield call(() => 
//         fetch('https://api.thecatapi.com/v1/images/search?limit=10')

//         )
//         const data = yield response.json()
//         yield put(getCatsSuccess(data))


//     } catch (error) {
//         yield put(getCatsFailure(error.message))

//     }

// }

function* workGetPostsFetch() {
    try {
        const response = yield call(() =>
            fetch('https://jsonplaceholder.typicode.com/posts?_start=0&_limit=5')

        )
        const data = yield response.json()
        yield put(getPostsSuccess(data))


    } catch (error) {
        yield put(getPostsFailure(error.message))

    }
}

function* workSetPostsFetch(action) {

    const { title, body, userId, id } = action.payload
    try {
        const response = yield call(() =>
            fetch('https://jsonplaceholder.typicode.com/posts', {
                method: 'POST',
                body: JSON.stringify({
                    title,
                    body,
                    userId,
                    id,
                }),
                headers: {
                    'Content-type': 'application/json; charset=UTF-8',
                },
            })

        )
        const data = yield response.json()
        yield put(setPostsSuccess(data))


    } catch (error) {
        yield put(setPostsFailure(error.message))

    }
}

function* workDeletePostsFetch(action) {
   
    
    try {
         yield call((id) =>
        fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)

        )
        
        yield put(deletePostsSuccess(action.payload))


    } catch (error) {
        yield put(deletePostsFailure(error.message))

    }
}



function* rootSaga() {
    // yield takeEvery('cats/getCatsFetch', workGetCatsFetch)
    yield takeEvery('posts/getPostsFetch', workGetPostsFetch);
    yield takeEvery('posts/setPostsFetch', workSetPostsFetch);
    yield takeEvery('posts/deletePostsFetch', workDeletePostsFetch);
}

export default rootSaga