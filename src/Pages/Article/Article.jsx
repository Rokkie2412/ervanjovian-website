import './Article.css'
import './Article-phone.css'
import ArticleCard from '../../container/ArticleCard/ArticleCard'
import { articleList } from '../../../ArticleList'
import { useNavigate } from 'react-router-dom'
import { v4 as uuidv4 } from 'uuid';
import NavbarLink from '../../container/navbar/Navbar-Article'

const Article = () => {
  const nav = useNavigate()
  const cardClick = (link) =>{
    nav(link)
  }

  const homeID = '/'
  const aboutID = '/#about'
  const portoID = '/#porto'
  const certifID = '/#certif'

  return (
    <div className='main-container-article'>
      <NavbarLink home={homeID} porto={portoID} about={aboutID} certif={certifID}/>
      <span className='article-header'>
        <h1>FREE ARTICLES</h1>
        <p>By: Ervan Jovian🚀</p>
      </span>
      <div className='article-content-container'>
        {
          articleList.map((item) => (
            <ArticleCard key={item.id} judul={item.title} date={item.date} content={item.content} onClicks={() => {
              cardClick(`/article/${item.id}/${item.name}/${uuidv4()}`)
            }}/>
          ))
        }
      </div>
    </div>
  )
}

export default Article