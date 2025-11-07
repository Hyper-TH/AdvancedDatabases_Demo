// https://www.mongodb.com/docs/manual/reference/method/db.collection.explain/#std-label-explain-method-allPlansExecution
db.dishes.explain("queryPlanner").aggregate([
  { $match: { Calories: { $gte: 500 } } },
  {
    $group: {
      _id: "$DName",
      totalCalories: { $sum: "$Calories" },
      averageCost: { $avg: "$Cost" }
    }
  },
  { $sort: { totalCalories: -1 } }
])

db.dishes.explain("executionStats").aggregate([
  { $match: { Calories: { $gte: 500 } } },
  {
    $group: {
      _id: "$DName",
      totalCalories: { $sum: "$Calories" },
      averageCost: { $avg: "$Cost" }
    }
  },
  { $sort: { totalCalories: -1 } }
])

db.dishes.explain("allPlansExecution").aggregate([
  { $match: { Calories: { $gte: 500 } } },
  {
    $group: {
      _id: "$DName",
      totalCalories: { $sum: "$Calories" },
      averageCost: { $avg: "$Cost" }
    }
  },
  { $sort: { totalCalories: -1 } }
])