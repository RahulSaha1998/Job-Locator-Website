import { getShoppingCart } from "../utilities/fakeDb";

const appliedJobsLoader = async() => {
    const loadedJobs = await fetch('/jobdata.json');
    const jobs = await loadedJobs.json();

    const storedCart = getShoppingCart();
    const savedCart = [];

    // console.log(storedCart);

    for (const id in storedCart){
        const addedJob = jobs.find(jb => jb.id == id);
        // console.log(addedJob);
        if(addedJob){
            const quantity = storedCart[id];
            addedJob.quantity = quantity;
            savedCart.push(addedJob);
        }
    }

    return savedCart;
}

export default appliedJobsLoader;