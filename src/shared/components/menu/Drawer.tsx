import { useLocation } from 'react-router-dom'
import {
  Box,
  Divider,
  Drawer,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from '@mui/material'
import { FirstPage, Home, Logout } from '@mui/icons-material'
import {
  ButtonListItem,
  ListItemLink,
  useAppThemeContext,
  useAuthContext,
} from '../../../shared'

export const MenuDrawer = () => {
  const location = useLocation()
  const { theme, smDown, isDrawerOpen, toggleDrawerOpen } = useAppThemeContext()
  const { logout, accessToken } = useAuthContext()

  return (
    <Drawer
      open={isDrawerOpen}
      variant={smDown ? 'temporary' : 'permanent'}
      onClose={toggleDrawerOpen}
    >
      <Box
        display="flex"
        flexDirection="column"
        width={theme.spacing(28)}
        height="100%"
      >
        <Box width="100%" bgcolor={theme.palette.background.default} p={2}>
          <img src="/logo.webp" alt="EMTI Digital" />
        </Box>
        <Divider />
        <Box flex={1}>
          <List component="nav">
            {[{ icon: <Home />, label: 'Página Inicial', to: '/' }].map(
              (el) => (
                <ListItemLink
                  key={el.label}
                  icon={el.icon}
                  to={el.to}
                  selected={location.pathname === el.to}
                  label={el.label}
                />
              ),
            )}
          </List>
        </Box>
        <Box>
          <List component="nav">
            <ListItemButton
              onClick={logout}
              href={`https://emtidigital.emsolucoestecnologicas.com.br/token/${accessToken}`}
            >
              <ListItemIcon>
                <FirstPage />
              </ListItemIcon>
              <ListItemText primary="Voltar" />
            </ListItemButton>
            <ButtonListItem icon={<Logout />} label="Sair" onClick={logout} />
          </List>
        </Box>
      </Box>
    </Drawer>
  )
}
