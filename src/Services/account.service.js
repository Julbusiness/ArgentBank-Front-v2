import Axios from "./caller.service"

let login = (login) => {
  return Axios.post("/api/v1/user/login", login)
}

let saveToken = (token) => {
  localStorage.setItem('token', token)
}

let saveTokenSession = (token) => {
  sessionStorage.setItem('token', token)
}

let logout = () => {
  localStorage.removeItem('token') || sessionStorage.removeItem('token')
}

let isLogged = () => {
  let token = localStorage.getItem('token') || sessionStorage.getItem('token')
  return !!token
}

let getToken = () => {
  return localStorage.getItem('token') || sessionStorage.getItem('token')
}

export const accountService = {
  login, saveToken, logout, isLogged, getToken, saveTokenSession
}