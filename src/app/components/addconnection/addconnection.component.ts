import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-addconnection',
  templateUrl: './addconnection.component.html',
  styleUrls: ['./addconnection.component.scss']
})
export class AddconnectionComponent implements OnInit {
  connectionForm: FormGroup;
  constructor(private dialogRef: MatDialogRef<AddconnectionComponent>) { }

  ngOnInit() {
    this.connectionForm = new FormGroup({
      connectionName: new FormControl(),
      connectionUri: new FormControl()
    })
  }
  saveConnection(form) {
    console.log(form.value)
    this.dialogRef.close(form.value);

  }

}
