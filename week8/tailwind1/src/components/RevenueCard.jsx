export const RevenueCard = (props) => {
  return (
    <div className="grid ">
      <div className="rounded-md ">
        <img src={props.imageLink} />
      </div>
      <div className="flex gap-x-4">
        <div className="rounded-full"><img  src={props.thumbNail} /></div>
        <div className="font-bold">{props.title}</div>
      </div>
      <div>{props.channelName}</div>
      <div className="flex gap-x-2">
        <div>{props.view} views</div>
        <div>.{props.timestamp}</div>
      </div>
    </div>
  );
};
