import React from 'react';

import intent from './intent';
import model from './model';
import view from './view';

function main() {
  let actions = intent();
  let state$ = model(actions);
  let output$ = view(state$);

  return output$;
}

let target = document.getElementById('app');

main().subscribe(Output => React.render(Output, target));

// load up fixture data
let fixtureData = {
  columns: ['ID (fixed width)' , 'ID * 10', 'Random Number'],
  defaultColumnWidths: [300, null, null],
  rows: []
};
let i = 0;
for (i = 0; i < 1000000; i++) {
  fixtureData.rows.push([
    i,
    i * 10,
    Math.floor(Math.random() * 1000000)
  ]);
}


import {tableData$} from './intents/table-data';

tableData$.onNext(fixtureData);


// hans add dynamic data
setInterval(()=>{

  fixtureData.rows.push([
    i,
    i * 10,
    Math.floor(Math.random() * 1000000)
  ]);
  i++;
  tableData$.onNext(fixtureData);
},0);
