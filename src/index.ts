import { Sorter } from './Sorter';
import { NumberCollection } from './NumberCollection';
import { CharacterCollection } from './CharacterCollection';
const numberCollection = new NumberCollection([10, 3, -5, 0]);
const characterCollection = new CharacterCollection('Xaayb');
import { LinkedList } from './LinkedList';
const linkedList = new LinkedList();
linkedList.add(500);
linkedList.add(-10);
linkedList.add(-3);
linkedList.add(4);

// const sorter = new Sorter(numberCollection);
// const sorter = new Sorter(characterCollection);
const sorter = new Sorter(linkedList);
sorter.sort();
// console.log(numberCollection.data);
// console.log(characterCollection.data);
linkedList.print();
