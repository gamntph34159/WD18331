export type HairType = {
  color: string
  type: string
}
export type CoordinatesType = {
  lat: number
  lng: number
}
export type AddressType = {
  address: string
  city: string
  coordinates: CoordinatesType
  postalCode: string
  state: string
}
export type BankType = {
  cardExpire: string
  cardNumber: string
  cardType: string
  currency: string
  iban: string
}
export type CryptoType = {
  coin: string
  wallet: string
  network: string
}
export type CompanyType = {
  address: AddressType
  department: string
  name: string
  title: string
}
export type UserType = {
  id: number
  firstName: string
  lastName: string
  maidenName: string
  age: number
  gender: string
  email: string
  phone: string
  username: string
  password: string
  birthDate: string
  image: string
  bloodGroup: string
  height: number
  weight: number
  eyeColor: string
  hair: HairType
  domain: string
  ip: string
  address: AddressType
  macAddress: string
  university: string
  bank: BankType
  company: CompanyType
  ein: string
  ssn: string
  userAgent: string
  crypto: CryptoType
}
