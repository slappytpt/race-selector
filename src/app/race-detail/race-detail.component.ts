import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { DatePipe } from '@angular/common';

import { Race } from '../race';
import { RaceService }  from '../race-service.service';

@Component({
  selector: 'app-race-detail',
  templateUrl: './race-detail.component.html',
  styleUrls: ['./race-detail.component.css']
})
export class RaceDetailComponent implements OnInit {
  @Input() race: Race;

  constructor(
  	private route: ActivatedRoute,
  	private raceService: RaceService,
  	private location: Location
  ) { }

  ngOnInit() {
  	this.getRace();
  }

  goToLink()
  {
      alert("go to race web site")
  }

  addToSeason(){
      alert("add to season");
  }

  getRace(): void {

	  const id = +this.route.snapshot.paramMap.get('id');
	  this.raceService.getRace(id)
	    .subscribe(race => this.race = race);

	}

  goBack(): void {
  
    this.location.back();
  }

}