import instance from "../api/http";

export type UserLogin={
    login : string,
    password:string
}
export type UserRegistration = {
    firstName:string,
    lastName:string,  
    login: string;
    password: string;
};
export interface UserInfos{
    email:string,
    firstName:string,
    token:string,
    roles:string[],
    id:string
}
export interface SignupResponse{
    message : string
}
export const Authenticate = (data:UserLogin)=>{
    return instance.post<UserInfos>("/auth/login",data);
}
export const CreateAccount = (data:UserRegistration)=>{
    return instance.post<SignupResponse>("/auth/signup",data);
}