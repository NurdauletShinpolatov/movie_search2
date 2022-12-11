import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Loading from '../components/Loading'
import MovieCard from '../components/MovieCard'

const Home = () => {

    const [search, setSearch] = useState("Shrek")
    const [movies, setMovies] = useState([])
    const [loading, setLoading] = useState(false)

    const handleSearch = (e) => {
        if (e){
            e.preventDefault()
        }
        
        setLoading(true)
        axios.get(`https://www.omdbapi.com/?apikey=aba4f30e&s=${search}`)
        .then((res) => {
            setMovies(res.data.Search);
            console.log(res);
        })
        .catch((err) => {
            console.log(err);
        })
        .finally(()=>setLoading(false))
    }

    useEffect(() => {
        handleSearch()
    }, [])

    return (
        <div className='home'>
            <div className="banner">
                <h1>Search your favourite movie...</h1>
                <form className='search' onSubmit={handleSearch} >
                    <input 
                        type="text" 
                        className='search-input' 
                        placeholder='Type name of a movie...' 
                        required
                        onChange={e => setSearch(e.target.value)}
                        value={search}
                    />
                    <button 
                        
                        type='submit' 
                        className='btn btn-primary'
                    >Submit</button>
                </form>
            </div>
            <div className="container">
                {
                    loading ? (
                        <Loading />
                    ) : (
                        movies && movies?.length !== 0 ? (
                            <div className="cinema-container">
                                {
                                    movies.map((item) => (
                                        <MovieCard key={item.imdbID} {...item}/>
                                    ))
                                }
                            </div>
                            
                        ) : (
                            <center>
                                <h2>Movies not found</h2>
                            </center>
                        )
                    )
                }
            </div>
        </div>
    )
}

export default Home