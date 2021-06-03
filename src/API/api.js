import * as axios from 'axios';

const instance = axios.create({
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    headers: {
        'API-KEY': 'b7104834-b6a6-4f83-b432-6d6cfda2a81f'
    }

});

export const usersAPI = {
    getUsers(currentPage = 1, pageSize = 10) {
        return instance.get(`users?page=${currentPage}&count=${pageSize}`)
            .then(response => response.data);
    },
    follow(userId) {
        return instance.post(`follow/${userId}`)
    },
    unfollow(userId) {
        return instance.delete(`follow/${userId}`)
    },
    getProfile(userId) {
<<<<<<< HEAD
        console.warn('Obsolete method. Please profileAPI object')
=======
        console.warn('Obsolete method. Please use profileAPI object.')
>>>>>>> 9f6bde7db35cfb8020d61703c9a79a3049333a19
        return profileAPI.getProfile(userId)
    }
}

export const profileAPI = {
    getProfile(userId) {
<<<<<<< HEAD
        return instance.get(`profile/` + userId)
    },
    getStatus(userId) {
        return instance.get('profile/status/' + userId)
    },
    updateStatus(status) {
        return instance.put('profile/status', { status })
=======
        return instance.get(`profile/` + userId);
    },
    getStatus(userId){
        return instance.get(`profile/status/` + userId);
    },
    updateStatus(status){
        return instance.put(`profile/status/`, {status});
>>>>>>> 9f6bde7db35cfb8020d61703c9a79a3049333a19
    }
}


export const authAPI = {
    me() { return instance.get(`auth/me`) }
}