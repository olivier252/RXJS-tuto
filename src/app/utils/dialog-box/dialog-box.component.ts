import { Component, Inject, Optional } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Person } from 'src/app/models/person.model';


@Component({
  selector: 'app-dialog-box',
  templateUrl: './dialog-box.component.html',
  styleUrls: ['./dialog-box.component.css']
})
export class DialogBoxComponent {
 // action: string;
  local_data: any;
  person: Person;

  constructor(
    private dialogRef: MatDialogRef<DialogBoxComponent>,
    @Optional() @Inject(MAT_DIALOG_DATA) public data: Person)
    {
    this.local_data = { ...data };
  }

  doAction() {
    this.dialogRef.close({
     // event: this.action, 
      data: this.local_data
    });
    console.log("doaction")
    console.log(this.local_data)
  }

  closeDialog() {
    this.dialogRef.close({event:'Cancel'});
  }
}
