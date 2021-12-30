"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Sorter_1 = require("./Sorter");
const NumberCollection_1 = require("./NumberCollection");
const CharacterCollection_1 = require("./CharacterCollection");
const numberCollection = new NumberCollection_1.NumberCollection([10, 3, -5, 0]);
const characterCollection = new CharacterCollection_1.CharacterCollection('Xaayb');
const LinkedList_1 = require("./LinkedList");
const linkedList = new LinkedList_1.LinkedList();
linkedList.add(500);
linkedList.add(-10);
linkedList.add(-3);
linkedList.add(4);
// const sorter = new Sorter(numberCollection);
// const sorter = new Sorter(characterCollection);
const sorter = new Sorter_1.Sorter(linkedList);
sorter.sort();
// console.log(numberCollection.data);
// console.log(characterCollection.data);
linkedList.print();