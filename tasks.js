// // const sleep = ms => new Promise((resolve) => setTimeout(resolve, ms));


// // const request = async () => {
// //     await sleep(300);

// //     const array = [{
// //         "id": 1,
// //         "name": "Leanne Graham",
// //         "username": "Bret",
// //         "email": "Sincere@april.biz",
// //         "phone": "1-770-736-8031 x56442"
// //     }];
    
// //     return array;
// //     }

// // const getData = async () => {
// //     const array = await request();
// //     console.log(array);
// // }

// // getData();

// const ENDPOINT = "https://jsonplaceholder.typicode.com/posts";

// const getPosts = async () => {
//   try {
//     const post = await fetch(ENDPOINT, {mode: "no-cors", headers: {"Access-Control-Allow-Origin": "*"}});
//     return post;
//   } catch (err) {
//     console.log(err);
//   }
// };

// getPosts().then((post) => {
//   console.log(post);
// });
