import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { Person } from 'src/app/models/person.model';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-detail-person',
  templateUrl: './detail-person.component.html',
  styleUrls: ['./detail-person.component.css']
})
export class DetailPersonComponent implements OnInit, OnDestroy {

  person: Person;
  id: number;
  personSubscription: Subscription;

  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private apiService: ApiService
    ) { }

  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe(params => {
      this.id = +params.get('id');
      this.personSubscription = this.apiService.getPersonById(this.id).subscribe((person) => {
        this.person = person;
      });
    });
  }

  onBack() {
    this.router.navigate(['http/post']);
  }

  ngOnDestroy() {
    this.personSubscription.unsubscribe();
  }

}
