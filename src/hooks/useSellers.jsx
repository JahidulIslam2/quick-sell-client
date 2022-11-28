const { useEffect } = require("react")
const { useState } = require("react")

const useSellers = (email) => {
    const [loadingSeller,setLoadingSeller] =useState(true)
    const [itsSellers,setItsSellers] =useState(false)
    useEffect(()=>{
        if(email){
            fetch(`http://localhost:5000/users/sellers/${email}`)
            .then((res)=> res.json())
            .then((data)=>{
                console.log(data);
                setItsSellers(data.isSellers)
                setLoadingSeller(false)
                
            })

        }

    },[email])

    return [itsSellers,loadingSeller]
};

export default useSellers;