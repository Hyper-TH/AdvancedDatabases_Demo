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

