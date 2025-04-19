
import { toast } from "react-toastify";
const getStoredList=()=>{
    const storedItem=localStorage.getItem("added cart");
    if(storedItem){
        const StoredList=JSON.parse(storedItem);
        return StoredList;
    }else{
        return [];
    }
}

const addToStorage=(id)=>{
    const storedItem=getStoredList();
    if(storedItem.includes(id)){
        alert("The item has  already included")
    }
    else{
        storedItem.push(id);
        const storedItemString=JSON.stringify(storedItem);
        localStorage.setItem("added cart", storedItemString);

        toast("Your item Added")
    }
}

export {addToStorage,getStoredList};