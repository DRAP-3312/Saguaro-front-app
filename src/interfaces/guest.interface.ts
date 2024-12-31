export interface Guest {
  idUser: string
  permisos?: Permission
  idBoard: string
}

export interface Permission {
  create: boolean
  delete: boolean
  move: boolean
  reply: boolean
  update: boolean
}
