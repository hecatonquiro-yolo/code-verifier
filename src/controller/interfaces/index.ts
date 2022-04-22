import { BasicResponse, GoodbyeResponse } from '../types'

export interface iHelloController{
    getMessage(name?:string): Promise<BasicResponse>
}

export interface iGoodbyeController{
    getMessage(name?:string): Promise<GoodbyeResponse>
}
