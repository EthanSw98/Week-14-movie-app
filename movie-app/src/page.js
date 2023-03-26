import Header from './Header.js';
import MovieList from './MovieList.js';



export default function Page(){
    return(
        <div className="container-fluid bg-dark">
            < Header/>
            <div className='container'>
                < MovieList/>    
            </div>
            
        </div>
    )
}