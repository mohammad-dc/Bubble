import React, {useState, useEffect} from 'react';
import Article from '../Article/index'
import API from '../../utils/axios'

export interface MyArticlesInterface{
    children: React.ReactNode,
    image: string,
    title: string,
    body: string,
    tagList: string,
    createdAt: string,
    favorited: boolean,
    favoritedCount: number,
    username: string
}

const MyArticles: React.FC = () =>{
    const [article, setArticle]:any = useState([]);

    useEffect(()=>{
            API.get('articles')
            .then((res: any) =>{
               
                    setArticle(res.data.articles);
            
               
            }).catch((error: any) =>{
                console.log(error);
                
            })
        
    }, [])
     
    const articleEL = article.map((el: any) =>(
        <Article key={el.slug} image={el.author.image} title={el.title} body={el.body} tagList={el.tagList} 
        createdAt={el.createdAt} favorited={el.favorited} favoritedCount={el.favoritedCount} username={el.author.username}/>
  ))

    return(
        <div style={{border: '1px solid #aaa'}}>
            {articleEL}
          
        </div>
    )

}

export default MyArticles;