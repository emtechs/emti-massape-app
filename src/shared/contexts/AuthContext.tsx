import { AxiosError } from 'axios'
import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
} from 'react'
import {
  apiAuth,
  apiUser,
  iChildren,
  iLoginRequest,
  iUser,
  useAppThemeContext,
} from '../../shared'

interface iAuthContextData {
  accessToken: string | undefined
  isAuthenticated: boolean
  userProfile: iUser | undefined
  logout: () => void
  login: (data: iLoginRequest) => Promise<void>
  profileUser: () => void
}

const AuthContext = createContext({} as iAuthContextData)

export const AuthProvider = ({ children }: iChildren) => {
  const { setLoading, handleSucess, handleError } = useAppThemeContext()
  const [accessToken, setAccessToken] = useState<string>()
  const [userProfile, setUserProfile] = useState<iUser>()

  useEffect(() => {
    const accessToken = localStorage.getItem('@EMTechs:token')

    if (accessToken) {
      setAccessToken(accessToken)
    } else {
      setAccessToken(undefined)
    }
  }, [])

  const profileUser = useCallback(() => {
    setLoading(true)
    apiUser
      .profile()
      .then((res) => {
        setUserProfile(res)
      })
      .finally(() => setLoading(false))
  }, [])

  const handleLogin = useCallback(async (data: iLoginRequest) => {
    try {
      setLoading(true)
      const { token, refresh_token } = await apiAuth.login(data)
      localStorage.setItem('@EMTechs:token', token)
      localStorage.setItem('@EMTechs:refresh_token', refresh_token)
      setAccessToken(token)
      handleSucess('Login realizado com sucesso')
    } catch (e) {
      if (e instanceof AxiosError) {
        if (e.response?.status === 401) {
          handleError('Conta desativada, entre em contato com o administrador!')
        } else {
          handleError('Combinação de Usuário e Senha incorretos')
        }
      }
    } finally {
      setLoading(false)
    }
  }, [])

  const handleLogout = useCallback(() => {
    localStorage.removeItem('@EMTechs:token')
    localStorage.removeItem('@EMTechs:refresh_token')
    setAccessToken(undefined)
    setUserProfile(undefined)
  }, [])

  const isAuthenticated = useMemo(() => !!accessToken, [accessToken])

  return (
    <AuthContext.Provider
      value={{
        accessToken,
        isAuthenticated,
        login: handleLogin,
        logout: handleLogout,
        profileUser,
        userProfile,
      }}
    >
      {children}
    </AuthContext.Provider>
  )
}

export const useAuthContext = () => useContext(AuthContext)
