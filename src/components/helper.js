export const getUsers = async () => {
    const data = await fetch(`http://localhost:3000/users`);
    return data.json();
}

export const createUser = async (postData) =>{
    if(!postData) return Promise.reject("Post Data is not Provided!");
    const data = await fetch(`http://localhost:3000/users`, {
        method: "POST",
        headers: {
            'Content-Type': 'application/json'},
            body: JSON.stringify(postData)
    });
    return data.json();
}

export const deleteUser = async(userId) => {
    if(!userId) return Promise.reject("userId not Found!");
    const data = await fetch(`http://localhost:3000/users/${userId}`,{
        method: "DELETE"
    });
    console.log(data,'ssss')
    return data;
}