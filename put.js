const apiEndPoint = "http://localhost:3000/employees ";

const updateButton = document.querySelector("#updatePost");
function updatePost() {
    fetch(apiEndPoint).then()
}
const updatePost = async (newpost, id) => {

    try {

        const response = await fetch(`${apiEndPoint}/${id}`, {

            method: "PUT",

            body: JSON.stringify(newpost),

            headers: { "Content-type": "application/json; charset=UTF-8" },

        });

        if (response.status != 201) {

            throw new Error(`Something went wrong, Status Code: ${response.status}`);

        } const post = await response.json();

        return post;

    } catch (error) {

        console.log(error);
    }
};

updateButton.addEventListener('click', async () => {

    const newPost = {
        id: 123,
        firstname: pampa,
        email: pampapathigmail.com,
        lastname: reddy,



    },
    const updatedPost = await updatePost(newPost, 123);
    console.log(updatedPost);
}
);