export const CONNECT_SERVER = 'socket/CONNECT_SERVER' as const

export const connectServer = (endPoint: string) => ({
  type: CONNECT_SERVER,
  payload: endPoint,
})
