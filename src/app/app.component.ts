import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

type Movie = {
  title: string;
  year: number;
  director: string;
  genre: string[];
  score: number;
};

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  movies: Movie[] = [
    {
      title: 'The Shawshank Redemption',
      year: 1994,
      director: 'Frank Darabont',
      genre: ['Crime', 'Drama'],
      score: 9.3,
    },
    {
      title: 'The Godfather',
      year: 1972,
      director: 'Francis Ford Coppola',
      genre: ['Crime', 'Drama'],
      score: 9.2,
    },
    {
      title: 'The Godfather: Part II',
      year: 1974,
      director: 'Francis Ford Coppola',
      genre: ['Crime', 'Drama'],
      score: 9,
    },
    {
      title: 'The Dark Knight',
      year: 2008,
      director: 'Christopher Nolan',
      genre: ['Action', 'Crime', 'Drama', 'Thriller'],
      score: 9,
    },
    {
      title: '12 Angry Men',
      year: 1957,
      director: 'Sidney Lumet',
      genre: ['Crime', 'Drama'],
      score: 8.9,
    },
    {
      title: 'Schindler"s List',
      year: 1993,
      director: 'Steven Spielberg',
      genre: ['Biography', 'Drama', 'History'],
      score: 8.9,
    },
    {
      title: 'Pulp Fiction',
      year: 1994,
      director: 'Quentin Tarantino',
      genre: ['Crime', 'Drama'],
      score: 8.9,
    },
    {
      title: 'The Lord of the Rings: The Return of the King',
      year: 2003,
      director: 'Peter Jackson',
      genre: ['Adventure', 'Drama', 'Fantasy'],
      score: 8.9,
    },
    {
      title: 'Il buono, il brutto, il cattivo',
      year: 1966,
      director: 'Sergio Leone',
      genre: ['Western'],
      score: 8.9,
    },
    {
      title: 'Fight Club',
      year: 1999,
      director: 'David Fincher',
      genre: ['Drama'],
      score: 8.8,
    },
    {
      title: 'The Lord of the Rings: The Fellowship of the Ring',
      year: 2001,
      director: 'Peter Jackson',
      genre: ['Adventure', 'Drama', 'Fantasy'],
      score: 8.8,
    },
    {
      title: 'Forrest Gump',
      year: 1994,
      director: 'Robert Zemeckis',
      genre: ['Comedy', 'Drama', 'Romance'],
      score: 8.8,
    },
    {
      title: 'Star Wars: Episode V - The Empire Strikes Back',
      year: 1980,
      director: 'Irvin Kershner',
      genre: ['Action', 'Adventure', 'Fantasy', 'Sci-Fi'],
      score: 8.8,
    },
    {
      title: 'Inception',
      year: 2010,
      director: 'Christopher Nolan',
      genre: ['Action', 'Adventure', 'Sci-Fi', 'Thriller'],
      score: 8.8,
    },
    {
      title: 'The Lord of the Rings: The Two Towers',
      year: 2002,
      director: 'Peter Jackson',
      genre: ['Adventure', 'Drama', 'Fantasy'],
      score: 8.7,
    },
    {
      title: 'One Flew Over the Cuckoo"s Nest',
      year: 1975,
      director: 'Milos Forman',
      genre: ['Drama'],
      score: 8.7,
    },
    {
      title: 'Goodfellas',
      year: 1990,
      director: 'Martin Scorsese',
      genre: ['Crime', 'Drama'],
      score: 8.7,
    },
    {
      title: 'The Matrix',
      year: 1999,
      director: 'Lana Wachowski',
      genre: ['Action', 'Sci-Fi'],
      score: 8.7,
    },
    {
      title: 'Shichinin no samurai',
      year: 1954,
      director: 'Akira Kurosawa',
      genre: ['Adventure', 'Drama'],
      score: 8.7,
    },
  ];
  moreMovies: Movie[] = [
    {
      title: 'Star Wars',
      year: 1977,
      director: 'George Lucas',
      genre: ['Action', 'Adventure', 'Fantasy', 'Sci-Fi'],
      score: 8.7,
    },
    {
      title: 'Cidade de Deus',
      year: 2002,
      director: 'Fernando Meirelles',
      genre: ['Crime', 'Drama'],
      score: 8.7,
    },
    {
      title: 'Se7en',
      year: 1995,
      director: 'David Fincher',
      genre: ['Crime', 'Drama', 'Mystery', 'Thriller'],
      score: 8.6,
    },
    {
      title: 'The Silence of the Lambs',
      year: 1991,
      director: 'Jonathan Demme',
      genre: ['Crime', 'Drama', 'Thriller'],
      score: 8.6,
    },
    {
      title: 'It"s a Wonderful Life',
      year: 1946,
      director: 'Frank Capra',
      genre: ['Drama', 'Family', 'Fantasy'],
      score: 8.6,
    },
    {
      title: 'La vita ?? bella',
      year: 1997,
      director: 'Roberto Benigni',
      genre: ['Comedy', 'Drama', 'War'],
      score: 8.6,
    },
    {
      title: 'The Usual Suspects',
      year: 1995,
      director: 'Bryan Singer',
      genre: ['Crime', 'Drama', 'Mystery', 'Thriller'],
      score: 8.6,
    },
    {
      title: 'L??on',
      year: 1988,
      director: 'Luc Besson',
      genre: ['Crime', 'Drama', 'Thriller'],
      score: 8.6,
    },
    {
      title: 'Saving Private Ryan',
      year: 1998,
      director: 'Steven Spielberg',
      genre: ['Drama', 'War'],
      score: 8.6,
    },
    {
      title: 'Sen to Chihiro no kamikakushi',
      year: 2001,
      director: 'Hayao Miyazaki',
      genre: ['Animation', 'Adventure', 'Family', 'Fantasy', 'Mystery'],
      score: 8.6,
    },
    {
      title: 'American History X',
      year: 1998,
      director: 'Tony Kaye',
      genre: ['Crime', 'Drama'],
      score: 8.5,
    },
    {
      title: 'C"era una volta il West',
      year: 1968,
      director: 'Sergio Leone',
      genre: ['Western'],
      score: 8.6,
    },
    {
      title: 'Interstellar',
      year: 2014,
      director: 'Christopher Nolan',
      genre: ['Adventure', 'Drama', 'Sci-Fi'],
      score: 8.6,
    },
  ];

  //|////////////////////|/
  //|/put your code here/|/
  //V////////////////////V/

  title = 'Movie List';

  sortKey: string;
  sortDirection: 'asc' | 'desc' = 'asc';
  genreTerm: string;
  titleSearchTerm: string;
  yearSearchTerm: string;
  directorSearchTerm: string;
  scoreSearchTerm: string;
  isModalOpen = false;
  selectedMovie: Movie;

  genres: string[] = [
    ...new Set(
      this.movies.reduce((acc, movie) => [...acc, ...movie.genre], [])
    ),
  ];

  get filteredMovies() {
    return this.movies.filter((movie) => {
      return (
        (!this.titleSearchTerm ||
          movie.title
            .toLowerCase()
            .includes(this.titleSearchTerm.toLowerCase())) &&
        (!this.yearSearchTerm ||
          movie.year.toString().includes(this.yearSearchTerm)) &&
        (!this.directorSearchTerm ||
          movie.director
            .toLowerCase()
            .includes(this.directorSearchTerm.toLowerCase())) &&
        (!this.scoreSearchTerm ||
          movie.score.toString().includes(this.scoreSearchTerm))
      );
    });
  }

  sort(key: string) {
    if (this.sortKey === key) {
      this.sortDirection = this.sortDirection === 'asc' ? 'desc' : 'asc';
    } else {
      this.sortKey = key;
      this.sortDirection = 'asc';
    }
  }

  filterGenre(genreEvent: Event) {
    this.genreTerm = (genreEvent.target as HTMLSelectElement).value;
  }

  removeMovie(movie) {
    const index = this.movies.indexOf(movie);
    this.movies.splice(index, 1);
  }

  openModal() {
    this.isModalOpen = true;
  }

  addMovie() {
    this.movies.push(this.selectedMovie);
    this.moreMovies = this.moreMovies.filter((m) => m !== this.selectedMovie);
    this.selectedMovie = null;
    this.isModalOpen = false;
  }

  onSubmit(form: NgForm) {
    console.log(form.value.title);
    console.log(form.value.year);
    console.log(form.value.director);
    console.log(form.value.genre.split(','));
    console.log(form.value.score);

    let newMovie = {
      title: form.value.title,
      year: form.value.year,
      director: form.value.director,
      genre: form.value.genre.split(','),
      score: form.value.score,
    };

    // Add the new movie to your movies array
    this.movies.push(newMovie);
    form.reset();
    this.isModalOpen = false;
  }
  //^////////////////////^/
  //|////////////////////|/
  //|////////////////////|/
}
