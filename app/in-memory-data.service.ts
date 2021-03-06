import { InMemoryDbService } from 'angular2-in-memory-web-api';


export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    let heroes = [
      { id: 42, name: 'The Kraken' },
      { id: 8, name: 'Saoirse' },
      { id: 17, name: 'Professor Brainstorm' },
      { id: 18, name: 'Magman' },
      { id: 19, name: 'Whirlgirl' },
      { id: 20, name: 'Tommy Tsunami' },
      { id: 43, name: 'Ticklemonster' },
      { id: 55, name: 'Clawverine' },
      { id: 44, name: 'Tigermouse' },
      { id: 32, name: 'Badhorse' },
      { id: 99, name: 'Nimby' },
      { id: 38, name: 'SkateDad' },
      { id: 34, name: 'Dave' },
      { id: 9000, name: 'Fabreeza' },
      { id: 67, name: 'Paul Fleischman' },
      { id: 23, name: 'X' },
      { id: 777, name: 'Anhell' },
      { id: 11, name: 'Big Papa' },
    ];
    return {heroes};
  }
}
