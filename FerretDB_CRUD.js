// Create collection
db.createCollection("Dishes");

// CREATE

// Create one document
db.Dishes.insertOne({
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
db.Dishes.insertMany([
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
db.Dishes.insertOne({
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
db.Dishes.find({});

// Retrieve a single document by DisheID
db.Dishes.findOne({ DisheID: 61 });

// Retrieve documents with Calories greater than 600 and less than 800 
// and sort by DName in ascending order
db.Dishes.find({ Calories: { $gt: 600, $lt: 800 } }).sort({ DName: 1 });

// % operators
// gt - greater than
// lt - less than
// gte - greater than or equal to
// lte - less than or equal to
// in - in defined array
// nin - not in defined array
// ne - not equal to
// eq - equal to

// Retrieve documents with dish name "Lorem Ipsum" 
db.Dishes.find({ DName: 'Lorem Ipsum' });

// Retrieve documents with dish names with either "Lorem Ipsum" or "Dolor Sit Amet"
db.Dishes.find({ DName: { $in: ["Lorem Ipsum", "Dolor Sit Amet"] } });



