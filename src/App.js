
import { useEffect } from 'react';

// 9922fd11

const API_URL = 'https://www.ombdapi.com?apikey=9922fd11'

const App = () => {

    const searchMovies = async (title) => {
        const response = await fetch(`${API_URL}&s=${title}`)
        const data = await response.json();

        console.log(data);
    }

    useEffect(() => {
        searchMovies('Blade Runner')
    }, [])

    return (
        <h1>App</h1>
    );
}

export default App;