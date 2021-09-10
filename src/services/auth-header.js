export default function authHeader() {
    let token = JSON.parse(localStorage.getItem('token'))
    let user = JSON.parse(localStorage.getItem('user'))
    if (user && token) 
        return {Authorization: 'bearer ' + token}
    return {}
}