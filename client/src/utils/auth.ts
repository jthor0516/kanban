import { JwtPayload, jwtDecode } from 'jwt-decode';

class AuthService {
  getProfile() {
    // TODO: return the decoded token
    const token = this.getToken();
    if (token) {
      return jwtDecode<JwtPayload>(token);
    } else return null;
  }

  loggedIn() {
    // TODO: return a value that indicates if the user is logged in
    const token = this.getToken()
    return token
  }
  
  isTokenExpired(token: string) {
    // TODO: return a value that indicates if the token is expired
    try {
      const decoded = jwtDecode<JwtPayload>(token)
      if (decoded?.exp && decoded?.exp < Date.now() / 1000)
        return true
    } catch (err) {
      return false
    }
  }

  getToken(): string {
    // TODO: return the token
    return localStorage.getItem('token') || ''
  }

  login(idToken: string) {
    // TODO: set the token to localStorage
    // TODO: redirect to the home page
    localStorage.setItem('token', idToken)
    window.location.href = ('/')
  }

  logout() {
    // TODO: remove the token from localStorage
    // TODO: redirect to the login page
    localStorage.removeItem('token')
    window.location.href = ('/')
  }
}

export default new AuthService();
