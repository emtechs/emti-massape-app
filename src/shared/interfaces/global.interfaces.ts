import { MouseEvent, ReactNode } from 'react'

export interface iChildren {
  children: ReactNode
}

export interface iDialogBaseProps {
  open: boolean
  onClose: () => void
  getData?: () => void
}

export interface iButtonBaseProps {
  fullWidth?: boolean
  title: string
  href?: string
  startIcon?: ReactNode
  endIcon?: ReactNode
  onClick?: () => void
  size?: 'small' | 'medium' | 'large'
  color?:
    | 'primary'
    | 'inherit'
    | 'secondary'
    | 'error'
    | 'info'
    | 'success'
    | 'warning'
}

type option = {
  to: string
  value: string
}

export interface iMenuLayoutProps {
  title: string
  icon: ReactNode
  anchorEl: HTMLElement | null
  open: boolean
  onClick: (event: MouseEvent<HTMLButtonElement>) => void
  onClose: () => void
  options: option[]
}
