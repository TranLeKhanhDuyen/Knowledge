import "./App.css";
import "./components/style.css";
import Gallery from "./components/Props/Profile";
import State from "./components/Sate-variable/state";
import Form from "./components/Sate-variable/form";
import FeedbackForm from "./components/Sate-variable/feebackForm";
import VideoPlayerApp from "./components/effect/VideoPlayer";
import MyInputForm from "./components/effect/MyInput";
import PackingList from "./components/ConditionalReander/PackingList";

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
    </div>
  );
}

export default App;
