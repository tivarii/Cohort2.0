import { selector, useRecoilValue } from "recoil";
import { messageCount } from "../atoms/messageCount";
import { notificationCount } from "../atoms/notification";
import { myNetworkCount } from "../atoms/myNetworkCount";
import { jobsCount } from "../atoms/jobsCount";

export const totalCount=selector({
    key:"totalCount",
    get: ((props)=>{
        const mc=useRecoilValue(messageCount);
        const nc=useRecoilValue(notificationCount);
        const mnc=useRecoilValue(myNetworkCount);
        const jc=useRecoilValue(jobsCount);
        return mc+nc+mnc+jc;
    })
})