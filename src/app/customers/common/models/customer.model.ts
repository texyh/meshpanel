export interface Customer {
    identifier : string
    displayName : string
    contactPerson : ContactPerson
    financialAdmins : string[]
}

export interface ContactPerson {
    username : string
    fullName : string 
}