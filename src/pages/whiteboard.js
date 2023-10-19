import React, { useRef, useState } from "react";
import { ReactSketchCanvas } from "react-sketch-canvas";
import { saveAs } from "file-saver";

const WhiteBoard = () => {
  const [color, setColor] = useState("white");
  const canvasRef = useRef(null);

  const selectPenColor = (colors) => {
    setColor(colors);
  };

  const handleDownload = () => {
    canvasRef.current.exportImage("png").then((data) => {
      // Convert canvas image data to Blob
      console.log('====================================');
      console.log(data);
      console.log('====================================');
      const blob = dataURLtoBlob(data);
      // Create a download link for the Blob\
      console.log('====================================');
      console.log(blob);
      console.log('====================================');
      saveAs(blob, "bitastik-canvas.png");
    });
  };

  const dataURLtoBlob = (dataURL) => {
    const parts = dataURL.split(";base64,");
    console.log('====================================');
    console.log(parts);
    console.log('====================================');
    const contentType = parts[0].split(":")[1];
    console.log('====================================');
    console.log(contentType);
    console.log('====================================');
    const raw = window.atob(parts[1]);
    console.log('====================================');
    console.log(raw);
    console.log('====================================');
    const rawLength = raw.length;
    console.log('====================================');
    console.log(rawLength);
    console.log('====================================');
    const uint8Array = new Uint8Array(rawLength);
    console.log('====================================');
    console.log(uint8Array);
    console.log('====================================');
    for (let i = 0; i < rawLength; ++i) {
      uint8Array[i] = raw.charCodeAt(i);
    }
    console.log('====================================');
    console.log(uint8Array);
    console.log('====================================');
    return new Blob([uint8Array], { type: contentType });
  };

  return (
    <div className="flex flex-col h-screen w-full ml-16 ">
      <ReactSketchCanvas
        className=" border-white w-full"
        ref={canvasRef}
        strokeWidth={4}
        strokeColor={color}
        canvasColor="black"
      />
      <div className="flex flex-wrap mt-4 ">
        <button
          className="border-2 text-white border-white p-2 bg-transparent ml-1 my-1"
          onClick={handleDownload}
        >
          Get Image
        </button>
        <button
          className="border-2  text-white border-white p-2 bg-transparent  my-1"
          onClick={() => canvasRef.current.eraseMode(false)}
        >
          Pen
        </button>
        <button
          className="border-2 text-white border-white p-2 bg-transparent  my-1"
          onClick={() => canvasRef.current.eraseMode(true)}
        >
          Eraser
        </button>
        <button
          className="border-2  text-white border-white p-2 bg-transparent  my-1"
          onClick={() => canvasRef.current.resetCanvas()}
        >
          Reset
        </button>
        <button
          className="border-2  text-white border-white p-2 bg-transparent  my-1"
          onClick={() => canvasRef.current.redo()}
        >
          Redo
        </button>
        <button
          className="border-2  text-white border-white p-2 bg-transparent  my-1"
          onClick={() => canvasRef.current.undo()}
        >
          Undo
        </button>
      </div>
      <div className="mt-2 ml-2 mb-3 flex flex-wrap gap-1">
        {[
          "white",
          "rgb(250, 49, 66)",
          "rgb(21, 127, 251)",
          "rgb(253, 210, 48)",
          "rgb(81, 215, 39)",
          "rgb(241, 124, 252)",
          "rgb(131, 95, 244)",
          "rgb(114, 225, 253)",
          "rgb(255, 152, 0)",
          "rgb(152, 82, 19)",
        ].map((colorOption) => (
          <button
            key={colorOption}
            className={`w-6 h-6 sm:w-8 sm:h-8 rounded-full border-2 border-black ${
              colorOption === color ? "ring-2 ring-offset-2 ring-white" : ""
            }`}
            style={{ backgroundColor: colorOption }}
            onClick={() => selectPenColor(colorOption)}
          />
        ))}
      </div>
    </div>
  );
};

export default WhiteBoard;
