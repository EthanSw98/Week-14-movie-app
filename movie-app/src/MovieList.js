import Movie from './Movie.js'

export default function MovieList(){


    let movieOne = {
        image:
            "https://m.media-amazon.com/images/M/MV5BMTU2NjA1ODgzMF5BMl5BanBnXkFtZTgwMTM2MTI4MjE@._V1_.jpg",
        title: "John Wick",
        year: "2014",
        rating: "R",
        runtime: "1h 41min",
    };

    let movieTwo = {
        image:
            "https://upload.wikimedia.org/wikipedia/en/a/ab/Cocaine_Bear_poster.jpg",
        title: "Cocaine Bear",
        year: "2023",
        rating: "R",
        runtime: "1h 35min",
    };
    let movieThree = {
        image:"https://upload.wikimedia.org/wikipedia/en/thumb/3/30/Ant-Man_and_the_Wasp_Quantumania_poster.jpg/220px-Ant-Man_and_the_Wasp_Quantumania_poster.jpg",
        title: "Ant Man And The Wasp-Qauatumania",
        year: "2023",
        rating: "PG13",
        runtime: "2h 10min",
    };
    let movieFour = {
        image:"https://upload.wikimedia.org/wikipedia/en/f/f3/TheWhalePoster.jpg",
        title: "The Whale",
        year: "2022",
        rating: "R",
        runtime: "1h 57min",
    };

    return(
        <div className='row'>
            <div className='col-sm'>
                 <Movie {...movieOne} />
            </div>
            <div className='col-sm'>
                 <Movie {...movieTwo} />
            </div>
            <div className='col-sm'>
                 <Movie {...movieThree}/>
            </div>
            <div className='col-sm'>
                 <Movie {...movieFour} />
            </div>
        </div>
    )
}