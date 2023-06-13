
const addToDB = (id) => {
    let jobCart = {}

    const storedCart = localStorage.getItem('job-cart')
    if (storedCart) {
        jobCart = JSON.parse(storedCart)
    }

    const quantity = jobCart[id]
    if(quantity){
        jobCart[id] = quantity
    }
    else{
        jobCart[id]=1
    }
    localStorage.setItem('job-cart',JSON.stringify(jobCart))
}

const getStoredCart = () => {
    let jobCart = {}
  
    //get the shopping cart from local storage
    const storedCart = localStorage.getItem('job-cart')
    if (storedCart) {
      jobCart = JSON.parse(storedCart)
    }
    return jobCart
  }

export {addToDB, getStoredCart};
  