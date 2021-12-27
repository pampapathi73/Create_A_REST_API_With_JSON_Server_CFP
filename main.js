const apiEndPoint = "http://localhost:3000/employees ";

const getButton = document.querySelector("#getPost");
const createButton = document.querySelector("#createtPost");
const updateButton = document.querySelector("#updatePost");
const patchButton = document.querySelector("#patchPost");
const deleteButton = document.querySelector("#deletePost");
//get post
const getPosts = async () => {
try {
    const response = await fetch(apiEndPoint);
if(response.status != 200){
    throw new Error(`Some Error, Status code:${response.status}`,);
}

const posts = await response.json();
return posts;
    
} catch (error) {
    console.log(error);
    
}
};
// create post
var ID = 200;
const createPost = async (newpost) => {
    console.log(newpost);
   try {
    const response = await fetch(apiEndPoint,{
        method : "POST",
        body : JSON.stringify(newpost),
        headers: {"Content-type": "application/json; charset=UTF-8"}
    });
    if(response.status !=201){
        throw new Error(`Something went wrong Status Code:${response.status}`);

    }

    const post = await response.json();
    return post;
       
   } catch (error) {
       console.log(error);
       
   }

};
//update post
const updatePost = async (newpost,id)=>{
    try {
        const response = await fetch(`${apiEndPoint}/${id}`,{
            method : "PUT",
            body : JSON.stringify(newpost),
            headers: {"Content-type": "application/json; charset=UTF-8"}
        });
        if(response.status !=200){
            throw new Error(`Something went wrong Status Code:${response.status}`);
    
        }
    
        const post = await response.json();
        return post;
           
       } catch (error) {
           console.log(error);
           
       }
    


}
// patch post
const patchPost = async (newpost,id) =>{
    try {
        const response = await fetch(`${apiEndPoint}/${id}`,{
            method : "PATCH",
            body : JSON.stringify(newpost),
            headers: {"Content-type": "application/json; charset=UTF-8"}
        });
        if(response.status !=200){
            throw new Error(`Something went wrong Status Code:${response.status}`);
    
        }
    
        const post = await response.json();
        return post;
           
       } catch (error) {
           console.log(error);
           
       }

};
// delete post
const deletePost = async (id)=>{
    try {
        const response = await fetch(`${apiEndPoint}/${id}`,{
            method : "DELETE",
            
        });
        if(response.status !=200){
            throw new Error(`Something went wrong Status Code:${response.status}`);
    
        }
    
        const post = await response.json();
        return post;
           
       } catch (error) {
           console.log(error);
           
       }


}
getButton.addEventListener('click', async () => {
   const posts = await getPosts();
   if(posts){

   
   
  const table =  ` <table class="table">
    <thead>
      <tr>
        <th scope="col">#</th>
        <th scope="col">Employess</th>
        
      </tr>
    </thead>
    <tbody>
    ${posts.map(
        (post) => ` <tr>
    <th scope="row">${post.id}</th>
    <td>${post.FirstName}</td>
   
  </tr>
  <tr>`).join('\n')}
     
       
    </tbody>
  </table>`;

  document.querySelector('#table').innerHTML = table;
    }
});

// createbutton
createButton.addEventListener('click',async() =>{
   const newPost = {
       FirstName: "pampa",
      LastName : " kumar",
      email: "pampareddy@gmail.com",
      id:ID++,
   };
   const createdPost=  await createPost(newPost);
console.log(createdPost);

});

// update button
updateButton.addEventListener('click',async() =>{
    const newPost = {
        FirstName: "pampa",
       LastName : " updated kumar",
       email: "pampareddy@gmail.com",
       id:2,
    };
    const updatedPost= await updatePost(newPost,2);
 console.log(updatedPost);
 
 });
//patch button
 patchButton.addEventListener('click',async() =>{
    const newPost = {
       
       LastName : " updated kumar",
       
    };
    const patchedPost= await patchPost(newPost,2);
 console.log(patchedPost);
 
 });

 //delet
 deleteButton.addEventListener('click',async() =>{
    
    const deleteddPost= await deletePost(2);
 console.log(deleteddPost);
 
 });