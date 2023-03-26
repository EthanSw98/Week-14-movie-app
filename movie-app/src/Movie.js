import ReviewCard from './ReviewCard.js';

export default function Movie(movie){
    return(
        <div className='card' id='moviecontainer'>
            <section>
                <ul className='list-unstyled'>
                    <li className='media row mt-4'>
                        <img src={movie.image} id='movie-image' className='img-fluid rounded' alt='movie'></img>
                    </li>
                    <li>
                        <div className='media-body col-lg'>
                            <div><h4 id='title'>{movie.title}</h4></div>
                            <p id='about'>{movie.about}</p>
                            <div>{movie.year}</div>
                            <div>{movie.rating}</div>
                            <div>{movie.runtime}</div>
                            <div> < ReviewCard/></div>
                        </div>
                    </li>
                </ul>
            </section>
        </div>
    );
}