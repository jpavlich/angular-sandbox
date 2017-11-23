import { Component, AfterViewInit, ViewChild } from '@angular/core';
import {HotTable} from 'ng2-handsontable';


declare function registerCustomDropdown(hot);

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements AfterViewInit {

  @ViewChild(HotTable) hotTableComponent;

  title = 'app';

  data = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
  ];

  columns = [{
    data: 'UserName', // from datasource
    editor: 'select2',
    select2Options: { // these options are the select2 initialization options
      data: [{ id: 1, text: 'jsmith' }, { id: 2, text: 'wjones' }],
      dropdownAutoWidth: true,
      allowClear: true,
      width: 'resolve'
    }
  }
  ];

  options = {};

  ngAfterViewInit() {
    registerCustomDropdown(this.hotTableComponent.getHandsontableInstance());

  }
}
