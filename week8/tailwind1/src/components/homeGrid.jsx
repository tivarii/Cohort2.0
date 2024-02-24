import { RevenueCard } from "./RevenueCard"
// import image1 from "../image/image1.jpg"
// import "../image/"
const data=[{
    key:1,
    imageLink : "../image/image1.jpg",
    thumbNail: "https://yt3.ggpht.com/ytc/AIf8zZSXPzw5idkozpspLI-wTmacWWBwDbaXm3NwgWZOA-s=s68-c-k-c0x00ffffff-no-rj",
    title: "Bhumi Pednekar Interview में Sushant Shahrukh और फोटो कल्चर पर Saurabh Dwivedi से क्या बोलीं?Baithki",
    channelName:"The Lallantop",
    view: "17k",
    timestamp: "15 hour ago"
},
{
    key:2,
    imageLink : "../image/image1.jpg",
    thumbNail: "https://yt3.ggpht.com/ytc/AIf8zZSXPzw5idkozpspLI-wTmacWWBwDbaXm3NwgWZOA-s=s68-c-k-c0x00ffffff-no-rj",
    title: "Bhumi Pednekar Interview में Sushant Shahrukh और फोटो कल्चर पर Saurabh Dwivedi से क्या बोलीं?Baithki",
    channelName:"The Lallantop",
    view: "17k",
    timestamp: "15 hour ago"
},
{
    key:3,
    imageLink : "../image/image1.jpg",
    thumbNail: "https://yt3.ggpht.com/ytc/AIf8zZSXPzw5idkozpspLI-wTmacWWBwDbaXm3NwgWZOA-s=s68-c-k-c0x00ffffff-no-rj",
    title: "Bhumi Pednekar Interview में Sushant Shahrukh और फोटो कल्चर पर Saurabh Dwivedi से क्या बोलीं?Baithki",
    channelName:"The Lallantop",
    view: "17k",
    timestamp: "15 hour ago"
},
{
    key:4,
    imageLink : "../image/image1.jpg",
    thumbNail: "https://yt3.ggpht.com/ytc/AIf8zZSXPzw5idkozpspLI-wTmacWWBwDbaXm3NwgWZOA-s=s68-c-k-c0x00ffffff-no-rj",
    title: "Bhumi Pednekar Interview में Sushant Shahrukh और फोटो कल्चर पर Saurabh Dwivedi से क्या बोलीं?Baithki",
    channelName:"The Lallantop",
    view: "17k",
    timestamp: "15 hour ago"
}]

export const HomeGrid=()=>{
    console.log("in the grid");
    return (<div className="grid grid-cols-1 gap-2 md:grid-cols-2 lg:grid-cols-4">
        {data.map((d)=>{return <RevenueCard key={d.key} imageLink={d.imageLink} thumbNail={d.thumbNail} title={d.title} channelName={d.channelName} view={d.view} timestamp={d.timestamp}></RevenueCard>})}
    </div>
    )
//     return (
//         <div className="h-16 bg-black ">

//         </div>
//     )
// }

}