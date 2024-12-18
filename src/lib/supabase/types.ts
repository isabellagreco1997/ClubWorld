export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export interface Database {
  public: {
    Tables: {
      clubs: {
        Row: {
          id: number
          rank: number
          name: string
          city: string
          establishedyear: number
          membershipfees: {
            annual: number
            joiningFee?: number
            currency: string
          }
          membershiprequirements: {
            age?: string
            referrals?: number
            otherCriteria?: string[]
          }
          clubtype: string[]
          facilities: {
            name: string
            description: string
            isAvailable: boolean
          }[]
          eventsandactivities: {
            name: string
            description: string
            frequency: string
            category: string
          }[]
          website: string
          description: string
          reviews: {
            rating: number
            comment: string
            author: string
            date: string
          }[]
          reciprocalclubs: number
          pictures: {
            url: string
            alt: string
            category: string
          }[]
        }
        Insert: {
          [key: string]: any
        }
        Update: {
          [key: string]: any
        }
      }
    }
  }
}