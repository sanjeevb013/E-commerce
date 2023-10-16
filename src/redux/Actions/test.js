// const axios =require('axios') ;
// axios.get('https://dummyjson.com/products').then((resp)=>{
//         const products=resp.data.products;
//         console.log(products);
//         dispatch(successRequest(products));
//         }).catch((error)=>{
//             console.log(error.message);
            
//         });


fetch('https://dummyjson.com/products').then((resp)=>{
            resp.json().then((data)=>{
                console.log(data);
            })
        })