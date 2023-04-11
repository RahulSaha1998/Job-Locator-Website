import { getShoppingCart } from "../utilities/fakeDb";

const appliedJobsLoader = async() => {
    const loadedJobs = await fetch('/jobdata.json');
    const jobs = await loadedJobs.json();

    const storedCart = getShoppingCart();
    const savedCart = [];

    console.log(storedCart);

    for (const id in storedCart){
        const addedJob = jobs.find(jb => jb.id == id);
        console.log(addedJob);
        if(addedJob){
            const quantity = storedCart[id];
            addedJob.quantity = quantity;
            savedCart.push(addedJob);
        }
    }

// const appliedJobsLoader = async () => {
//     const loadedProducts = await fetch('/jobdata.json');
//     const products = await loadedProducts.json();

//     // if cart data is in database, you have to use async await
//     const storedCart = getShoppingCart();

//     const savedCart = [];

//     for (const id in storedCart) {
//         const addedProduct = products.find(pd => pd.id == id);
//         if (addedProduct) {
//             const quantity = storedCart[id];
//             addedProduct.quantity = quantity;
//             savedCart.push(addedProduct);
//         }
//     }

    return savedCart;
}

export default appliedJobsLoader;