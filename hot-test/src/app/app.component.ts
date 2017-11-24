import { Component, ViewChild } from '@angular/core';
import { HotTable } from 'ng2-handsontable';
import * as Handsontable from 'handsontable';






@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {


  @ViewChild(HotTable) hotTableComponent;

  title = 'app';

  data = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
  ];

  // columns = [
  //   {
  //     renderer: 'dropdown2',
  //     source: ['yellow', 'red', 'orange', 'green', 'blue', 'gray', 'black', 'white']
  //   },
  //   {

  //   },
  //   {
  //   }
  // ];



  options = {
    cells: (row, col, prop) => {
      const cellProperties = {};
      if (row > 0 && col === 0) {
        Object.assign(cellProperties, {renderer: this.customRenderer});
        return cellProperties;
      }
      return prop;
    }

  };


  customRenderer(hotInstance, td, row, column, prop, value, cellProperties) {
    Handsontable.renderers.BaseRenderer.apply(this, arguments);
    td.style.fontWeight = 'bold';
    td.style.textAlign = 'center';
  }

}
