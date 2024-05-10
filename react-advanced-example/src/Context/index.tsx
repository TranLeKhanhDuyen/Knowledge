import React, { useState } from "react";
import { ImageSizeContext } from "./Context";
import List from "./List";
import './style.css'

const ContextExample = () => {
  const [isLarge, setIsLarge] = useState(false);
  const imageSize: number = isLarge ? 150 : 100;

  return (
    <ImageSizeContext.Provider value={imageSize}>
      <label>
        <input
          type="checkbox"
          checked={isLarge}
          onChange={(e) => {
            setIsLarge(e.target.checked);
          }}
        />
        Use large images
      </label>
      <hr />
      <List />
    </ImageSizeContext.Provider>
  );
}

export default ContextExample