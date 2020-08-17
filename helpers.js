export function addToMeals(mealData) {
    setMeals([...meals, mealData])
    clearClick()
    fetch(mealsURL, {
        method: "POST",
        headers: {
            "Content-type": "application/json",
        },
        body: JSON.stringify(mealData)
    })
}