import { Component, OnInit, ChangeDetectorRef, ChangeDetectionStrategy } from '@angular/core';

import { ElectronService } from './../../providers/electron.service';
import { UtilService } from './../../providers/util.service';
@Component({
  selector: 'app-mongoimport',
  templateUrl: './mongoimport.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  styleUrls: ['./mongoimport.component.scss']
})
export class MongoimportComponent implements OnInit {

  filePaths = [];
  test: any;
  executeCommand;

  constructor(public electronService: ElectronService, private ref: ChangeDetectorRef) {
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
    this.filePaths.forEach((value) => {
      console.log("value", value.path);
      var commandStr = `mongoimport -d ${value.name.split('.')[0]} -c ${value.name.split('.')[0]} < ${value.path} --jsonArray `;
      this.executeCommand(commandStr, function (error, stdout, stderr) {
        if (error || stderr) {
          console.log(error || stderr);
        }
        else {
          console.log(stdout);
        }
      });

    })

  }

}
