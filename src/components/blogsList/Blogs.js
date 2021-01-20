import React, { useState } from 'react';
import {Route , Link} from 'react-router-dom';

import { blogData } from '../../blogData.js';
import { idCreator } from '../../helpers/idCreator';
import BlogPage from '../blogPage/BlogPage';
import  './Blogs.scss';

const Blogs = ({match}) =>{
    const [blogNumber, setBlogNumber]=useState(3);
    const [isloadMore , setIsloadMore]=useState(true);
  

    const LoadMoreBlogs=()=>{
        console.log("BHAR", blogData.length);
        if(blogNumber <= blogData.length){
            setBlogNumber(prevValue => prevValue + 3);
        }else{
            setIsloadMore(false);
        }
    }

return (
    <>
    <div className="article-container" >
  
        {blogData.slice(0,blogNumber).map( (data , index) => { 
            const blogId = idCreator(data.title);
            return(    
                <article key={`article-${index}`} className="articles">
                    <header>
                        <h2 className="title">
                            <Link to={`${data.id}/${blogId}`} >{data.title}</Link>
                            <Route path={`${data.id}/${blogId}`}>
                                <BlogPage data={blogData} />
                            </Route>
                        </h2>
                        <div className="meta-container">
                            <div>
                                <span className="authors">
                                    <a aria-label="Posts by Connie Loizos" href="/author/connie-loizos/">{data.author}</a>
                                </span>
                                   
                                <div className="date-time-wrapper">
                                     <span>{data.publishedAt}</span>
                                </div>
                           </div>
                         </div>
                    </header>
                    <div className="content">
                        {data.content}
                    </div>
                    <div className='image-container'>
                        <img alt='blog-img' src={data.imageSrc}></img>
                    </div>
                </article>
                
          
            );
           
        })

        }
    
    </div>
   
    <button onClick={LoadMoreBlogs} 
         className={`load-btn ${isloadMore ? "load-more" : 'all-loaded'}`}>
          {isloadMore ? 'Load More': 'Thats all folks'}
    </button>
    
  </>
)

}

export default Blogs;