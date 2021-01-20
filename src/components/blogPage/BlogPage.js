import React from 'react';
import  './BlogPage.scss';
import { blogData } from '../../blogData.js';
//import { useParams } from "react-router-dom";

const BlogPage =( props )=>{

    let blogId  = props.location.pathname
    let id = blogId.split('/')[1];

    var data = blogData.find( blog =>  blog.id=== id );
    console.log('data ' ,data)
   
  
  const breakDescription = ()=>{
        let description = data.description; 
        var split_array= description.split('.');

        var result = [] ,
            prev=split_array[0];
        for(let i=1 ; i<split_array.length; i++){
            if(prev.length + split_array[i].length< 300){
                prev+='.'+split_array[i];
            
            }else{
                result.push(prev);
                prev = split_array[i];
            }
            
        }
        return result.map( (para, index) =>{
            return(
                <p className={`para-${index}`}  key={`para-${index}`}>{`${para}.`}</p>
            )
        });
    }
   
    return(
    <div className="blog-container">
    <article className="blog-item" >
        <button className="close-button " onClick={() => props.history.goBack()}>
       
                <svg className="icon icon--close icon--green-gradient" 
                    viewBox="0 0 20 20" version="1.1" aria-labelledby="title">
                    <title>Close Screen</title>
                    <path d="M0,2.9h2.9V0H0V2.9z M2.9,5.7h2.9V2.9H2.9V5.7z M5.7,8.6h2.9V5.7H5.7V8.6z M8.6,11.4h2.9V8.6H8.6V11.4z M5.7,14.3h2.9v-2.9H5.7V14.3z M2.9,17.1h2.9v-2.9H2.9V17.1z M0,20h2.9v-2.9H0V20z M11.4,14.3h2.9v-2.9h-2.9V14.3z M14.3,17.1h2.9v-2.9h-2.9V17.1zM17.1,20H20v-2.9h-2.9V20z M11.4,8.6h2.9V5.7h-2.9V8.6z M14.3,5.7h2.9V2.9h-2.9V5.7z M17.1,2.9H20V0h-2.9V2.9z"></path>
                </svg>
        </button>
        <div className= "content-wrapper">
            <div className="blog-title-wrap">
                <header>
                    <h1 className="title">{data.title}</h1>
                    <div className="meta-container">
                        <div>
                            <span className="authors">
                                <a  aria-label={`Posts by ${data.author}`} href={`/author/${data.author}/`}>{data.author}</a>
                            </span>
                                
                            <div className="date-time-wrapper">
                                <span>{data.publishedAt}</span>
                            </div>
                        </div>
                        </div>
                </header>
            </div>

            <div className="blog-content-wrap">
                    <img  className="blog-img" alt='blog-img' src={`.${data.imageSrc}`}></img>
                    <div className="image-credits">
                        <p>Image Credits - {data.imageCredits}</p>
                    </div>
                    <div className="blog-description">
                        {breakDescription()}
                    </div>
            </div>
        </div>

    </article>
         
    
    </div>
    )
}

export default BlogPage;