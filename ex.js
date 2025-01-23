// ES6 modernized a lot of how we write JS today.
// Arrow functions offer a concise way of writing functions, even on one line!
// We can use template literals to write single strings with placeholder variables.
// The for...of and for...in loops are good with arrays and objects, respectively.
// Spread operators simplify adding array items or object properties into new arrays or objects in JavaScript.
// Rest operators are placeholders for arrays that might have zero or more items.


const goodreadsInfo = {
    currentlyReading: [
      { title: "The Hobbit", author: "J.R.R. Tolkien" }
    ],
  
    wantToRead: [
      { title: "The Art of Language Invention", author: "David Peterson" }
    ]
};
  
const addNewBooks = (books, additionalBookObjects = []) => {
    return [...books, ...additionalBookObjects];
};
  
goodreadsInfo.currentlyReading = addNewBooks(goodreadsInfo.currentlyReading, [
    { title: "The Two Towers", author: "J.R.R. Tolkien" },
    { title: "The MOM Test", author: "Rob Fitzpatrick" }
]);
  
goodreadsInfo.wantToRead = addNewBooks(goodreadsInfo.wantToRead, [
    { title: "Looking for Alaska", author: "John Green" }
]);
  
const showGoodreadsInfo = (info) => {
const { currentlyReading, wantToRead } = info;
  
console.log("Currently Reading:");
for (const book of currentlyReading) {
    console.log(`${book.title} by ${book.author}`);
}
  
console.log("\nWant to Read:");
    for (const book of wantToRead) {
        console.log(`${book.title} by ${book.author}`);
    }
};
  
showGoodreadsInfo(goodreadsInfo);
  