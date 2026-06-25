import { BrowserRouter, Route, Routes } from "react-router-dom";
import { DownloadPage } from "./pages/DownloadPage"; 
import {Header} from "./components/Header";


function App() {
  return (
    <BrowserRouter>
    <Header/>  {/*header is shown in every page because this is in outside of the routes */}
      <Routes>
      {/* Home page - Upload page */}
        <Route path="/" element={
          <div style={{ padding: '40px', textAlign: 'center' }}>
          <h1 style={{fontSize:"24px", fontWeight:"bold"}}>Welcome to Vault Hub </h1>
          <p style={{fontSize:"16px", marginTop:"8px"}}>Upload page coming soon...</p>
          <p style={{fontSize:"16px", marginTop:"8px"}}>Go to  <a href="/file/test124">/file/test/123</a> to see dowload page</p>
        </div>
        } />
        {/* Download page */}

        <Route path="/file/:token" element={<DownloadPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;