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

import { Routes, Route, Link, BrowserRouter as Router } from "react-router-dom";

function App() {
  return (
    <>
      <Router>
        <>
          <Link to="/props">
            <p>Props</p>
          </Link>
          <Link to="/state">
            <p>State</p>
          </Link>
          <Link to="/effect">
            <p>Effect</p>
          </Link>
          <Link to="/render">
            <p>Render</p>
          </Link>
          <Link to="/usestate">
            <p>UseSate</p>
          </Link>
          <Link to="/useeffect">
            <p>UseEffect</p>
          </Link>
        </>

        <Routes>
          <Route path="/props" element={<Gallery />} />
          <Route
            path="/state"
            element={
              <>
                <State />
                <Form />
                <FeedbackForm />
              </>
            }
          />
          <Route
            path="/effect"
            element={
              <>
                <VideoPlayerApp />
                <MyInputForm />
              </>
            }
          />
          <Route
            path="/render"
            element={
              <>
                <PackingList />
                <DrinkList />
              </>
            }
          />
          <Route
            path="/usestate"
            element={
              <>
                <Counter />
                <MyInput />
                <FormSate />
              </>
            }
          />
          <Route path="/useeffect" element={<ChatRoomApp />} />
          <Route path="/todo" element={<Todo />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
