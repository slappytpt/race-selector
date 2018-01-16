import { Component, OnInit } from '@angular/core';
import { Race } from '../race';
import { RaceService } from '../race-service.service';


@Component({
  selector: 'app-races',
  templateUrl: './races.component.html',
  styleUrls: ['./races.component.css']
})
export class RacesComponent implements OnInit {

	races: Race[];

	constructor(private raceService: RaceService) { }

	

	getRaces(): void {
	  this.raceService.getRaces()
	      .subscribe(races => this.races = races);
	}

	ngOnInit() {
	  this.getRaces();
	}

}
