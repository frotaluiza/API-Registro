import axios from 'axios'

export const http = axios.create({
    baseURL: 'https://green-wave-0ab9cb110.azurestaticapps.net/api/'
})
