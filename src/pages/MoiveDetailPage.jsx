import { useParams } from 'react-router-dom'

const MoiveDetailPage = () => {
  const { movieId } = useParams()

  return (
    <div>MoiveDetailPage</div>
  )
}

export default MoiveDetailPage