export const getStorageItem = (key) => {
  const value = window.localStorage.getItem(key)
  return value || ''
}

export const setStorageItem = (key, value) => {
  window.localStorage.setItem(key, value)
}

export const isAuthenticated = () => getStorageItem('token')
