import { Component, OnInit } from '@angular/core';

import { ElectronService } from './../../providers/electron.service';
import { UtilService } from './../../providers/util.service';
import { style, animate, animation, animateChild, keyframes, useAnimation, group, sequence, transition, state, trigger, query as q, stagger } from '@angular/animations';
const query = (s, a, o = { optional: true }) => q(s, a, o);
@Component({
  selector: 'app-mongoimport',
  templateUrl: './mongoimport.component.html',
  styleUrls: ['./mongoimport.component.scss'],
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
        //style({ opacity: 0 }),
        // and animate toward the "in" state above
        //animate(600)
        animate("600ms", keyframes([
          style({ transform: 'scale(0)' }),
          style({ transform: 'scale(1)' }),

        ]))
        // style({ transform: 'scale(0.5)', opacity: 0 }),
        // animate('600ms cubic-bezier(0.895, 0.03, 0.685, 0.22)',
        //   style({ transform: 'scale(1)', opacity: 1 }))
      ]),
      transition(':leave', [
        //animate(600, style({ opacity: 0, transform: 'scale(0.5)' }))
        animate("600ms", keyframes([
          style({ transform: 'scale(1)' }),
          style({ transform: 'scale(0)' }),

        ]))
        // style({ transform: 'scale(1)', opacity: 1, height: '*' }),
        // animate('600ms cubic-bezier(0.895, 0.03, 0.685, 0.22)',
        //   style({ transform: 'scale(0.5)', opacity: 0, height: '0px', margin: '0px' }))
      ]),
    ])
  ]
})
export class MongoimportComponent implements OnInit {

  filePaths = [];
  test: any;
  executeCommand;

  constructor(public electronService: ElectronService) {
    this.executeCommand = this.electronService.childProcess.exec;

  }

  ngOnInit() {
    this.test = "Gopesh"

  }
  openDialog() {
    (<HTMLInputElement>document.getElementById("uploadInput")).click();

  };

  handleFiles = () => {
    var fileNames = (<HTMLInputElement>document.getElementById("uploadInput")).files;
    this.filePaths.push.apply(this.filePaths, fileNames);
    console.log("Filkes", this.filePaths)
  };

  removeFile = (file) => {
    if (file) {
      this.filePaths.splice(this.filePaths.indexOf(file), 1);
      (<HTMLInputElement>document.getElementById("uploadInput")).value = "";

    }
  }

  sendFiles = () => {
    var that = this;
    var count = 0;
    this.filePaths.forEach((value, index) => {
      console.log("value", index);


      var commandStr = `mongoimport -d ${value.name.split('.')[0]} -c ${value.name.split('.')[0]} < ${value.path} --jsonArray `;
      this.executeCommand(commandStr, function (error, stdout) {
        if (error) {
          console.log(count);

          console.log("ERROR", error);
        }
        else {
          count = count + 1;
          if (count == that.filePaths.length) {
            console.log("completed");
            alert("import success")
          }


        }
      });

    })

  }

}
