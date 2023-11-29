import React from 'react';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';

const BoatForm = () => {
    const { register, handleSubmit } = useForm();

    const onSubmit = async (data) => {
      try {
        // Send data to the backend here
        console.log(data);
  
        const response = await fetch("http://localhost:5000/addProduct", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            // You may need to include additional headers like authorization tokens if required by your backend
          },
          body: JSON.stringify(data),
        });
  
        // Check if the request was successful (status code 2xx)
        if (response.ok) {
          const responseData = await response.json();
          // Handle the response data as needed
          toast.success("successfully added")
          console.log("Response from server:", responseData);
        } else {
          // If the request was not successful, handle the error
          console.error(
            "Error submitting data. Server responded with:",
            response.status,
            response.statusText
          );
        }
      } catch (error) {
        console.error("Error submitting data:", error);
      }
    };
    return (
        <div class="max-w-2xl mx-auto mt-8 p-6 bg-white rounded-md shadow-md">
            <h2 class="text-2xl font-semibold mb-4">Boat Specification Form</h2>

            <form onSubmit={handleSubmit(onSubmit)}>
              {/* ... Your form fields ... */}

              <div className="mb-4">
                <label
                  htmlFor="category"
                  className="block text-sm font-medium text-gray-600"
                >
                  Product Type
                </label>
                <select
                  id="category"
                  name="category"
                  className="mt-1 p-2 border rounded-md w-full"
                  {...register("category")}
                >
                  <option value="boat">Boat</option>
                </select>
              </div>

              {/* ... Repeat for other form fields ... */}

              <div className="mb-4">
                <label
                  htmlFor="hull-material"
                  className="block text-sm font-medium text-gray-600"
                >
                  Boat Size
                </label>
                <input
                  type="text"
                  id="hull-material"
                  name="hull-material"
                  className="mt-1 p-2 border rounded-md w-full"
                  {...register("hull-material")}
                />
              </div>
              <div className="mb-4">
                <label
                  htmlFor="customization"
                  className="block text-sm font-medium text-gray-600"
                >
                  Boat Size
                </label>
                <input
                  type="text"
                  id="customization"
                  name="customization"
                  className="mt-1 p-2 border rounded-md w-full"
                  {...register("customization")}
                />
              </div>
              <div className="mb-4">
                <label
                  htmlFor="cooling-system"
                  className="block text-sm font-medium text-gray-600"
                >
                  cooling-system
                </label>
                <input
                  type="text"
                  id="cooling-system"
                  name="cooling-system"
                  className="mt-1 p-2 border rounded-md w-full"
                  {...register("cooling-system")}
                />
              </div>
              <div className="mb-4">
                <label
                  htmlFor="engine"
                  className="block text-sm font-medium text-gray-600"
                >
                  Engine Details
                </label>
                <input
                  type="text"
                  id="engine"
                  name="engine"
                  className="mt-1 p-2 border rounded-md w-full"
                  {...register("engine")}
                />
              </div>
              <div className="mb-4">
                <label
                  htmlFor="boat-edge"
                  className="block text-sm font-medium text-gray-600"
                >
                  boat-edge
                </label>
                <input
                  type="text"
                  id="boat-edge"
                  name="boat-edge"
                  className="mt-1 p-2 border rounded-md w-full"
                  {...register("boat-edge")}
                />
              </div>
              <div className="mb-4">
                <label
                  htmlFor="sun-bed"
                  className="block text-sm font-medium text-gray-600"
                >
                  sun-bed
                </label>
                <input
                  type="text"
                  id="sun-bed"
                  name="sun-bed"
                  className="mt-1 p-2 border rounded-md w-full"
                  {...register("sun-bed")}
                />
              </div>
              <div className="mb-4">
                <label
                  htmlFor="rear-deck"
                  className="block text-sm font-medium text-gray-600"
                >
                  rear-deck
                </label>
                <input
                  type="text"
                  id="rear-deck"
                  name="rear-deck"
                  className="mt-1 p-2 border rounded-md w-full"
                  {...register("rear-deck")}
                />
              </div>
              <div className="mb-4">
                <label
                  htmlFor="seat-system"
                  className="block text-sm font-medium text-gray-600"
                >
                  seat-system
                </label>
                <input
                  type="text"
                  id="seat-system"
                  name="seat-system"
                  className="mt-1 p-2 border rounded-md w-full"
                  {...register("seat-system")}
                />
              </div>
              <div className="mb-4">
                <label
                  htmlFor="engine-box"
                  className="block text-sm font-medium text-gray-600"
                >
                  engine-box
                </label>
                <input
                  type="text"
                  id="engine-box"
                  name="engine-box"
                  className="mt-1 p-2 border rounded-md w-full"
                  {...register("engine-box")}
                />
              </div>
              <div className="mb-4">
                <label
                  htmlFor="control-board"
                  className="block text-sm font-medium text-gray-600"
                >
                  control-board
                </label>
                <input
                  type="text"
                  id="control-board"
                  name="control-board"
                  className="mt-1 p-2 border rounded-md w-full"
                  {...register("control-board")}
                />
              </div>
              <div className="mb-4">
                <label
                  htmlFor="steering"
                  className="block text-sm font-medium text-gray-600"
                >
                  steering
                </label>
                <input
                  type="text"
                  id="steering"
                  name="steering"
                  className="mt-1 p-2 border rounded-md w-full"
                  {...register("steering")}
                />
              </div>
              <div className="mb-4">
                <label
                  htmlFor="rudder"
                  className="block text-sm font-medium text-gray-600"
                >
                  rudder
                </label>
                <input
                  type="text"
                  id="rudder"
                  name="rudder"
                  className="mt-1 p-2 border rounded-md w-full"
                  {...register("rudder")}
                />
              </div>

              <div className="mt-6">
                <button
                  type="submit"
                  className="bg-blue-500 text-white px-4 py-2 rounded-md"
                >
                  Submit
                </button>
              </div>
            </form>
          </div>
    );
};

export default BoatForm;