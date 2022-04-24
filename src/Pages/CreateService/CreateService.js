import React from "react";
import { useForm } from "react-hook-form";

const CreateService = () => {
    const { register, handleSubmit } = useForm();

    const onSubmit = (data) => {
      console.log(data);

      fetch("http://localhost:5000/newService", {
        method: "POST",
        headers: {
          "content-type" : "application/json"
        },
        body: JSON.stringify(data)
      })
      .then(res=> res.json())
      .then(data=> {
        console.log(data);
      })
    };

    
  return (
    <div className="container mt-5 w-50">
      <form className="d-flex flex-column" onSubmit={handleSubmit(onSubmit)}>
        <input className="mb-3" placeholder="Service name" {...register("name", { required: true,})} />
        <input className="mb-3" placeholder="Price" {...register("price", { required:true })} />
        <input className="mb-3" placeholder="Description" {...register("description", { required: true})} />
        <input className="mb-3" placeholder="Image link" {...register("img", { required: true,})} />
        <input className="mb-3 btn btn-primary" type="submit" />
      </form>
    </div>
  );
};

export default CreateService;
