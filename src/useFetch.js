import { useState, useEffect } from 'react'

const useFetch = (url) => {
    const [data, setBlogs] = useState(null)
    const [ispending, setIsPending] = useState(true)
    const [error, setError] = useState(null)

    //runs for every render
    useEffect(() => {
        const abortCont = new AbortController();

        fetch(url, { signa: abortCont.signal })
        .then(res => {
            console.log(res)
            if(!res.ok){
              setError('could not fetch the data from resoure')
              throw Error('could not fetch the data from resoure')
            }
            return res.json()
        })
        .then(data => {
            setBlogs(data)
            setIsPending(false)
        })
        .catch(err => {
            if(err.name === 'AbortError'){
                console.log('fetch aborted')
            }else{
                setIsPending(false)
                console.log(err.message)
            }
           
        },1000)
        return ()=> abortCont.abort()

      },[url])

      return { data, ispending, error  }
}

export default useFetch