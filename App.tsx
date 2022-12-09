import * as React from 'react';
import { FilesUpload } from './components/FilesUpload';
import './style.css';

export default function App() {
  return (
    <div>
      <h3 className="app-name">Simple Files Uploader App</h3>
      <FilesUpload />
    </div>
  );
}
