import { atomFamily } from "recoil";
export const todo=[{
    id:1,
    titlle:"gym",
    description:"food"

},{
    id:2,
    titlle:"food",
    description:"eat Food"
}]
export const todosfamily=atomFamily({
    key:"todoAtomFamily",
    default:(id)=>{
        { return todo.find(x=>x.id===id)}
    }
})