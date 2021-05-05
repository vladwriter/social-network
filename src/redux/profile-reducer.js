import { usersAPI } from '../API/api';

const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';
const SET_USER_PROFILE = 'SET_USER_PROFILE';

let initialState = {
    posts: [
        { id: 1, text: 'Hi, how are you?', likesCount: 23 },
        { id: 2, text: 'Hello! You are welcome!', likesCount: 19 },
        { id: 3, text: 'Hello, world!', likesCount: 33 },
        { id: 4, text: 'It\'s amazing', likesCount: 0 },
        { id: 5, text: 'Pray for you', likesCount: 87 }
    ],
    newPostText: 'Write new post!',
    profile: null
}

const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POST:
            const newPost = {
                id: 6,
                text: state.newPostText,
                likesCount: 0
            };
            return {...state,
                newPostText: '',
                posts: [...state.posts, newPost],
            };
        case UPDATE_NEW_POST_TEXT:
            return {...state,
                newPostText: action.newText
            };
        case SET_USER_PROFILE:
            return {...state,
                profile: action.profile
            };
        default:
            return state;
    }
}
export const addPostActionCreator = () => ({ type: ADD_POST })
export const updateNewPostTextActionCreator = (text) =>
    ({ type: UPDATE_NEW_POST_TEXT, newText: text })

const setUserProfile = (profile) => ({ type: SET_USER_PROFILE, profile })
export const getUserProfile = (userId) => (dispatch) => {
    usersAPI.getProfile(userId).then(response => {
        dispatch(setUserProfile(response.data));
    });
}
export default profileReducer;