import axios from 'axios'

export const http = axios.create({
    baseURL: 'https://pessoas120210914201201-2.azurewebsites.net/api/'
})
