import { Component, OnInit } from '@angular/core';
import { Person } from 'src/app/models/person.model';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-errors',
  templateUrl: './errors.component.html',
  styleUrls: ['./errors.component.css']
})
export class ErrorsComponent implements OnInit {
  personTemplate: Person[];
  errorMessage: string;
  boolMessage: boolean;

  constructor(private apiService: ApiService) { }

  ngOnInit(): void {
    this.getListPerson();
  }

  getListPerson(): void {
    this.apiService.getListPerson_With_Error_Handlers()
      .subscribe(
        (value) => this.personTemplate = value,
        (err) => {
          this.boolMessage =true;
          this.errorMessage = err
        }
      )
  }
}
