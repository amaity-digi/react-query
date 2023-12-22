import React from 'react'
import { useForm } from "react-hook-form"
import { useMutation, useQueryClient } from 'react-query'
import { createUser } from './helper';

function CreateUser() {
     const {register, handleSubmit, resetField } = useForm();
     const queryClient = useQueryClient();
    const addMutation = useMutation(createUser,{
        onSuccess: () => queryClient.invalidateQueries('users')
    });
    
    const onSubmit = async(data) => {
       if(data){
        await addMutation.mutate(data);
        alert("Data Created Successfuly!");
        resetField('name');
        resetField('email');
       }
       
    }
  return (
    <div>
        <h2>CreateUser</h2>
        <form onSubmit={handleSubmit(onSubmit)}>
      <label>First Name</label>
      <input {...register("name")} />
      <label>Gender Selection</label>
      <select {...register("gender")}>
        <option value="female">female</option>
        <option value="male">male</option>
        <option value="other">other</option>
      </select>
      <label>EmailId</label>
      <input {...register("email")} />
      <input type="submit" />
    </form>
    </div>
  )
}

export default CreateUser