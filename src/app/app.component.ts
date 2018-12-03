import { Component } from '@angular/core';
import { ElectronService } from './providers/electron.service';
import { TranslateService } from '@ngx-translate/core';
import { AppConfig } from '../environments/environment';
const slash = require('slash');
import * as path from 'path';
const url = require("url");
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  test;
  constructor(public electronService: ElectronService,
    private translate: TranslateService) {
    var url = require("url")
    var filePath = 'C:\Users\myname\est.swf';
    var fileUrl = url.parse(url.format({
      protocol: 'file',
      slashes: true,
      pathname: filePath,
    })).href;
    console.log(fileUrl)
    this.test = "fileUri"
    // var exec = electronService.childProcess.exec;
    // var commandStr = 'mongoimport -d test123 -c collection --file C:/Users/HP/Desktop/db.json --jsonArray';

    // exec(commandStr, function (error, stdout, stderr) {
    //   if (error || stderr) console.log(error || stderr);
    //   else console.log(stdout);
    // });

    translate.setDefaultLang('en');
    console.log('AppConfig', AppConfig);

    if (electronService.isElectron()) {
      console.log('Mode electron');
      console.log('Electron ipcRenderer', electronService.ipcRenderer);
      console.log('NodeJS childProcess', electronService.childProcess);
    } else {
      console.log('Mode web');
    }
  }
}
