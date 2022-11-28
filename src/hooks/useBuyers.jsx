const { useEffect } = require("react")
const { useState } = require("react")

const useBuyers = (email) => {

    const [loadingBuyers,setLoadingBuyers] =useState(true)
    const [itsBuyers,setItsBuyers] =useState(false)


    useEffect(()=>{
        if(email){
            fetch(`http://localhost:5000/users/buyers/${email}`)
            .then((res)=> res.json())
            .then((data)=>{
                console.log(data);
                setItsBuyers(data.isBuyers)
                setLoadingBuyers(false)
                
            })

        }

    },[email])

    return [itsBuyers,loadingBuyers]
};

export default useBuyers;