import { Injectable } from '@angular/core';
import { Race } from './race';
import { RACES } from './race-data';

import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';

import { MessageService } from './message.service';

@Injectable()
export class RaceService {

  constructor(private messageService: MessageService) { }


	getRaces(): Observable<Race[]> {
	  this.messageService.add('RaceService: fetched races');
  	  return of(RACES);
	}

	getRace(id: number): Observable<Race> {
	
	  // Todo: send the message _after_ fetching the race
	  this.messageService.add(`RaceService: fetched race id=${id}`);
	  return of(RACES.find(race => race.id === id));
	}

}
