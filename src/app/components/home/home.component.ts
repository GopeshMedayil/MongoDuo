import { AddconnectionComponent } from './../addconnection/addconnection.component';
import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogConfig, MatDialogRef } from "@angular/material";
import { MatSelectionList, MatSelectionListChange, MatListOption } from '@angular/material';
import { SelectionModel } from '@angular/cdk/collections';

import { MongoimportComponent } from './../mongoimport/mongoimport.component';
import { UtilService } from './../../providers/util.service';
import { style, animate, animation, animateChild, useAnimation, group, sequence, transition, state, trigger, query as q, stagger } from '@angular/animations';
const query = (s, a, o = { optional: true }) => q(s, a, o);

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  animations: [
    // nice stagger effect when showing existing elements
    trigger('list', [
      transition(':enter', [
        // child animation selector + stagger
        query('@items',
          stagger(300, animateChild())
        )
      ]),
    ]),
    trigger('items', [
      // cubic-bezier for a tiny bouncing feel
      transition(':enter', [
        style({ transform: 'scale(0.5)', opacity: 0 }),
        animate('1s cubic-bezier(.8,-0.6,0.2,1.5)',
          style({ transform: 'scale(1)', opacity: 1 }))
      ]),
      transition(':leave', [
        style({ transform: 'scale(1)', opacity: 1, height: '*' }),
        animate('1s cubic-bezier(.8,-0.6,0.2,1.5)',
          style({ transform: 'scale(0.5)', opacity: 0, height: '0px', margin: '0px' }))
      ]),
    ])
  ]
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
    dialogConfig.disableClose = true;
    dialogConfig.height = '300px';
    dialogConfig.width = '600px';

    this.connectionDialogRef = this.dialog.open(AddconnectionComponent, dialogConfig);
    this.connectionDialogRef.afterClosed().subscribe(
      (data) => {
        console.log(data);
        this.utilService.setConnection(data);
        this.connections.push(data)

      }
    );
  }

}
