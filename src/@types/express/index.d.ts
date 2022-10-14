import * as express from "express"

declare global {
    namespace Express {
        interface Request {
            user: {
                email: any
                id: string
                isAdm: boolean
            }
        }
    }
}