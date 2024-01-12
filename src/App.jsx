import { useState } from "react";
import Search from "./component/Search";
import FoodList from "./component/FoodList";
import Header from "./component/Header";
import FoodDetails from "./component/FoodDetails";
function App() {
  const [food, setFood] = useState([]);
  const [foodId, setFoodId] = useState("");
  const [foodDetail, setFoodDetail] = useState([]);

  return (
    <div>
      <Header />
      <Search food={food} setFood={setFood} />
      <FoodList food={food} foodId={foodId} setFoodId={setFoodId} />
      <FoodDetails
        foodId={foodId}
        setFoodId={setFoodId}
        setFoodDetail={setFoodDetail}
        foodDetail={foodDetail}
      />
    </div>
  );
}

export default App;
