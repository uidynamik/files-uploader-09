import * as React from 'react';
import './Progress.css';

interface IProgressProps {
  progressValue: number;
  file: File;
}

export const ProgressBar = ({ progressValue, file }: IProgressProps) => {
  const handleSingleFileUpload = () => {
    // handle single file upload action here
  };

  return (
    <div className="progress-container">
      <div className="upload-description">
        <div className="file-name">{file.name}</div>
        <div className="file-size">{file.size * 0.001}kb</div>
      </div>
      <div className="progress-wrapper">
        <div className="progress-bar" style={{ width: `${progressValue}%` }} />
      </div>
      <button className="upload-single-button" onClick={handleSingleFileUpload}>
        Upload
      </button>
    </div>
  );
};
