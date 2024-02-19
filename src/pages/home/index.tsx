import {
  Box,
  Breadcrumbs,
  Button,
  Chip,
  Divider,
  Grid,
  Paper,
  Typography,
} from '@mui/material'
import {
  Checklist,
  Home,
  ManageAccounts,
  Quiz,
  ViewModule,
} from '@mui/icons-material'
import {
  Footer,
  LayoutDrawer,
  useAppThemeContext,
  useAuthContext,
} from '../../shared'

export const HomePage = () => {
  const { theme } = useAppThemeContext()
  const { accessToken, userProfile } = useAuthContext()

  return (
    <LayoutDrawer
      title={
        <Breadcrumbs aria-label="breadcrumb">
          <Chip
            color="primary"
            variant="filled"
            label="Página Inicial"
            icon={<Home sx={{ mr: 0.5 }} fontSize="inherit" />}
          />
        </Breadcrumbs>
      }
    >
      <Box
        my={1}
        mx={2}
        flexDirection="column"
        component={Paper}
        variant="outlined"
      >
        <Box
          height={theme.spacing(7)}
          width="100%"
          display="flex"
          alignItems="center"
          justifyContent="space-between"
          p={1}
        >
          <Typography
            component="div"
            variant="h6"
            display="flex"
            alignItems="center"
            gap={1}
          >
            <ViewModule />
            Módulos
          </Typography>
        </Box>
        <Divider />
        <Box p={1}>
          <Grid container spacing={2}>
            {userProfile?.is_super && (
              <Grid item xs={12} sm={6} md={4}>
                <Button
                  variant="contained"
                  color="primary"
                  fullWidth
                  size="large"
                  href={`https://emtidigital-massape-admin.emsolucoestecnologicas.com.br/token/${accessToken}`}
                  startIcon={<ManageAccounts />}
                >
                  Admin
                </Button>
              </Grid>
            )}
            <Grid item xs={12} sm={6} md={4}>
              <Button
                variant="contained"
                color="primary"
                fullWidth
                size="large"
                href={`https://emtidigital-massape-freq.emsolucoestecnologicas.com.br/token/${accessToken}`}
                startIcon={<Checklist />}
              >
                Frequência
              </Button>
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
              <Button
                variant="contained"
                color="primary"
                fullWidth
                size="large"
                href={`https://emtidigital-massape-ava.emsolucoestecnologicas.com.br/token/${accessToken}`}
                startIcon={<Quiz />}
              >
                Avaliações
              </Button>
            </Grid>
          </Grid>
        </Box>
      </Box>
      <Footer />
    </LayoutDrawer>
  )
}
