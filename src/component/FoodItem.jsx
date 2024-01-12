export default function FoodItem({ food ,setFoodId}) {
  return (
    <div className="m-5 text-white bg-orange-500 border shadow-xl rounded-2xl shadow-slate-900">
      <img src={food.image} alt="image" className="w-full rounded-2xl"/>
      <h1 className="p-4 font-mono text-lg text-black">{food.title}</h1>
      <button className="px-4 py-2 m-4 font-serif text-sm font-medium text-black duration-200 bg-white border border-black rounded-xl hover:bg-orange-500 hover:text-black" onClick={(e)=>setFoodId(food.id)}>View Recipe</button>
    </div>
  );
}
