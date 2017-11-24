import { Component, ViewChild } from '@angular/core';
import { HotTable } from 'ng2-handsontable';
import * as Handsontable from 'handsontable';



const CustomEditor1 = Handsontable.editors.AutocompleteEditor.prototype.extend();


CustomEditor1.prototype.queryChoices = function(query) {
  this.query = query;
  const source = this.cellProperties.source;

  if (typeof source === 'function') {
    source.call(this.cellProperties, query, (choices) => {
      this.rawChoices = choices;
      this.updateChoicesList(this.stripValuesIfNeeded(choices));
    });

  } else if (Array.isArray(source)) {
    this.rawChoices = source;
    this.updateChoicesList(this.stripValuesIfNeeded(source));

  } else {
    this.updateChoicesList([]);
  }
};

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
        { id: 1, value: 'aaa' },
        { id: 2, value: 'bbb' },
        { id: 3, value: 'ccc' },
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
