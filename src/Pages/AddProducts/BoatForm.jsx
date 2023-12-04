import React from 'react';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';


const img_hoisting_token = import.meta.env.VITE_Image_Upload_Token;
const BoatForm = () => {
  const { register, handleSubmit } = useForm();
  const img_hosting_url = `https://api.imgbb.com/1/upload?key=${img_hoisting_token}`

  const onSubmit = async (data) => {
    const image = data.image;
    const formData = new FormData()

    // for(let i = 0; i < image.length; i++) {
    //   formData.append(`image${i}`,data.image[i])
    // }
    // formData.append('image', data.image[0])

    console.log(data.image)

    fetch(img_hosting_url, {
      method: 'POST',
      body: formData
    })
      .then(res => {
        if (!res.ok) {
          // Reject the promise and catch the error
          throw res;
        }
        return res.json();
      })
      .then(imgResponse => {
        console.log(imgResponse);
      })
      .catch(err => {
        // Handle the error here
        console.error(err);
      });



    try {
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
    <div class="max-w-2xl mx-auto p-6 bg-white rounded-md shadow-md">
      <h2 class="text-2xl font-serif font-semibold mb-4">Boat Specification Form</h2>

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


        <div className="mb-4">
          <label
            htmlFor="profile-img"
            className="block text-sm font-medium text-gray-600"
          >
            Profile Image
          </label>
          <input type="file" multiple {...register('image', { required: true })} className="file-input file-input-bordered file-input-warning w-full max-w-xs" />
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