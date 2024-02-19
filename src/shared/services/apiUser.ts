import { apiUsingNow, iUser } from '../../shared'

const profile = async (): Promise<iUser> => {
  const { data: response } = await apiUsingNow.get<iUser>('users/profile')
  return response
}

export const apiUser = {
  profile,
}
