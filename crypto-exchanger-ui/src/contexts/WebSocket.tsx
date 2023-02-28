import { createContext, useContext } from "react";
import { io, Socket } from "socket.io-client";

export interface ISocketProviderProps {
  children: React.ReactNode;
}

export const socket = io("http://localhost:9229");

const WebSocketContext = createContext<Socket>(socket);

export const WebSocketProvider = ({ children }: ISocketProviderProps) => {
  return (
    <WebSocketContext.Provider value={socket}>
      {children}
    </WebSocketContext.Provider>
  );
};

export const useWebSocket = () => {
  const context = useContext(WebSocketContext);

  return context;
};
