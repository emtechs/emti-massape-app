import { z } from 'zod'

export const userFirstSchema = z
  .object({
    name: z
      .string({ required_error: 'Nome completo obrigatório' })
      .min(1, 'Nome completo obrigatório'),
    email: z
      .string({ required_error: 'Email obrigatório' })
      .email('Email inválido'),
    password: z
      .string({ required_error: 'Senha obrigatória' })
      .min(1, 'Senha obrigatória'),
    repeat_password: z
      .string({ required_error: 'Confirmar senha obrigatória' })
      .min(1, 'Confirmar senha obrigatória'),
    is_first_access: z.boolean().default(false),
  })
  .refine((fields) => fields.password === fields.repeat_password, {
    path: ['repeat_password'],
    message: 'As senhas precisam ser iguais',
  })

export const userUpdateSchema = z.object({
  name: z
    .string({ required_error: 'Nome completo obrigatório' })
    .min(1, 'Nome completo obrigatório'),
  email: z
    .string({ required_error: 'Email obrigatório' })
    .email('Email inválido'),
})

export const userPasswordSchema = z
  .object({
    old_password: z
      .string({ required_error: 'Senha Atual obrigatória' })
      .min(1, 'Senha Atual obrigatória'),
    password: z
      .string({ required_error: 'Senha obrigatória' })
      .min(1, 'Senha obrigatória'),
    repeat_password: z
      .string({ required_error: 'Confirmar senha obrigatória' })
      .min(1, 'Confirmar senha obrigatória'),
  })
  .refine((fields) => fields.password === fields.repeat_password, {
    path: ['repeat_password'],
    message: 'As senhas precisam ser iguais',
  })
