import { AfterViewInit, Component, OnDestroy, OnInit, ViewChild } from '@angular/core';

import { Subscription } from 'rxjs';
import { DialogBoxComponent } from 'src/app/utils/dialog-box/dialog-box.component';
import { Person } from 'src/app/models/person.model';
import { ApiService } from 'src/app/services/api.service';

import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { MatTable, MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';

@Component({
  selector: 'app-post-http',
  templateUrl: './post-http.component.html',
  styleUrls: ['./post-http.component.css']
})
export class PostHttpComponent implements OnInit, OnDestroy {
  person: Person = new Person();
  personTemplate: Person[];
  dataSource: any;
  postSubscription: Subscription;
  displayedColumns = ['id', 'name', 'age', 'edit'];

  // on passe le compo que l'on interroge et non une chaine en guise de référence
  // L'argument de ViewChild est le compo que l'on veut interroger, le type est là par commodité mais peut être omis (mais aucune ide du TS du coup)
  @ViewChild(MatTable, { static: true }) table: MatTable<any>;
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor(
    private apiService: ApiService,
    private dialog: MatDialog
  ) { }

  ngOnInit(): void {
    this.getListPerson();
  }

  getListPerson(): void {
    this.postSubscription = this.apiService.getListPersonService()
      //L'observer clone l'objet de l'observable en utilisant la forme connue dans le modèle Person.
      .subscribe((value) => {
        this.personTemplate = value;
        this.dataSource = new MatTableDataSource<Person>(this.personTemplate);
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
      })
  }

  addPerson(): void {
    this.apiService.addPersonService(this.person)
      .subscribe((res) => {
        /* A titre informatif nous affichons en console les headers
        et le body de la requête : ceci est facultatif */
        console.log(res.headers);
        console.log(res.body);
        this.getListPerson();
      })
  }

  deletePerson(id: number) {
    this.apiService.deletePersonService(id).subscribe();
    this.getListPerson();
  }

  updatePerson(person: Person): void {
    this.apiService.updatePersonService(person).subscribe((res) => {
      console.log(res);
    })
  }

  /////////////////////////////////////////////////////////////////////////////////////////-->
  //////////////////////////////PARTIE TUTO DATATABLE /////////////////////////////////////-->
  /* 
  on passe la boite de dialogue à ouvrir (DialogBoxComponent) dans la propriété MatDialogRef du service MatDialog
  MatDialogRef fournit la gestion de la popup, elle permet d'effectuer des actions sur la popup
  peut être utile à la fermeture de la popup car il se comporte comme un observable avec afterclosed()
  qui emettra les donnees d'ajout de ligne ou d'update à l'observer
  la méthode open renvoie une instance de MatDialogRef
  */
  openDialog(person) {
    console.log("entrée opendialog")

    const dialogRef: MatDialogRef<DialogBoxComponent> = this.dialog.open(DialogBoxComponent, {
      width: '400px',
      data: person
    });
    dialogRef.afterClosed().subscribe(() => {
      this.updatePerson(person);
    });
    this.table.renderRows();
  }

  ngOnDestroy() {
    this.postSubscription.unsubscribe();
  }
}
