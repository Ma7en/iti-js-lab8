let req = new XMLHttpRequest();
req.open("GET", "https://jsonplaceholder.typicode.com/posts");
req.send();
req.addEventListener("load", function (e) {
    // console.log(`1-->`, req.responseText);
    let response = JSON.parse(req.responseText);
    console.log(`2-->`, response); // body - id - title - userId

    let container = document.getElementById("container");

    // let postsHTML = response
    //     .map((post) => {
    //         return `
    //         <div class="post">
    //             <p class="userId">User ID: ${post.userId}</p>
    //             <h2>${post.title}</h2>
    //             <p>${post.body}</p>
    //         </div>
    //     `;
    //     })
    //     .join("");
    let postsHTML = response
        .map((post) => {
            console.log(`3-->`, post);

            return `
                <div class="post ${
                    post.userId == 1
                        ? "one"
                        : post.userId == 2
                        ? "two"
                        : post.userId == 3
                        ? "three"
                        : "four"
                }">
                <p class="userId ">User ID: ${post.userId}</p>
                <h2>${post.title}</h2>
                <p>${post.body}</p>
                </div>
                `;
        })
        .join("");

    container.innerHTML += postsHTML;
});
