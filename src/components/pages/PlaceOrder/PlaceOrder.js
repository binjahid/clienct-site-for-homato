import React from "react";
import { useForm } from "react-hook-form";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const PlaceOrder = () => {
  const { register, handleSubmit, reset } = useForm();
  const onSubmit = (data) => {
    console.log(data);
    toast.success("Congratulations Oder has been placed Succesfully");
    if (data.name) {
      reset(data);
    }
  };
  return (
    <div>
      <h2 className="form-title mt-5 text-center mb-3">
        Fill Up This Form To Place An Order
      </h2>
      <form onSubmit={handleSubmit(onSubmit)} className="form-container">
        <input
          {...register("firstName", { required: true })}
          placeholder="Your First Name"
          className="logInFormInput m-auto mb-3"
        />
        <input
          {...register("lastName", { required: true })}
          placeholder="Your Last Name"
          className="logInFormInput m-auto mb-3"
        />
        <input
          {...register("email", { required: true })}
          placeholder="Your Email"
          type="email"
          className="logInFormInput m-auto mb-3"
        />
        <input
          {...register("password", { required: true })}
          placeholder="Your Password"
          type="password"
          className="logInFormInput m-auto mb-3"
        />
        <select {...register("gender")} className="logInFormInput m-auto mb-3">
          <option value="gender">Your Gender</option>
          <option value="female">female</option>
          <option value="male">male</option>
        </select>
        <input
          {...register("address", { required: true })}
          placeholder="address"
          className="logInFormInput m-auto mb-3"
        />
        <input type="submit" className="form-submit" />
      </form>
      <ToastContainer />
    </div>
  );
};

export default PlaceOrder;
