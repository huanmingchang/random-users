import { apiHelper } from './../utils/helpers'

export default {
  getMultipleUsers(num) {
    return apiHelper.get(`/?results=${num}`)
  },
}
