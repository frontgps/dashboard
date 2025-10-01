export interface LoginCredentials {
  identity: string
  password: string
}

export interface AuthSuccessResponse {
  token: string
  record: {
    id: string
    collectionId: string
    collectionName: string
    username: string
    verified: boolean
    emailVisibility: boolean
    email: string
    created: string
    updated: string
    description: string
    avatar: string
  }
}
