import { z } from 'zod'
import {
  userFirstSchema,
  userPasswordSchema,
  userUpdateSchema,
} from '../../shared'

export type iRole = 'ADMIN' | 'SERV' | 'DIRET'

export interface iUser {
  id: string
  name: string
  login: string
  cpf: string
  email: string
  role: iRole
  is_super: boolean
  is_first_access: boolean
  is_active: boolean
  profile: {
    url: string
  }
}

export type iUserFirstRequest = z.infer<typeof userFirstSchema>

export type iUserUpdateRequest = z.infer<typeof userUpdateSchema>

export type iUserPasswordRequest = z.infer<typeof userPasswordSchema>
