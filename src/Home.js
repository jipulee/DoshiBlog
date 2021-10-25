import BlogList from './BlogList'
import useFetch from './useFetch'

const Home = () => {
    
 const {data: blogs, ispending, error} = useFetch('http://localhost:8000/blogs')
    
    
 
    return ( 
        <div className="home">
            { error && <div> {error} </div> }
            {ispending &&  <div>Loading...</div> }
            {blogs && <BlogList blogs={blogs} title={'All Blogs'} ></BlogList>}
            {/* <BlogList blogs={blogs.filter((blog)=> blog.author === 'mario')} title={"mario's blog"}></BlogList> */}
        </div>
     );
}
 
export default Home