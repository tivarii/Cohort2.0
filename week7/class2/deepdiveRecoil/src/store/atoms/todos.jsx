import { atom, selector } from "recoil";
import axios from 'axios'
export const todoAtom=atom({
    key:"todoAtom",
    default: selector({
        key:"todoAtomSelector",
        get:async ()=>{
            const res=await axios.get("https://sum-server.100xdevs.com/notifications");
            return res.data;
        }
    })
});