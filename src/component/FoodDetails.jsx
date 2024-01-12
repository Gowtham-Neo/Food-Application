import { useEffect, useState } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { Fragment } from "react";

export default function FoodDetails({ foodId, setFoodDetail, foodDetail }) {
  const url = `https://api.spoonacular.com/recipes/${foodId}/information`;
  const apiKey = "9302d034eb5b4c65a68f4e3b80e2c4a8";
  const [isOpen, setIsOpen] = useState(false);
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchFood() {
      const res = await fetch(`${url}?apiKey=${apiKey}`);
      const data = await res.json();
      console.log(data);
      setFoodDetail(data);
      setLoading(false);
      setIsOpen(true);
    }
    fetchFood();
  }, [foodId]);

  const closeModal = (e) => {
    e.preventDefault();
    setIsOpen(false);
  };
  return (
    <div>
      <Transition appear show={isOpen} as={Fragment}>
        <Dialog as="div" className="relative z-10" onClose={closeModal}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black bg-opacity-25" />
          </Transition.Child>
          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex items-center justify-center min-h-full p-4 text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className="w-full md:w-2/4 p-6 overflow-hidden text-left align-middle transition-all transform bg-white shadow-black shadow-2xl rounded-2xl">
                  <Dialog.Title
                    as="h3"
                    className="text-xl font-mono font-bold leading-6 text-gray-900"
                  >
                    {foodDetail.title}
                  </Dialog.Title>
                  <div className="mt-3">
                    <div className="flex flex-col w-full">
                      {isLoading ? (
                        <p>Loading...</p>
                      ) : (
                        <img
                          src={foodDetail.image}
                          alt="image"
                          className="w-full md:w-full rounded-2xl"
                        />
                      )}

                      <div className="flex justify-evenly font-mono m-4">
                        <p>⌛{foodDetail.readyInMinutes} minutes</p>
                        <p>🧑‍🤝‍🧑{foodDetail.servings}</p>
                        <p>💰{foodDetail.pricePerServing}$</p>
                        <p>
                          {foodDetail.vegetarian
                            ? "Vegetarian"
                            : "Non Vegetarian"}
                        </p>
                      </div>

                      <div className="border border-black rounded-lg p-4 bg-slate-400">
                        <p className=" font-semibold text-xl">Instruction</p>
                        {isLoading ? (
                          <p className="text-gray-600">Loading...</p>
                        ) : (
                          <>
                            <ul className="pl-6 list-none ">
                              {foodDetail.analyzedInstructions[0]?.steps.map(
                                (step, index) => (
                                  <li key={index}>{step.step}</li>
                                )
                              )}
                            </ul>
                            <p className=" font-semibold text-xl mt-3">
                              Ingredients
                            </p>
                            <ul className="pl-6 list-none">
                              {foodDetail.extendedIngredients.map((items) => (
                                <li key={items.id}>{items.name}</li>
                              ))}
                            </ul>
                          </>
                        )}
                      </div>
                    </div>
                    <button
                      type="submit"
                      onClick={(e) => closeModal(e)}
                      className="inline-flex justify-center px-4 py-2 text-sm font-medium text-black bg-orange-700 border border-transparent rounded-md hover:bg-orange-600 hover:text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2 mt-3"
                    >
                      Close
                    </button>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </div>
  );
}

// return (
// foodDetail !== "" && foodDetail !== null && (
//   <div className="flex flex-col w-3/6 m-3 space-y-4 border justify-around/2">
//     <h1 className="text-4xl font-bold">{foodDetail.title}</h1>
//     <div className="flex space-x-4">
//       <p>Ready in: {foodDetail.readyInMinutes} minutes</p>
//       <p>Servings: {foodDetail.servings}</p>
//       <p>Price per Serving: ${foodDetail.pricePerServing}</p>
//       <p>{foodDetail.vegetarian ? "Vegetarian" : "Non Vegetarian"}</p>
//     </div>
//     <img src={foodDetail.image} alt="image" className="w-full max-w-2xl" />

//     {isLoading ? (
//       <p className="text-gray-600">Loading...</p>
//     ) : (
//       <>
//         <ul className="pl-6 list-disc">
//           {foodDetail.analyzedInstructions[0]?.steps.map((step, index) => (
//             <li key={index}>{step.step}</li>
//           ))}
//         </ul>
//         <ul className="pl-6 list-disc">
//           {foodDetail.extendedIngredients.map((items) => (
//             <li key={items.id}>{items.name}</li>
//           ))}
//         </ul>
//       </>
//     )}

//     <div className="flex space-x-4">
//       <p>{foodDetail.vegetarian ? "Vegetarian" : "Non Vegetarian"}</p>
//     </div>
//   </div>
//   )
// );
