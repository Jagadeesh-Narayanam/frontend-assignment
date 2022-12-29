import { useState } from "react";
import Input from "./components/Input"
import ShowTable from "./components/ShowTable";
function App() {
  const [uploadedFileData,setUploadedFileData] = useState([]);

  const getUploadedFile = (convertedData) =>{
    setUploadedFileData(convertedData);
  }

  return (
    <div className="app">
      <Input fileUploaded={getUploadedFile}/>
      <ShowTable data={uploadedFileData}/>
    </div>
  );
}

export default App;
