import { createSlice } from "@reduxjs/toolkit";


const postsSlice = createSlice({
    name: 'posts',
    initialState: {
        posts: [],
        isLoading: 'false',
        error: 'false'
    },
    reducers: {
        getPostsFetch: (state) => {
            state.isLoading = true
        },
        getPostsSuccess: (state, action) => {
            state.isLoading = false
            state.posts = action.payload
        },
        getPostsFailure: (state, action) => {
            state.isLoading = false
            state.error = action.payload
        },
        setPostsFetch: (state) => {
            state.isLoading = true
        },
        setPostsSuccess: (state, action) => {
            state.isLoading = false
            state.posts.push(action.payload)
        },
        setPostsFailure: (state, action) => {
            state.isLoading = false
            state.error = action.payload
        },
        deletePostsFetch: (state) => {
            state.isLoading = true
        },
        deletePostsSuccess: (state, action) => {
            state.isLoading = false
            state.posts =state.posts.filter(post => post.id !== action.payload)
        },
        deletePostsFailure: (state, action) => {
            state.isLoading = false
            state.error = action.payload
        }

    }
})

export const {  getPostsFetch, getPostsSuccess, getPostsFailure, setPostsFetch, setPostsSuccess, setPostsFailure,deletePostsFetch, deletePostsSuccess,deletePostsFailure} = postsSlice.actions
export default postsSlice.reducer