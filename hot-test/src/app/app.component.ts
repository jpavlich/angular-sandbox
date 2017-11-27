import { Component, ViewChild } from '@angular/core';
import { HotTable } from 'ng2-handsontable';
import * as Handsontable from 'handsontable';



const CustomEditor1 = Handsontable.editors.AutocompleteEditor.prototype.extend();


CustomEditor1.prototype.queryChoices = function (query) {
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
  const { allowHtml } = this.cellProperties;

  const stringifiedValues = values;// values.map((value) => value.id);
  // const strippedValues = arrayMap(stringifiedValues, (value) => (allowHtml ? value : stripTags(value)));
  const strippedValues = stringifiedValues; // TODO Remover tags html
  console.log(values);
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
        { id: 4, value: 'bbb' },
        { id: 7, value: 'ccc' },
      ]
    },
    {

    },
    {
    }
  ];

  options = {
    columnSorting: true,
    contextMenu: [
      'row_above', 'row_below', 'remove_row'
    ]
  };

  dropdownRenderer(hotInstance: HotTable, td, row, column, prop, value, cellProperties) {
    Handsontable.renderers.BaseRenderer.apply(this, arguments);
    const valueMap = cellProperties.source.reduce(function (map, obj) {
      map[obj.id] = obj.value;
      return map;
    }, {});

    if (td.children.length > 0) {
      td.removeChild(td.firstChild);
    }
    const selectList = document.createElement('select');
    td.appendChild(selectList);


    cellProperties.source.forEach(d => {
      const option = document.createElement('option');
      option.value = d.id;
      option.text = d.value;
      selectList.appendChild(option);
    });
    selectList.value = value;
    selectList.onchange = (event) => {
      console.log(event);
      // const sourceData = hotInstance.getHandsontableInstance().getSourceDataAtCell(row, prop);
    // TODO See https://github.com/tdjun/Handsontable-autocomplete2/blob/master/autocomplete2.editor.js


    };
  }

  afterChange(event) {
    console.log(event);
  }

}
