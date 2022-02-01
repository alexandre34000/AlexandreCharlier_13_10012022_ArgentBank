export const authHeader = () => {
    const token = localStorage.token;

    if (token) {
        return {
            'Content-Type': 'application/json',
            Accept: 'application/json',
            'Authorization': `Bearer ${token}`
        };
    } else {
        return {};
    }
}


