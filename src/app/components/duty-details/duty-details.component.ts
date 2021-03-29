import { Component, OnInit } from '@angular/core';
import { DutyService } from 'src/app/services/duty.service';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-duty-details',
  templateUrl: './duty-details.component.html',
  styleUrls: ['./duty-details.component.css']
})
export class DutyDetailsComponent implements OnInit {
  currentDuty = null;
  message = '';

  constructor(
    private dutyService: DutyService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.message = '';
    this.getDuty(this.route.snapshot.paramMap.get('id'));
  }

  getDuty(id) {
    this.dutyService.get(id)
      .subscribe(
        data => {
          this.currentDuty = data;
          console.log(data);
        },
        error => {
          console.log(error);
        });
  }


  updateDuty() {
    this.dutyService.update(this.currentDuty.id, this.currentDuty)
      .subscribe(
        response => {
          console.log(response);
          this.message = 'The duty was updated successfully!';
        },
        error => {
          console.log(error);
        });
  }

  deleteDuty() {
    this.dutyService.delete(this.currentDuty.id)
      .subscribe(
        response => {
          console.log(response);
          this.router.navigate(['/duties']);
        },
        error => {
          console.log(error);
        });
  }

}
