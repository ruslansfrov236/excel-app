import { CommonModule } from '@angular/common';
import { Component, ViewEncapsulation, Inject, ViewChild } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { DropDownButtonModule } from '@syncfusion/ej2-angular-splitbuttons';

import {  SpreadsheetAllModule, SpreadsheetModule } from '@syncfusion/ej2-angular-spreadsheet';



import { SpreadsheetComponent, BeforeSaveEventArgs, BeforeOpenEventArgs } from '@syncfusion/ej2-angular-spreadsheet';
import { getDefaultData } from './entities/data';


@Component({
  selector: 'app-root',
  standalone: true,
  encapsulation: ViewEncapsulation.None,

    imports: [  RouterModule,    DropDownButtonModule,
      SpreadsheetAllModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {

  @ViewChild('default')
  spreadsheetObj!: SpreadsheetComponent;
public data:Object[]=getDefaultData;
public openUrl = 'https://services.syncfusion.com/angular/production/api/spreadsheet/open';
public saveUrl = 'https://services.syncfusion.com/angular/production/api/spreadsheet/save';
created() {
    this.spreadsheetObj.cellFormat({ fontWeight: 'bold', textAlign: 'center', verticalAlign: 'middle' }, 'A1:F1');
    this.spreadsheetObj.cellFormat({ fontWeight: 'bold' }, 'E31:F31');
    this.spreadsheetObj.cellFormat({ textAlign: 'center' }, 'E31');
    this.spreadsheetObj.numberFormat('$#,##0.00', 'F2:F31');
}
}
