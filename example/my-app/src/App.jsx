import "./App.css";
import "./components/style.css";
import Gallery from "./components/Props/Profile";
import State from "./components/Sate-variable/state";
import Form from "./components/Sate-variable/form";
import FeedbackForm from "./components/Sate-variable/feebackForm";
import VideoPlayerApp from "./components/effect/VideoPlayer";
import MyInputForm from "./components/effect/MyInput";
import PackingList from "./components/ConditionalReander/PackingList";
import DrinkList from "./components/ConditionalReander/DrinkList";
import Counter from "./components/UseSate/Counter";
import MyInput from "./components/UseSate/MyInput";
import FormSate from "./components/UseSate/Form";
import ChatRoomApp from "./components/UseEffect/ChatRoom";
import Todo from "./components/Todo/Todo";

function App() {
  return (
    <div>
      <Gallery />
      <State />
      <Form />
      <FeedbackForm />
      <VideoPlayerApp />
      <MyInputForm />
      <PackingList />
      <DrinkList />
      <Counter />
      <MyInput />
      <FormSate />
      <ChatRoomApp />
      <Todo />
    </div>
  );
}

export default App;
