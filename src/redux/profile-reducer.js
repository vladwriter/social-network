const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';

let initialState = {
    posts: [
        { id: 1, text: 'Hi, how are you?', likesCount: 23 },
        { id: 2, text: 'Hello! You are welcome!', likesCount: 19 },
        { id: 3, text: 'Hello, world!', likesCount: 33 },
        { id: 4, text: 'It\'s amazing', likesCount: 0 },
        { id: 5, text: 'Pray for you', likesCount: 87 }
    ],
    newPostText: 'Write new post!'
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
        default:
            return state;
    }
}
export const addPostActionCreator = () => ({ type: ADD_POST })
export const updateNewPostTextActionCreator = (text) =>
    ({ type: UPDATE_NEW_POST_TEXT, newText: text })

export default profileReducer;