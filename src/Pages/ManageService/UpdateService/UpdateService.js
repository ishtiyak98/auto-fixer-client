import React, { useEffect, useState } from 'react';
import { useForm } from "react-hook-form";
import { useNavigate, useParams } from 'react-router-dom';
import Swal from 'sweetalert2';

const UpdateService = () => {
    //const { register, handleSubmit } = useForm();
    //const onSubmit = data => console.log(data);

    const [service, setService] = useState({});
    const {serviceId} = useParams();
    const navigate = useNavigate();

    useEffect(() => {
        fetch(`http://localhost:5000/services/${serviceId}`)
          .then((res) => res.json())
          .then((data) => setService(data));
      }, [serviceId]);

    const nameField = (event)=>{
        console.log(event.target.value);
        const {name, ...rest} = service;
        const newName = event.target.value;
        const updatedService = {name: newName, ...rest};
        setService(updatedService);
    }

    const priceField = (event)=>{
        console.log(event.target.value);
        const {price, ...rest} = service;
        const newPrice = event.target.value;
        const updatedService = {price: newPrice, ...rest};
        setService(updatedService);
    }

    const descField = (event)=>{
        console.log(event.target.value);
        const {description, ...rest} = service;
        const newDescription = event.target.value;
        const updatedService = {price: newDescription, ...rest};
        setService(updatedService);
    }

    const imgField = (event)=>{
        console.log(event.target.value);
        const {img, ...rest} = service;
        const newImage = event.target.value;
        const updatedService = {price: newImage, ...rest};
        setService(updatedService);
    }

    const handleSubmit = (event)=> {
         event.preventDefault();
        const url = `http://localhost:5000/updateService/${serviceId}`;
         fetch(url, {
             method: "PUT",
             headers: {
                "Content-Type": "application/json",
              },
              body: JSON.stringify(service),
         })
         .then((res) => res.json())
         .then((data) => {
             if(data.acknowledged){
                Swal.fire({
                    title: "Updated",
                    text: "Successfully Updated",
                    icon: "success",
                });
                navigate("/home");
             }
         });
    }
    
    return (
        <div>
            <div className="container mt-5 w-50">

                <form onSubmit={handleSubmit}>
                    <input className='d-block w-100 mb-3 px-2 py-2' onChange={nameField} value={service.name} type="text" name="" id="" placeholder='Service name' />
                    <input className='d-block w-100 mb-3 px-2 py-2' onChange={priceField} value={service.price} type="text" name="" id="" placeholder='Price'/>
                    <textarea className='d-block w-100 mb-3 px-2 py-2' onChange={descField} value={service.description} name="" id="" cols="30" placeholder='Description' ></textarea>
                    <input className='d-block w-100 mb-3 px-2 py-2' onChange={imgField} value={service.img} type="text" name="" id="" placeholder='Image link'/>
                    <input className='d-block w-100 mb-3 px-2 py-2 btn btn-primary' type="submit" value="Update" />
                </form>


                {/* <form className="d-flex flex-column" onSubmit={handleSubmit(onSubmit)}>
                    <input className="mb-3" onChange={nameField} placeholder="Service name" {...register("name", { required: true,})} />
                    <input className="mb-3" value={service.price} placeholder="Price" {...register("price", { required:true })} />
                    <textarea className="mb-3" value={service.description} placeholder="Description" {...register("description", { required: true})} />
                    <input className="mb-3"value={service.img} placeholder="Image link" {...register("img", { required: true,})} />
                    <input className="mb-3 btn btn-primary" type="submit" />
                </form> */}
            </div>
        </div>
    );
};

export default UpdateService;