import { Component, ViewChild } from '@angular/core';
import { HotTable } from 'ng2-handsontable';
import * as Handsontable from 'handsontable';



const CustomEditor1 = Handsontable.editors.AutocompleteEditor.prototype.extend();

// CustomEditor1.prototype.createElements = function () {
//   // Call the original createElements method
//   Handsontable.editors.TextEditor.prototype.createElements.apply(this, arguments);
CustomEditor1.prototype.stripValuesIfNeeded = function (values) {
  const {allowHtml} = this.cellProperties;

  const stringifiedValues = values.map((value) => JSON.stringify(value));
  // const strippedValues = arrayMap(stringifiedValues, (value) => (allowHtml ? value : stripTags(value)));
  const strippedValues = stringifiedValues; // TODO Remover tags html
  console.log('--->');//, strippedValues);
  return strippedValues;
};

// };


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

  columns = [
    {
      renderer: this.dropdownRenderer,
      editor: CustomEditor1,
      source: [
        JSON.stringify({ id: 1, value: 'aaa' }),
        JSON.stringify({ id: 2, value: 'bbb' }),
        JSON.stringify({ id: 3, value: 'ccc' }),
      ]
    },
    {

    },
    {
    }
  ];

  dropdownRenderer(hotInstance, td, row, column, prop, value, cellProperties) {
    const data = JSON.parse(value);
    Handsontable.renderers.AutocompleteRenderer.apply(this, [hotInstance, td, row, column, prop, data.value, cellProperties]);
    td.style.fontWeight = 'bold';
    td.style.textAlign = 'center';

    return td;
  }

}
