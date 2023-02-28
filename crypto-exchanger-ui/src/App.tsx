import { WebSocketProvider } from "./contexts/WebSocket";
import Home from "./pages/Home";
import GlobalStyles from "./styles/global";

function App() {
  return (
    <WebSocketProvider>
      <Home />
      <GlobalStyles />
    </WebSocketProvider>
  );
}

export default App;
