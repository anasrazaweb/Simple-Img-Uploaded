
import React, { useRef, useState } from "react";
import './App.css'

function App() {
  const [file, setFile] = useState();

  function handleChange(e) {
    console.log(e.target.files);
    setFile(URL.createObjectURL(e.target.files[0]));
  }

  const imgselect = () => {
    ImgRef.current.click()
  }

  const ImgRef = useRef(null)

  return (
    <div className="App" onClick={imgselect}>
      <h2>Add Image:</h2>
      <input type="file" onChange={handleChange} ref={ImgRef} hidden />
      <img src={file} />
    </div>
  );
}

export default App;
