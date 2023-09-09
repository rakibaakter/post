import { useEffect, useState } from "react"
import Post from "./Post";
import './post.css'

export default function Posts(){
    
    const title = {
        textAlign : 'center',
    }


    const [posts, setPosts] = useState([]);
    // console.log(posts, setPosts)
    useEffect(()=>{
        fetch('https://jsonplaceholder.typicode.com/posts')
        .then(res => res.json())
        .then(data => setPosts(data))
    } , [])
    
    return (
        <>
            <h2 style={title}>All Posts </h2>
            {
                posts.map((post) =>
                <Post className='postStyle' post={post}></Post>
            )
            }
        </>
    )
}