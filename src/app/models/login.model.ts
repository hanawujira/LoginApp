export interface LoginModel {
    username: string;
    password: string;
}

export interface LoginResponse {
    authToken: string;
}