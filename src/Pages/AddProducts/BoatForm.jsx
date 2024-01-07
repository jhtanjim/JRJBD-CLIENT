import React, { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import { AuthContext } from '../../provider/AuthProvider';
import useAxiosSecure from '../../hooks/useAxiosSecure';


const img_hoisting_token = import.meta.env.VITE_Image_Upload_Token;
const BoatForm = () => {
  const { user } = useContext(AuthContext)
  const [axiosSecure] = useAxiosSecure()
  const { register, handleSubmit, reset } = useForm();
  const img_hosting_url = `https://api.imgbb.com/1/upload?key=${img_hoisting_token}`
  const userImage = user && user.photoURL;
  // const [files, setFile] = useState()

  // const handleChange = data => {
  //   setFile(data.image)
  //   console.log(data.image);
  // }

  const onSubmit = (data) => {
    const formData = new FormData()
    // const image = data.image.length;
    // console.log(image);
    console.log(data);
    for (let i = 0; i < data.image.length; i++) {
      formData.append(`image[${i}]`, data.image[0])
    }
    fetch(img_hosting_url, {
      method: 'POST',
      body: formData
    }).then(res => res.json())
      .then(imgResponse => {
        if (imgResponse.success) {
          const imgUrl = imgResponse.data.display_url
          const {
            sun_bed,
            steering,
            seat_system,
            rudder,
            rear_deck,
            // image,
            engine_box,
            engine,
            customization,
            cooling_system,
            control_board,
            category,
            boat_edge,
          } = data;
          const newItem = {
            sun_bed,
            steering,
            seat_system,
            rudder,
            rear_deck,
            image: imgUrl,
            userImage,
            engine_box,
            engine,
            customization,
            cooling_system,
            control_board,
            category,
            boat_edge,
          };
          console.log(newItem);
          axiosSecure.post('/addProduct', newItem)
            .then(data => {
              if (data.data.insertedId) {
                reset()
                toast.success("Product added successfully")
              }
            })
        }
      })



    // try {
    //   const response = await fetch("http://localhost:5000/addProduct", {
    //     method: "POST",
    //     headers: {
    //       "Content-Type": "application/json",
    //       // You may need to include additional headers like authorization tokens if required by your backend
    //     },
    //     body: JSON.stringify(data),
    //   });

    //   // Check if the request was successful (status code 2xx)
    //   if (response.ok) {
    //     const responseData = await response.json();
    //     // Handle the response data as needed
    //     toast.success("successfully added")
    //     console.log("Response from server:", responseData);
    //   } else {
    //     // If the request was not successful, handle the error
    //     console.error(
    //       "Error submitting data. Server responded with:",
    //       response.status,
    //       response.statusText
    //     );
    //   }
    // } catch (error) {
    //   console.error("Error submitting data:", error);
    // }
  };
  return (
    <div className="max-w-2xl mx-auto p-6 bg-white rounded-md shadow-md">
      <h2 className="text-2xl font-serif font-semibold mb-4">Boat Specification Form</h2>

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
            htmlFor="cooling_system"
            className="block text-sm font-medium text-gray-600"
          >
            Cooling_System
          </label>
          <input
            type="text"
            id="cooling_system"
            name="cooling_system"
            className="mt-1 p-2 border rounded-md w-full"
            {...register("cooling_system")}
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
            htmlFor="boat_edge"
            className="block text-sm font-medium text-gray-600"
          >
            Boat_Edge
          </label>
          <input
            type="text"
            id="boat_edge"
            name="boat_edge"
            className="mt-1 p-2 border rounded-md w-full"
            {...register("boat_edge")}
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="sun_bed"
            className="block text-sm font-medium text-gray-600"
          >
            Sun_bed
          </label>
          <input
            type="text"
            id="sun_bed"
            name="sun_bed"
            className="mt-1 p-2 border rounded-md w-full"
            {...register("sun_bed")}
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="rear_deck"
            className="block text-sm font-medium text-gray-600"
          >
            Rear_Deck
          </label>
          <input
            type="text"
            id="rear_deck"
            name="rear_deck"
            className="mt-1 p-2 border rounded-md w-full"
            {...register("rear_deck")}
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="seat_system"
            className="block text-sm font-medium text-gray-600"
          >
            Seat_System
          </label>
          <input
            type="text"
            id="seat_system"
            name="seat_system"
            className="mt-1 p-2 border rounded-md w-full"
            {...register("seat_system")}
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="engine_box"
            className="block text-sm font-medium text-gray-600"
          >
            Engine_Box
          </label>
          <input
            type="text"
            id="engine_box"
            name="engine_box"
            className="mt-1 p-2 border rounded-md w-full"
            {...register("engine_box")}
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="control_board"
            className="block text-sm font-medium text-gray-600"
          >
            Control_Board
          </label>
          <input
            type="text"
            id="control_board"
            name="control_board"
            className="mt-1 p-2 border rounded-md w-full"
            {...register("control_board")}
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