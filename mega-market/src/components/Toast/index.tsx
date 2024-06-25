import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

const Toast = () => {
  return (
    <ToastContainer
      position='top-right'
      autoClose={1000}
      hideProgressBar
      closeOnClick
      pauseOnHover
      draggable
    />
  )
}

export const showToast = (
  message: string,
  type: 'success' | 'error' | 'info' | 'warning' = 'info'
) => {
  switch (type) {
    case 'success':
      toast.success(message)
      break
    case 'error':
      toast.error(message)
      break
    case 'info':
      toast.info(message)
      break
    case 'warning':
      toast.warning(message)
      break
    default:
      toast(message)
  }
}

export default Toast
