import "./App.css";
import "./components/style.css";
import Gallery from "./components/Props/Profile";
import State from "./components/Sate-variable/state";
import Form from "./components/Sate-variable/form";
import FeedbackForm from "./components/Sate-variable/feebackForm";
import VideoPlayerApp from "./components/effect/VideoPlayer";

function App() {
  return (
    <div>
      <Gallery />
      <State />
      <Form />
      <FeedbackForm />
      <VideoPlayerApp />
    </div>
  );
}

export default App;
