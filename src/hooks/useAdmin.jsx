const { useEffect } = require("react")
const { useState } = require("react")

const useAdmin = (email) => {
    const [adminLoader,setAdminLoader] =useState(true)
    const [itsAdmin,setItsAdmin] =useState(false)
    useEffect(()=>{
        if(email){
            fetch(`http://localhost:5000/users/admin/${email}`)
            .then((res)=> res.json())
            .then((data)=>{
                console.log(data);
                setItsAdmin(data.isAdmin)
                setAdminLoader(false)
                
            })

        }

    },[email])

    return [itsAdmin,adminLoader]
};

export default useAdmin;