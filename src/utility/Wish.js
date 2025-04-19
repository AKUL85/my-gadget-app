import { toast } from "react-toastify";



const getStoredWish=()=>{
    const getWish=localStorage.getItem("Added wish");
    if(getWish){
        const wish=JSON.parse(getWish);
        return wish;

    }
    else{
        return  [];
    }
}
const AddWishToLocalstorage=(id)=>{
    const WishItem=getStoredWish();
    if(WishItem.includes(id)){
        alert("Already in Wishlist");
    }
    else{
         WishItem.push(id);
         const itemStr=JSON.stringify(WishItem);
         localStorage.setItem("Added wish",itemStr);
         toast("Your Item Added in WishList")
    }
}
export {AddWishToLocalstorage,getStoredWish};