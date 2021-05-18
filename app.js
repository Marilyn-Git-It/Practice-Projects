const mongoose = require('mongoose');

mongoose.connect("mongodb://localhost:27017/fruitsDB", { useNewUrlParser: true, useUnifiedTopology: true });

const fruitSchema = new mongoose.Schema ({
  name: {
    type: String,
    required: [true, "Please check your data entry, no name specified."]
  },
  rating: {
    type: Number,
    min: 1,
    max: 10
  },
  review: String
});

const Fruit = mongoose.model("Fruit", fruitSchema);

const fruit = new Fruit ({
  // name: "Peaches",
  rating: 10,
  review: "Peaches are so good!"
});

// fruit.save();

const personSchema = new mongoose.Schema ({
  name: String,
  age: Number,
  favoriteFuit: fruitSchema
});

const Person = mongoose.model("Person", personSchema);

const strawberry = new Fruit({
  name: "Strawberry",
  score: 10,
  review: "Amazing fruit."
});

strawberry.save();

Person.updateOne({name: "John"}, {favoriteFuit: strawberry}, function(err){
  if(err){
    console.log(err);
  } else {
    console.log("Succesfully updated the document.");
  }
});

// const person = new Person({
//   name: "Amy",
//   age: 12,
//   favoriteFuit: pineapple
// });
//
// person.save();

// const kiwi = new Fruit({
//   name: "Kiwi",
//   score: 7,
//   review: "Yummy, but furry."
// });
//
// const mango = new Fruit ({
//   name: "Mango",
//   score: 8,
//   review: "My hubby brought me the yummiest mangoes!! Never letting that man-go."
// });
//
// const papaya = new Fruit({
//   name: "Papaya",
//   score: 1,
//   review: "Why does it taste like fish??"
// });
//
// // Fruit.insertMany([kiwi, mango, papaya], function(err){
// //   if(err) {
// //     console.log(err);
// //   } else {
// //     console.log("Succesfully saved all the fruit to fruitsDB");
// //   }
// // });

Fruit.find(function(err, fruits){
  if(err){
    console.log(err);
  } else {

mongoose.connection.close();

    fruits.forEach(function(fruit){
      console.log(fruit.name);
    });
  }
});


// Fruit.updateOne({_id: "606362d0bc9ee3df039aa4ca"}, {name: "Peach"}, function(err){
//   if(err){
//     console.log(err);
//   } else {
//     console.log("Succesfully updated the document.");
// }
// });


// Fruit.deleteOne({name: "Peach"}, function(err){
//   if(err){
//     console.log(err);
//   } else {
//     console.log("Succesfully deleted the document.");
//   }
// });

//
// Person.deleteMany({name: /John/}, function(err){
//   if (err) {
//     console.log(err);
//   } else {
//     console.log("Person was deleted.");
//   }
// });
