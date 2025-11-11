// https://docs.ferretdb.io/v1.24/aggregation-operations/aggregation-pipeline-and-commands/
// Aggregation Example with sorting and grouping
db.dishes.aggregate([
// Filter by Calories less than 500
{ $match: { Calories: { $lt: 500 } } },
{
    $group: {
        _id: "$Cost",   // Group by Cost
        avgProtein: { $avg: "$Protein" },   // Avg Protein per group
        productCount: { $sum: 1 }   // Count of dishes per group
    }
},
// Sort by descending Cost
{ $sort: { $Cost: -1 } }
])

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