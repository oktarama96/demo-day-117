import { useOnlineStatus } from "../tools";

const GetOnlineStatus = () => {
  const isOnline = useOnlineStatus();

  return (
    <div>
      <h1>You are currently {isOnline ? "Online" : "Offline"}</h1>
    </div>
  );
};

export default GetOnlineStatus;
