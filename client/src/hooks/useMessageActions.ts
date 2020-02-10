import { useCallback } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from '../store'
import { addMessage } from '../store/messages'
import useName from './useName'
import { generate } from 'randomstring'

export default function useMessageActions(roomId: string) {
  const dispatch = useDispatch()
  const socket = useSelector((state: RootState) => state.socketIO.socket)
  const writer = useName()
  const sendMessage = useCallback(
    (message: string) =>
      socket?.emit('send:message', {
        roomId: roomId,
        msgId: generate(12),
        writer: writer,
        message: message,
        date: new Date(),
      }),
    [],
  )
  const recieveMessage = useCallback(
    () =>
      socket?.on('rcv:message', (message: any) => {
        dispatch(
          addMessage(
            message.roomId,
            message.msgId,
            message.writer,
            message.message,
            new Date(message.date),
          ),
        )
      }),
    [socket, dispatch],
  )
  const addMsgToStore = useCallback(
    (message: string) => dispatch(addMessage(roomId, generate(12), writer, message, new Date())),
    [dispatch],
  )
  const socketOff = useCallback(() => socket?.off('rcv:message'), [socket])
  return {
    socketOff,
    sendMessage,
    recieveMessage,
    addMsgToStore,
  }
}
