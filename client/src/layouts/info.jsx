import ChatPage from "../pages/chat";
import DetailChatPage from "../pages/detailChat";
import DetailGroupPage from "../pages/detailGroup";

export default function InfoLayout() {
  return (
    <div className="bg-secondary w-full h-full infolayout max-h-full max-w-full relative">
      <ChatPage />
      <div className="w-full h-full bg-secondary absolute z-30 lg:static lg:border-l left-0 right-0 border-borderColor">
        <DetailChatPage />
        {/* <DetailGroupPage /> */}
      </div>
    </div>
  )
}