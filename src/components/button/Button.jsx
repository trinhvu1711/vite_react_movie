import { useNavigate } from 'react-router-dom'

const Button = ({ link, color, width, text }) => {
  const navigate = useNavigate()
  return (
    <button onClick={() => navigate(link)} className={`capitalize py-3 px-6 rounded-lg ${color} ${width}`}>{text}</button>
  )
}

export default Button