import { 
    FETCH_VIDEOS_ERROR, 
    LOAD_VIDEOS, 
    LIST_VIDEOS, 
    DELETE_ONE_VIDEO, 
    LIKE_VIDEOS,
    DISLIKE_VIDEO,
    FILTER_CATEGORY
} from '../constants'
import { movies$ } from '../../ArrayMovies/movies'

const loadingVideos = () => {
    return {
        type: LOAD_VIDEOS
    }
} 
const listVideos = data => {
    return {
        type: LIST_VIDEOS,
        payload: data
    }
}

const fetchVideosError = error => {
    return {
        type: FETCH_VIDEOS_ERROR,
        payload: error
    }
}

export const deleteVideo = id => {
    return {
        type: DELETE_ONE_VIDEO,
        payload: id
    }
}

export const likeVideo = id => {
    return {
        type: LIKE_VIDEOS,
        payload: id
    }
}
export const disLikeVideo = id => {
    return {
        type: DISLIKE_VIDEO,
        payload: id
    }
}
export const filterCategory = param => {
    return {
        type: FILTER_CATEGORY,
        payload: param
    }
}

export const fetchVideos = () => {
    return dispatch => {
        dispatch(loadingVideos())
        movies$
        .then ( res => {
            dispatch(listVideos(res))
        })
        .catch( error => {
            dispatch(fetchVideosError(error.message))
        })
    }
}