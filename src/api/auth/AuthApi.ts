import ApiClient from '../../util/ApiClient'

export interface LoginRequest {
    loginId: string;
    password: string;
}

export const login = async (request: LoginRequest) => {
    const response = await ApiClient.post('/api/auth/login', request);
    return response.data;
};

export const logout = async () => {
    const response = await ApiClient.post('/api/auth/logout');
    return response.data;
};