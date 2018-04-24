import { InMemoryDbService } from 'angular-in-memory-web-api';

export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const books = [
      {
        id: 1,
        title: 'Moby Dick',
        author: 'Herman Melville'
      }, {
        id: 2,
        title: 'Don Quixote',
        author: 'Miguel de Cervantes'
      }, {
        id: 3,
        title: 'The Great Gatsby',
        author: 'F. Scott Fitzgerald'
      }, {
        id: 4,
        title: 'Hamlet',
        author: 'William Shakespeare'
      }, {
        id: 5,
        title: 'The Adventures of Huckleberry Finn',
        author: 'Mark Twain'
      }, {
        id: 6,
        title: 'Alice\'s Adventures in Wonderland',
        author: 'Lewis Carroll'
      }, {
        id: 7,
        title: 'Gulliver\'s Travels',
        author: 'Jonathan Swift'
      }
    ];
    return {books};
  }
}
