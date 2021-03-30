import { Component, OnInit } from '@angular/core';
import { DutyService } from 'src/app/services/duty.service';

@Component({
  selector: 'app-duties-list',
  templateUrl: './duties-list.component.html',
  styleUrls: ['./duties-list.component.css']
})
export class DutiesListComponent implements OnInit {

  duties: any;
  currentDuty = null;
  currentIndex = -1;
  title = '';

  constructor(private dutyService: DutyService) { }

  ngOnInit(): void {
    this.retrieveDuties();
    this.duties = '';

  }

  retrieveDuties() {
    this.dutyService.getAll()
      .subscribe(
        data => {
          this.duties = data;
        },
        error => {
          console.log(error);
        });
  }

  refreshList() {
    this.retrieveDuties();
    this.currentDuty = null;
    this.currentIndex = -1;
  }

  setActiveDuty(duty, index) {
    this.currentDuty = duty;
    this.currentIndex = index;
  }

  removeAllDuties() {
    this.dutyService.deleteAll()
      .subscribe(
        response => {
          console.log(response);
          this.retrieveDuties();
        },
        error => {
          console.log(error);
        });
  }

}
