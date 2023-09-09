// import './post.css'
export default function Post({post}){
    return (
        <>
            <div className='card'>
                <h4>UserId : {post.userId ? post.userId : 'undefine'}</h4>
                <h2>{post.title ? post.title : 'title not found'}</h2>
                <p>{post.body ? post.body : 'no post availaible'}</p>
            </div>
        </>
    )
}