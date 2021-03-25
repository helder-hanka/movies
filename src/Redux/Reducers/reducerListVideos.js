import { 
    FETCH_VIDEOS_ERROR, 
    LOAD_VIDEOS, 
    LIST_VIDEOS, 
    DELETE_ONE_VIDEO, 
    LIKE_VIDEOS,
    DISLIKE_VIDEO,
    FILTER_CATEGORY
} from '../constants'

const initialSate = {
    isLoading: false,
    fetcheVideos: [],
    error: ''
}

const actionListVideos = ( state = initialSate, action ) => {
    switch (action.type) {
        case LOAD_VIDEOS:
            return {
                ...state,
                isLoading: true
            }
        case LIST_VIDEOS:
            return {
                ...state,
                fetcheVideos: action.payload,
                isLoading: false,
                error: ''
            }
        case FETCH_VIDEOS_ERROR:
            return {
                ...state,
                error: action.payload,
                fetcheVideos: [],
                isLoading: false
            }

        case DELETE_ONE_VIDEO:
            return {
                ...state,
                fetcheVideos: state.fetcheVideos.filter(video => video.id !== action.payload)
            }

        case LIKE_VIDEOS:
            const videoLike = state.fetcheVideos.map(video => {
                if(video.id === action.payload) {
                    video.likes = video.likes + 1
                }
                return video
            })
            return {
                ...state,
                fetcheVideos: videoLike
            }

        case DISLIKE_VIDEO:
            const videoDislike = state.fetcheVideos.map(video => {
                if(video.id === action.payload) {
                    video.dislikes = video.dislikes - 1
                }
                return video
            })
            return {
                ...state,
                fetcheVideos: videoDislike
            }

        case FILTER_CATEGORY:
            const videos = state.fetcheVideos.filter( video => video.category.toLowerCase() === action.payload.toLowerCase())
            return {
                ...state,
                fetcheVideos: videos
            }
        default: return state;
    }
}

export default actionListVideos;
