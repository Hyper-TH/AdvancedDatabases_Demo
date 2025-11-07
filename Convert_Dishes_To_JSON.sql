-- Script to convert the already established Dish Table into JSON 
-- to insert to FerretDB through the Compass

SELECT JSON_OBJECT(
    'DisheID' VALUE DisheID,
    'DName' VALUE DName,
    'Quantity' VALUE Quantity,
    'Calories' VALUE Calories,
    'Protein' VALUE Protein,
    'Carbs' VALUE Carbs,
    'Sugar' VALUE Sugar,
    'SaturatedFat' VALUE SaturatedFat,
    'Cost' VALUE Cost
) AS dishes_json
FROM dishes;