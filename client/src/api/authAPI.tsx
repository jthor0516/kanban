import { UserLogin } from "../interfaces/UserLogin";

const login = async (userInfo: UserLogin) => {
  // TODO: make a POST request to the login route
  try {
  const response = await fetch('/auth/login', {
    method: 'POST',
    headers: {'Content-Type': 'application/json'},
    body: JSON.stringify(userInfo)
  })
  
  if (!response.ok) {
    throw new Error('user info not retrieved')
  }
  const data = await response.json()
  return data
} catch (err) {
  console.log('error from user login', err)
  return Promise.reject('could not fetch use info')
}
}



export { login };
