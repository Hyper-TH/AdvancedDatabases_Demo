// https://docs.ferretdb.io/v1.24/aggregation-operations/aggregation-pipeline-and-commands/
// Aggregation Example with sorting and grouping
db.dishes.aggregate([
    // Stage 1 match documents with Calories >= 500
    { $match: { Calories: { $gte: 500 } } },
    {
        // Stage 2 group by DName and calculate total Calories and average Cost
        $group: {
            _id: "$DName",
            totalCalories: { $sum: "$Calories" },
            averageCost: { $avg: "$Cost" }
        }
    },
    // Stage 3 sort by totalCalories in descending order
    { $sort: { totalCalories: -1 } }
]);

// Indexing example
// Single field indexes
db.dishes.createIndex({ Protein: 1 }); // Ascending index on Protein field

// Compound indexes
// Useful for queries that require more protein with less calories
db.dishes.createIndex({ Protein: 1, Calories: -1 }); // Ascending on Protein, Descending on Calories

// Useful for queries that sort by Cost and then by DName
db.dishes.createIndex({ Cost: 1, DName: 1 }); // Ascending on both Cost and DName

// Unique index
// (DName must be unique for this to work)
db.dishes.createIndex({ DName: 1 }, { unique: true }); 

// Get list of indexes
db.dishes.getIndexes();

// Drop index
db.dishes.dropIndex({ Protein: 1 });

// Drop all indexes
db.dishes.dropIndexes('*');