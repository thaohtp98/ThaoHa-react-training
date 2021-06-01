export const getStorageItem = (key) => {
  const value = window.localStorage.getItem(key)
  return value || ''
}

export const setStorageItem = (key, value) => {
  window.localStorage.setItem(key, value)
}

export const removeStorageItem = (key) => {
  window.localStorage.removeItem(key)
}

export const checkAuth = () => {
  const token = getStorageItem('token')
  const refreshToken = getStorageItem('refreshToken')
  if (!token || !refreshToken) {
    return false
  }
  return true
}

export const authHeader = () => {
  const user = JSON.parse(getStorageItem('user_info'))

  if (user && user.access_token) {
    return { Authorization: 'Bearer ' + user.access_token }
  } else {
    return {}
  }
}
