import profileReducer from "./profile-reducer";
import dialogsReducer from "./dialogs-reducer";
import sidebarReducer from "./sidebar-reducer";

const store = {
    _state: {
        profilePage: {
            posts: [
                { id: 1, text: 'Hi, how are you?', likesCount: 23 },
                { id: 2, text: 'Hello! You are welcome!', likesCount: 19 },
                { id: 3, text: 'Hello, world!', likesCount: 33 },
                { id: 4, text: 'It\'s amazing', likesCount: 0 },
                { id: 5, text: 'Pray for you', likesCount: 87 }
            ],
            newPostText: 'Write new post!'
        },
        dialogsPage: {
            dialogs: [
                { id: 1, name: 'Dimych', photo: 'https://www.nj.com/resizer/zovGSasCaR41h_yUGYHXbVTQW2A=/1280x0/smart/cloudfront-us-east-1.images.arcpublishing.com/advancelocal/SJGKVE5UNVESVCW7BBOHKQCZVE.jpg' },
                { id: 2, name: 'Alex', photo: 'https://www.nj.com/resizer/zovGSasCaR41h_yUGYHXbVTQW2A=/1280x0/smart/cloudfront-us-east-1.images.arcpublishing.com/advancelocal/SJGKVE5UNVESVCW7BBOHKQCZVE.jpg' },
                { id: 3, name: 'Anna', photo: 'https://www.nj.com/resizer/zovGSasCaR41h_yUGYHXbVTQW2A=/1280x0/smart/cloudfront-us-east-1.images.arcpublishing.com/advancelocal/SJGKVE5UNVESVCW7BBOHKQCZVE.jpg' },
                { id: 4, name: 'Victor', photo: 'https://www.nj.com/resizer/zovGSasCaR41h_yUGYHXbVTQW2A=/1280x0/smart/cloudfront-us-east-1.images.arcpublishing.com/advancelocal/SJGKVE5UNVESVCW7BBOHKQCZVE.jpg' },
                { id: 5, name: 'Bruno', photo: 'https://www.nj.com/resizer/zovGSasCaR41h_yUGYHXbVTQW2A=/1280x0/smart/cloudfront-us-east-1.images.arcpublishing.com/advancelocal/SJGKVE5UNVESVCW7BBOHKQCZVE.jpg' }
            ],
            messages: [
                { id: 1, message: 'Hello' },
                { id: 2, message: 'Hi' },
                { id: 3, message: 'Bonjour' },
                { id: 4, message: 'Howdy' },
                { id: 5, message: 'Lets do it!' }
            ],
            newMessageBody: ''


        },
        sidebar: {
            friends: [{
                    id: 1,
                    name: 'Jack',
                    photo: 'https://www.nj.com/resizer/zovGSasCaR41h_yUGYHXbVTQW2A=/1280x0/smart/cloudfront-us-east-1.images.arcpublishing.com/advancelocal/SJGKVE5UNVESVCW7BBOHKQCZVE.jpg'
                },
                {
                    id: 2,
                    name: 'Bruno',
                    photo: 'https://www.nj.com/resizer/zovGSasCaR41h_yUGYHXbVTQW2A=/1280x0/smart/cloudfront-us-east-1.images.arcpublishing.com/advancelocal/SJGKVE5UNVESVCW7BBOHKQCZVE.jpg'
                },
                {
                    id: 3,
                    name: 'Alex',
                    photo: 'https://image.freepik.com/free-vector/businessman-character-avatar-isolated_24877-60111.jpg'
                },
                {
                    id: 4,
                    name: 'Alex',
                    photo: 'https://www.nj.com/resizer/zovGSasCaR41h_yUGYHXbVTQW2A=/1280x0/smart/cloudfront-us-east-1.images.arcpublishing.com/advancelocal/SJGKVE5UNVESVCW7BBOHKQCZVE.jpg'
                },
                {
                    id: 5,
                    name: 'Alex',
                    photo: 'https://www.nj.com/resizer/zovGSasCaR41h_yUGYHXbVTQW2A=/1280x0/smart/cloudfront-us-east-1.images.arcpublishing.com/advancelocal/SJGKVE5UNVESVCW7BBOHKQCZVE.jpg'
                },
                {
                    id: 6,
                    name: 'Alex',
                    photo: 'https://www.nj.com/resizer/zovGSasCaR41h_yUGYHXbVTQW2A=/1280x0/smart/cloudfront-us-east-1.images.arcpublishing.com/advancelocal/SJGKVE5UNVESVCW7BBOHKQCZVE.jpg'
                }

            ]
        }
    },
    _callSubscriber() {
        console.log('state was changed');
    },

    getState() {
        return this._state;
    },
    subscribe(observer) {
        this._callSubscriber = observer;
    },

    dispatch(action) {
        this._state.profilePage = profileReducer(this._state.profilePage, action);
        this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action);
        this._state.sidebar = sidebarReducer(this._state.sidebar, action);

        this._callSubscriber(this._state);
    }
}

export default store;
window.store = store;