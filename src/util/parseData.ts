import { Response } from '../interfaces/response.model';


export const sendResponse = (status: number, type: string, data?: any, error?: string|null): Response => {
    return {
        status: status,
        type: type,
        data: data === undefined || null ? null : data,
        error: null
    }
}


export const customError = (error?: string): Response => {
    return {
        status: 400,
        type: "Bad request",
        data: [],
        error: error ? "No data found" : error
    }
}


export const internalError = (): Response => {
    return {
        status: 500,
        type: "Internal error",
        error: "Oops! something went wrong in package"
    }
}