import logo from './logo.svg';
import './App.css';
import React, { useState } from "react";
import {DragDropContext, Droppable, Draggable} from "react-beautiful-dnd";
import { render } from 'react-dom';


const wrapper = {
  display: "flex",
  flexGrow: '1',
  justifyContent: "space-between",
}
const DATA = {
  topic: [[{
    id: "002f0db1-5457-46b0-949e-8032d2f9997a",
    name: "Social patterns",
    items: [
      {id: "24fd50b3-3841-496e-8b32-73636f6f4197", name: "3% Milk"},
      {id: "b239d50-d0a6-46f8-96e3-7f3f0f9a2525", name: "Butter"},
    ],
    tint: 1,
  },
    {
      id: "4837f68b4-1746-438c-920e-d67b7df46247",
      name: "Kites",
      items: [
        {
          id: "9f5ee6a5d-f927-4579-8c15-2b4eb86210ae",
          name: "Designive Applications",
        },
        {id: "594eb-6bde-4411-b438-1c37fa6af364", name: "Atomibits"},
      ],
      tint: 2,
    },
    {
      id: "25da4t4ffdc-aae0-4bd31-43f73101e7c0",
      name: "song",
      items: [
        {id: "960cbbcf-89a0-4d79-abc15eacc", name: "Workbench"},
        {id: "d3edf796-64496965a025b", name: "Hammer"},
      ],
      tint: 3,
    },
  ]
  ],
  unassimilated: [[{
    id: "002f0db1-wd3242358032d2f9997a",
    name: "whre does i live",
    items: [
      {id: "244364321-496e-8b32-73636f6f4197", name: "kk milk milk"},
      {id: "b239d563r2525", name: "michael scott"},
    ],
    tint: 1,
  },
    {
      id: "tek-d67b7df46247",
      name: "Jacobs",
      items: [
        {
          id: "9f5ee6a5d-f925y5210ae",
          name: "Design",
        },
        {id: "594e736af364", name: "Atomic babies"},
      ],
      tint: 2,
    },
  ]
  ],
  program: [[{
    id: "0009999997a",
    name: "do dishes",
    items: [
      {id: "24436432544197", name: "make prayer jorunal"},
      {id: "b45", name: "hand"},
    ],
    tint: 1,
  },
    {
      id: "t46247",
      name: "ryan",
      items: [
        {
          id: "9f5ee6a5d4ae",
          name: "Middle Classh",
        },
        {id: "594e736a4", name: "Atomic sweat"},
      ],
      tint: 2,
    },
  ]
  ],
}

const QATA = [{
  id: "0e2f0db1-5457-46b0-949e-8032d2f9997a",
  name: "Walmart",
  items: [{
    id: "26fd50b3-3841-496e-8b32-73636f6f4197",
    name: "3% Milk"
  }, {id: "b0ee9d50-d0a6-46f8-96e3-7f3f0f9a2525", name: "Butter"},], tint: 1,},

  {
    id: "487f68b4-1746-438c-920e-d67b7df46247",
    name: "Indigo",
    items: [
      {
        id: "95ee6a5d-f927-4579-8c15-2b4eb86210ae",
        name: "Designing Data Intensive Applications",
      },
      {id: "5bee94eb-6bde-4411-b438-1c37fa6af364", name: "Atomic Habits"},
    ],
    tint: 2,
  },
  {
    id: "25daffdc-aae0-4d73-bd31-43f73101e7c0",
    name: "Lowes",
    items: [
      {id: "960cbbcf-89a0-4d79-aa8e-56abbc15eacc", name: "Workbench"},
      {id: "d3edf796-6449-4931-a777-ff66965a025b", name: "Hammer"},
    ],
    tint: 3,
  },

];


function App() {
  console.log(QATA);
  // console.log(DATA);
  // console.log("type of DATA: ", typeof(DATA));
  const [categories, setCategories] = useState(DATA);
  console.log("tyoe if categories: ", typeof (categories));
  // const cats = Object.entries(categories).map((t) => (t).map((k) => k));
  const cats = Object.entries(categories);
  console.log("cats", cats);
  console.log("cats", typeof (cats));

//   const arr = [];
//   cats.forEach(([key, value]) => {
//     console.log(key);
//     console.log(value[0]);
//     arr.push(value[0]);
//   })
// console.log(arr);
//   console.log(typeof(arr));

  // console.log(Object.values(eah[0][1][0]));
  // const kevin = new Array();
  // var i = 0;
  // for (let i = 0; i < cats.length; i++) {
  //   // console.log(i);
  //   console.log((cats[i][0]));
  //   console.log(Object.values(cats[i][1][0]));
  //   kevin.push(Object.values(cats[i][1][0]));
  // }
  // console.log(kevin);
  // console.log(typeof (kevin));
  // const newkev= Object.keys(kevin);
  // console.log("newkev", newkev);
  // console.log(typeof("type of newkev: ", newkev));
  const handleDragDrop = (results) => {
    const {source, destination, type} = results;
    console.log(results);
  }
  // const final = [];
  // const bod = [];
  // const both = [];
  // cats.forEach((value) => {
  //   final.push(value[0]);
  //   bod.push(value[1][0][0]);
  //   both.push(value[0], value[1][0][0]);
  //   // const va = value[1][0][0];
  //   // console.log("va: ", va);
  //   // console.log("type of va: ", typeof(va));
  //   // const st = va[0];
  //   // bod.push(value[1][0][0]);
  //   bod.push(value[1][0][0]);
  //   // bod.push(st);
  // });
  // console.log("final: ", final);
  // console.log("both: ", both);
  // <div>{final.map((i, index) => <h3 key = {index}>{i}</h3>
  // )}</div>
  //
  // var merged = [];
  // console.log(final.push(...bod));
  // const cat = cats.map(cat => cat)

//   console.log("merged: ", merged);
// console.log()
// console.log("final: ", final);
//   console.log("bod: ", bod);
  {/*  <div>{bod.map((i, index) => <h3 key = {index}>{i.name}</h3>,*/}
  {/*)}</div>*/}
    return (
        <div className="layout__wrapper" style = {wrapper}>
          {/*<div className="card">*/}
            <DragDropContext onDragEnd={handleDragDrop}>
            {
              cats.map((catgroup, index) => (
                  // <>
                  <Droppable droppableId={catgroup[0]} type="container">
                    {(provided) =>(
                        <div {...provided.droppableProps} ref={provided.innerRef}>
                          <div className= "header">
                            {catgroup[0]}
                          </div>
                          <TopicList {...catgroup[1][0]}/>
                        </div>
                    )}
                </Droppable>

              )
              )
            }
            </DragDropContext>
          {/*</div>*/}
        </div>
    );

}

function TopicList({name, items, id}) {
  return (

        console.log({items})

      // <Droppable droppableId = {id}>
      //   {(provided) => (
      //       <div {...provided.droppableProps} ref = {provided.innerRef}>
      //         <div className="store-container">
      //           <h3>{name}</h3>
      //         </div>
      //         <div className = "items-container">
      //           {items.map((item, index) => (
      //               <Draggable draggableId = {item.id} index = {index} key = {item.id}>
      //                 {(provided) => (
      //                     <div className = "item-container" {...provided.dragHandleProps} {...provided.draggableProps} ref = {provided.innerRef}>
      //                         <h4>{item.name}</h4>
      //                     </div>
      //                 )}
      //               </Draggable>
      //
      //               ))}
      //         </div>
      //         {provided.placeholder}
      //       </div>
      //
      //       )}
      // </Droppable>
  );
}

export default App;
