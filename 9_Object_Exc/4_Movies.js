function solve(commands) {
    const movies = [];

    commands.forEach(command => {
        if (command.startsWith('addMovie ')) {
            const name = command.substring('addMovie '.length);
            movies.push({ name });
          } else if (command.includes(' directedBy ')) {
            const [name, director] = command.split(' directedBy ');
            const movie = movies.find(movie => movie.name === name);
            if (movie) movie.director = director;
        } else if (command.includes(' onDate ')) {
            const [name, date] = command.split(' onDate ');
            const movie = movies.find(movie => movie.name === name);
            if (movie) movie.date = date;
        }
    });

    // Filter out any movies that are missing a name, director, or date
    const completeMovies = movies.filter(movie => movie.name && movie.director && movie.date);

    // Print each complete movie as JSON
    completeMovies.forEach(movie => console.log(JSON.stringify(movie)));
}


function solveT(input) {
  //define structure array of objects
  const movies = [];
const addMovieCommand='addMovie';
const directedByCommand='directedBy';
const onDateCommand='onDate';

  for (const row of input) {
    if (row.includes(addMovieCommand)) {
       const  movie={
            name:row.substring(addMovieCommand.length+1),
        }
      movies.push(movie);

    } else if (row.includes(directedByCommand)) {

        const [movieName, director]= row.split(` ${directedByCommand} `);

        const movie=movies.find(movie => movie.name===movieName);

 if(movie){
    movie.director=director;
 }

    } else if (row.includes(onDateCommand)) {
        const [movieName, date]= row.split(` ${onDateCommand} `);
        const movie=movies.find(movie => movie.name===movieName);

        if(movie){
            movie.date=date;
         }
        
    }
  }
 movies
 .filter(movie=>movie.director&&movie.date)
 .forEach(movie=>console.log(JSON.stringify(movie)));
}

// Example usage
solveT([
    'addMovie Fast and Furious',
    'addMovie Godfather',
    'Inception directedBy Christopher Nolan',
    'Godfather directedBy Francis Ford Coppola',
    'Godfather onDate 29.07.2018',
    'Fast and Furious onDate 30.07.2018',
    'Batman onDate 01.08.2018',
    'Fast and Furious directedBy Rob Cohen'
]);
