import { Component, OnInit } from '@angular/core';
import { DutyService } from 'src/app/services/duty.service';


@Component({
  selector: 'app-add-duty',
  templateUrl: './add-duty.component.html',
  styleUrls: ['./add-duty.component.css']
})
export class AddDutyComponent implements OnInit {
  duty = {
    title: '',
    description: '',
  };
  submitted = false;

  constructor(private dutyService: DutyService) { }


  ngOnInit(): void {
  }

  saveDuty() {
    console.log('save');
    const data = {
      title: this.duty.title,
      description: this.duty.description
    };

    this.dutyService.create(data)
      .subscribe(
        response => {
          console.log(response);
          this.submitted = true;
        },
        error => {
          console.log(error);
        });
  }

  newDuty() {
    this.submitted = false;
    this.duty = {
      title: '',
      description: '',
    };
  }
}


