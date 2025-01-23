export interface Events {
  id: string
  image: string
  title: string
  date: string
}

export interface NFTCertification {
  id: string
  title: string
  image: string
  date?: string
}

export interface Reward {
  type: string
  date: string
  eventName: string
  amount: number
  currency: string
}
