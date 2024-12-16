import { useWindowSize } from "../tools";

const WindowDimensions = () => {
  const { width, height } = useWindowSize();

  return (
    <div>
      <h1>Window Dimensions</h1>
      <p>Width: {width}px</p>
      <p>Height: {height}px</p>
    </div>
  );
};

export default WindowDimensions;
