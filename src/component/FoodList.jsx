import FoodItem from "./FoodItem";
export default function FoodList({ food ,setFoodId}) {
  return (
    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3">
      {food.map((food) => (
        <FoodItem food={food} key={food.id} setFoodId={setFoodId}/>
      ))}
    </div>
  );
}
