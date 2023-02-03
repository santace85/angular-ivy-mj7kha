import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'genreFilter',
})
export class GenreFilterPipe implements PipeTransform {
  transform(movies: any[], genreTerm: string): any[] {
    if (!movies) return [];
    if (!genreTerm) return movies;

    return movies.filter((movie) => movie.genre.includes(genreTerm));
  }
}
