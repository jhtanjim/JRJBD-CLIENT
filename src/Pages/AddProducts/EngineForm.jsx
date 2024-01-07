import React from "react";
import { Controller, useForm } from "react-hook-form";
import toast from "react-hot-toast";
import useAxiosSecure from "../../hooks/useAxiosSecure";


const img_hoisting_token = import.meta.env.VITE_Image_Upload_Token;

const EngineForm = () => {
  const [axiosSecure] = useAxiosSecure()
  const { register, handleSubmit, control, reset } = useForm();

  const img_hosting_url = `https://api.imgbb.com/1/upload?expiration=600&key=${img_hoisting_token}`


  const onSubmit = (data) => {
    const formData = new FormData()
    formData.append("image", data.image)
    const photo = data.image
    console.log(photo);
    console.log(data);
    fetch(img_hosting_url, {
      method: "POST",
      body: formData,
    }).then(res => res.json())
      .then((imgResponse) => {
        if (imgResponse.success) {
          const imgUrl = imgResponse.data.display_url
          const { category, source, statas, location,availability,exported } = data;
          const newItem = {
            category,
            source,
            statas,
            location,
            availability,
            exported,
            image: imgUrl
          };
          console.log(newItem);
          axiosSecure.post('/addProduct', newItem)
            .then(data => { 
              console.log("After adding product", data.data);
              if (data.data.insertedId) {
                reset()
                toast.success("Product added successfully")
              }
            })
        }
      })
  };
  return (
    <div className="max-w-2xl mx-auto p-6 bg-white rounded-md shadow-md">
      <h2 className="text-2xl font-serif font-semibold mb-4">Engine Specification Form</h2>

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
            <option value="engine">Engine</option>
          </select>
        </div>

        {/* ... Repeat for other form fields ... */}

        <div className="mb-4">
          <label
            htmlFor="source"
            className="block text-sm font-medium text-gray-600"
          >
            Source
          </label>
          <input
            type="text"
            id="source"
            name="source"
            className="mt-1 p-2 border rounded-md w-full"
            {...register("source")}
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="status"
            className="block text-sm font-medium text-gray-600"
          >
            Status
          </label>
          <input
            type="text"
            id="status"
            name="status"
            className="mt-1 p-2 border rounded-md w-full"
            {...register("statas")}
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="location"
            className="block text-sm font-medium text-gray-600"
          >
            Location
          </label>
          <input
            type="text"
            id="location"
            name="location"
            className="mt-1 p-2 border rounded-md w-full"
            {...register("location")}
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="availability"
            className="block text-sm font-medium text-gray-600"
          >
            Availability
          </label>
          <select
            id="availability"
            name="availability"
            className="mt-1 p-2 border rounded-md w-full"
            {...register("availability")}
          >
            <option value="Available in stock">Available in stock</option>
            <option value="Not available in stock">
              Not Available in stock
            </option>
          </select>
        </div>

        <div className="mb-4">
          <label
            htmlFor="export"
            className="block text-sm font-medium text-gray-600"
          >
            Export
          </label>
          <input
            type="text"
            id="exported"
            name="exported"
            className="mt-1 p-2 border rounded-md w-full"
            {...register("exported")}
          />
        </div>

        {/* todo: Sojib vai will do.Picture add  */}

        <div className="mb-4">
          <label
            htmlFor="profile-img"
            className="block text-sm font-medium text-gray-600"
          >
            Profile Image
          </label>
          <input type="file" multiple {...register('image', { required: true })} className="file-input file-input-bordered file-input-warning w-full max-w-xs" />
        </div>

        <div>
          <label>
            Specification (e.g., builder: Bukh, model: DV24, rpm: 3200, started:
            Hand & Electric both, fuel_type: Diesel):
          </label>
          <Controller
            name="specificationString"
            control={control}
            defaultValue=""
            render={({ field }) => <input {...field} />}
          />
        </div>

        <div>
          <label>
            Specification (e.g., builder: Bukh, model: DV24, rpm: 3200, started:
            Hand & Electric both, fuel_type: Diesel):
          </label>
          <Controller
            name="specificationString"
            control={control}
            defaultValue=""
            render={({ field }) => (
              <input
                type="text"
                value={field.value}
                onChange={(e) => field.onChange(e.target.value)}
              />
            )}
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

export default EngineForm;
