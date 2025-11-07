// Create collection
db.createCollection("Dishes");

// CREATE

// Create one document
db.dishes.insertOne({
    DisheID: 61,
    DName: "Lorem Ipsum",
    Quantity: 50,
    Calories: 800,
    Protein: 25,
    Carbs: 90,
    Sugar: 8,
    SaturatedFat: 10,
    Cost: 9.99
})

// Create multiple documents
db.dishes.insertMany([
    {
        DisheID: 62,
        DName: "Dolor Sit Amet",
        Quantity: 30,
        Calories: 600,
        Protein: 20,
        Carbs: 70,
        Sugar: 5,
        SaturatedFat: 8,
        Cost: 7.99
    },
    {
        DisheID: 63,
        DName: "Consectetur Adipiscing",
        Quantity: 40,
        Calories: 700,
        Protein: 22,
        Carbs: 80,
        Sugar: 6,
        SaturatedFat: 9,
        Cost: 8.99
    }
]);

// Create a new document 
// that doesn't follow the schema
db.dishes.insertOne({
    DisheID: 64,
    DName: "Elit Sed Do",
    Quantity: "Twenty",  // Invalid data type
    Calories: 500,
    Protein: 18,
    Carbs: 60,
    Sugar: 4,
    SaturatedFat: 7,
    Cost: 6.99
})


// READ

// Retrieve all documents
db.dishes.find({});

// Retrieve a single document by DisheID
db.dishes.findOne({ DisheID: 61 });

// Retrieve documents with Calories greater than 600 and less than 800 
// and sort by DName in ascending order
db.dishes.find({ Calories: { $gt: 600, $lt: 800 } }).sort({ DName: 1 });

// $ operators
// gt - greater than
// lt - less than
// gte - greater than or equal to
// lte - less than or equal to
// in - in defined array
// nin - not in defined array
// ne - not equal to
// eq - equal to

// Retrieve documents with dish name "Lorem Ipsum" 
db.dishes.find({ DName: 'Lorem Ipsum' });

// Retrieve documents with dish names with either "Lorem Ipsum" or "Dolor Sit Amet"
db.dishes.find({ DName: { $in: ["Lorem Ipsum", "Dolor Sit Amet"] } });

// UPDATE

// $ operators
// set - assigns the value for an updated field to the document
// setOnInsert - specifies the value of a field when an update operation
//               results in the addicition of a new document. (No effect when modifying an existing document)
// unset - removes a specific field from a document
// pop - in an array, this operator removes the first or last item

// Update a single document's Protein value by Name
db.dishes.updateOne({ 
    DName: "Lorem Ipsum" 
},
{ 
    $set: { Protein: 30 } 
});

// Replace document by Name
db.dishes.replaceOne({
    DName: "Dolor Sit Amet"
},
{
    DisheID: 62,
    DName: "Dolor Sit Amet",
    Quantity: 35,
    Calories: 650,
    Protein: 21,
    Carbs: 75,
    Sugar: 5,
    SaturatedFat: 8,
    Cost: 8.49
});

// Update many documents by changing all values of Protein to 30 
// if less than 40 and greater than 20
db.Dishes.updateMany({
    Protein: { $gt: 20, $lt: 40 }
},
{
    $set: { Protein: 30 }
});

// DELETE

// Delete a single document by DisheID
db.dishes.deleteOne({ DisheID: 63 });

// Delete document where cost is 8.49
db.dishes.deleteOne({ Cost: 8.49 });

// Delete multiple documents where Calories is less than 500
db.dishes.deleteMany({ Calories: { $lt: 500 } });