import { useState,useEffect } from "react"; 
// url is given instead of hardcode 
const useFetch = (url) => {
    const [data,setdata]=useState(null)
  const[isLoading,setisLoading]=useState(true);
  const [error,seterror] = useState(null);

useEffect(()=>{
  const abortcont= new AbortController();
    fetch(url,{signal:abortcont.signal}) 
    // res = response 
      .then(res => {
        console.log(res);
        if(res.ok===false){
          throw Error('couldnt fetch data');
        }
        return res.json()
      }).then(data => {
        setdata(data);
        setisLoading(false);
        seterror(null)
      })
      .catch(error => {
        if(error.name==="AbortError"){
          console.log('fetch aborted');
        }else{
        seterror(error.message);
        setisLoading(false);
        }
      });
    return ()=> abortcont.abort()
  },[url]);
  return{data,isLoading,error};
}
export default useFetch;