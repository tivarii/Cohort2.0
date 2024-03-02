import { selector } from "recoil";
import { CountAtom } from "../atoms/countAtom";

export const EvenSelector=selector({
    key: 'evenSelector',
    get:(props)=>{
        const count=props.get(CountAtom);
        return count%2;
    }
})