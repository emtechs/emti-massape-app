import { iChildren } from '../interfaces'
import { AuthProvider } from './AuthContext'
import { AppThemeProvider } from './ThemeContext'

const Providers = ({ children }: iChildren) => (
  <AppThemeProvider>
    <AuthProvider>{children}</AuthProvider>
  </AppThemeProvider>
)

export default Providers
export { useAuthContext } from './AuthContext'
export { useAppThemeContext } from './ThemeContext'
