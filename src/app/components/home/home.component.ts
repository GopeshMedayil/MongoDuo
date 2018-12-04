import { AddconnectionComponent } from './../addconnection/addconnection.component';
import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogConfig, MatDialogRef } from "@angular/material";
import { MatSelectionList, MatSelectionListChange, MatListOption } from '@angular/material';
import { SelectionModel } from '@angular/cdk/collections';

import { MongoimportComponent } from './../mongoimport/mongoimport.component';
import { UtilService } from './../../providers/util.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  filePaths = [];
  connections = [];
  connectionDialogRef: MatDialogRef<AddconnectionComponent>;
  constructor(private dialog: MatDialog, private utilService: UtilService) { }

  ngOnInit() {
    this.connections = this.utilService.getConnections();
  }

  openDialog() {

    const dialogConfig = new MatDialogConfig();

    dialogConfig.autoFocus = true;
    dialogConfig.height = '300px';
    dialogConfig.width = '600px';

    this.connectionDialogRef = this.dialog.open(AddconnectionComponent, dialogConfig);
    this.connectionDialogRef.afterClosed().subscribe(
      (data) => {
        console.log(data);
        this.utilService.setConnection(data);
        this.connections = this.utilService.getConnections();

      }
    );
  }

}
