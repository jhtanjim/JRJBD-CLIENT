import React from "react";
import { Controller, useForm } from "react-hook-form";

const EngineForm = () => {
  const { register, handleSubmit, control } = useForm();

  const onSubmit = async (data) => {
    // Combine form data into a specification object
    const specificationObject = data.specificationString
      .split(",")
      .reduce((acc, item) => {
        const [key, value] = item.trim().split(":");
        acc[key] = value.trim();
        return acc;
      }, {});

    // Send specificationObject to the backend or perform other actions
    console.log({ specification: specificationObject });
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
            {...register("status")}
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
            id="export"
            name="export"
            className="mt-1 p-2 border rounded-md w-full"
            {...register("export")}
          />
        </div>

        {/* todo: Sojib vai will do.  */}

        <div className="mb-4">
          <label
            htmlFor="profile-img"
            className="block text-sm font-medium text-gray-600"
          >
            Profile Image
          </label>
          <input
            type="text"
            id="profile-img"
            name="profile-img"
            className="mt-1 p-2 border rounded-md w-full"
            {...register("profile-img")}
          />
        </div>
        {/* todo: Here you have to take one input field and take multiple image */}

{/* hear we have to add input fiend for this data   "specification": {
      "builder": "Bukh",
      "model": "DV24",
      "rpm": 3200,
      "started": "Hand & Electric both",
      "fuel_type": "Diesel"
    }*/}
    
        {/* <div>
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
        </div> */}
      </form>
    </div>
  );
};

export default EngineForm;
