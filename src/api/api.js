import axios from 'axios'

const instance = axios.create({
  withCredentials: true,
  baseURL: `https://social-network.samuraijs.com/api/1.0/`,
  headers: {
    'API-KEY' : '5408f491-4f1d-4cd9-971d-a9f7ee53b34c'
  }
})

export const usersAPI = {

  getUsers(currentPage = 1, pageSize = 10) {
    return instance.get(`users?page=${ currentPage }&count=${ pageSize }`)
        .then(response => response.data)
  },

  follow(userID) {
    return instance.post(`follow/${ userID }`, {})
        .then(response => response.data)
  },

  unFollow(userID) {
    return instance.delete(`follow/${ userID }`)
        .then(response => response.data)
  },

  getProfile(userId = 10) {
    return instance.get(`profile/${userId}`)
        .then(response => response.data)
  }
}

export const authAPI = {
  me() {
    return instance.get(`auth/me`,)
  }

}
