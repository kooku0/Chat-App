import { useCallback } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from '../store'
import { addMessage } from '../store/messages'
import useName from './useName'
import { generate } from 'randomstring'

export default function useSendMsg(roomId: string) {
  const dispatch = useDispatch()
  const socket = useSelector((state: RootState) => state.socketIO.socket)
  const name = useName()
  const sendMessage = useCallback(
    (message: string) =>
      socket?.emit('send:message', {
        roomId: roomId,
        msgId: generate(12),
        writer: name,
        message: message,
        date: new Date(),
      }),
    [],
  )
  const recieveMessage = () =>
    socket?.on('rcv:message', (message: any) => {
      console.log(message)
      dispatch(
        addMessage(message.roomId, message.msgId, message.name, message.message, message.date),
      )
    })
  const addMsgToStore = useCallback(
    (message: string) => dispatch(addMessage(roomId, generate(12), name, message, new Date())),
    [dispatch],
  )
  return {
    sendMessage,
    recieveMessage,
    addMsgToStore,
  }
}
