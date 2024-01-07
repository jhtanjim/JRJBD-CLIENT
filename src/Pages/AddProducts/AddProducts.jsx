import React from "react";
import { useForm } from "react-hook-form";
import { Tab, TabList, TabPanel, Tabs } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import BoatForm from "./BoatForm";
import EngineForm from "./EngineForm";

const AddProducts = () => {
  // const { register, handleSubmit } = useForm();

  // const onSubmit = async (data) => {
  //   try {
  //     // Send data to the backend here
  //     console.log(data);

  //     const response = await fetch("http://localhost:5000/addProduct", {
  //       method: "POST",
  //       headers: {
  //         "Content-Type": "application/json",
  //         // You may need to include additional headers like authorization tokens if required by your backend
  //       },
  //       body: JSON.stringify(data),
  //     });

  //     // Check if the request was successful (status code 2xx)
  //     if (response.ok) {
  //       const responseData = await response.json();
  //       // Handle the response data as needed
  //       console.log("Response from server:", responseData);
  //     } else {
  //       // If the request was not successful, handle the error
  //       console.error(
  //         "Error submitting data. Server responded with:",
  //         response.status,
  //         response.statusText
  //       );
  //     }
  //   } catch (error) {
  //     console.error("Error submitting data:", error);
  //   }
  // };

  return (
    <div className="max-w-7xl mx-auto">
      <h1 className="text-4xl">Add Products Form</h1> 
      <div className="mt-32">
      <Tabs>
        <TabList>
          <Tab>Boat</Tab>
          <Tab>Engine</Tab>
        </TabList>

        <TabPanel>
          <BoatForm></BoatForm>
        </TabPanel>
        <TabPanel>
          <EngineForm></EngineForm>
        </TabPanel>
      </Tabs>
     </div>
    </div>
  );
};

export default AddProducts;
