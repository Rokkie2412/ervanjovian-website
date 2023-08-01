import './ArticleCard.css'
import './ArticleCard-phone.css'
// eslint-disable-next-line react/prop-types
const ArticleCard = ({judul, date, content, onClicks}) => {
  return (
    <div onClick={onClicks} className='article-card-container'>
      <h1>{judul}</h1>
      <p>{content}</p>
      <h5>Created at: {date}</h5>
    </div>
  )
}

export default ArticleCard