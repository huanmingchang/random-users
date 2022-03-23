import axios from 'axios'

const baseURL = 'https://randomuser.me/api'

export const apiHelper = axios.create({
  baseURL,
})
