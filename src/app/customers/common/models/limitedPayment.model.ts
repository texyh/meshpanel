export interface LimitedPayment {
    name: string
    Amount: number
    customAttributes: {[x: string]: string}
    expirationDate: string
    userId: string
}