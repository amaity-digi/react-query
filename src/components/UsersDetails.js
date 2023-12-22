/* eslint-disable react-hooks/rules-of-hooks */
import React from "react";
import { useMutation, useQuery, useQueryClient } from "react-query";
import { deleteUser, getUsers } from "./helper";
import User from "./User";

function UsersDetails() {
  const { status, data, isFetching } = useQuery("users", getUsers);
  const queryClient = useQueryClient();
    const deleteMutation = useMutation(deleteUser,{
   onSuccess: () => queryClient.invalidateQueries('users')
    });
  const handleClick = async (e) => {
    console.log("sssssssssssss",e.target.id);
    if(e.target.id){
      console.log("ddaa")
      await deleteMutation.mutate(e.target.id);
      alert("Data deleted SuccessFully!");
    }
  };

  return (
    <div>
      <h3>users</h3>
      {isFetching ? <div>Background Updating...</div> : <></>}
      {status === "success" ? (
        data?.map((value, index) => <User key={index} data={value} handleClick={handleClick}/>)
      ) : (
        <></>
      )}
    </div>
  );
}

export default UsersDetails;
