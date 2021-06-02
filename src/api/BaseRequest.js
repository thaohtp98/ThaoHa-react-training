import axios from 'axios'
import { getStorageItem } from '@/helper'

const getUrlPrefix = () => '/api'

const instance = axios.create({
  baseURL: process.env.REACT_APP_KEY
})
instance.defaults.headers.common['Authorization'] = `Bearer ${getStorageItem('token')}`

const get = async(url, params = {}) => {
  try {
    const config = { params: params }
    const response = await instance.get(getUrlPrefix() + url, config)
    return _responseHandler(response)
  } catch (error) {
    return _errorHandler(error)
  }
}

const put = async(url, data = {}) => {
  try {
    let response = {}
    if (data.toLocaleString() === '[object FormData]') {
      response = await instance.put(getUrlPrefix() + url, data)
    } else {
      response = await instance.put(getUrlPrefix() + url, data, {
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        }
      })
    }
    return _responseHandler(response)
  } catch (error) {
    _errorHandler(error)
  }
}

const post = async(url, data = {}) => {
  try {
    const response = await instance.post(getUrlPrefix() + url, data)
    return _responseHandler(response)
  } catch (error) {
    _errorHandler(error)
  }
}

const del = async(url, data = {}) => {
  try {
    const response = await instance.delete(getUrlPrefix() + url, { data })
    return _responseHandler(response)
  } catch (error) {
    _errorHandler(error)
  }
}

const _responseHandler = (response, url) => {
  const data = response.data
  return data
}

const _errorHandler = (err) => {
  if (err.response && err.response.status === 401) {
    // todo
  }
  throw err
}

export {
  get, post, del, put
}
