export default function scrollToBottom(className: string) {
  const obj = document.getElementsByClassName(className)[0]
  obj.scrollTop = obj.scrollHeight
}
