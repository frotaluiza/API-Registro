import axios from 'axios'

export const http = axios.create({
    baseURL: 'https://witty-wave-08d217710.azurestaticapps.net/api'
})
