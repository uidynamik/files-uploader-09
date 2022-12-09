import * as React from 'react';
import { DropZone } from './DropZone/DropZone';
import './FilesUpload.css';
import { ProgressBar } from './Progress/Progress';

export const FilesUpload = () => {
  const [progressValue /*setProgressValue */] = React.useState(0);
  const [files, setFiles] = React.useState<File[]>([]);
  const inputRef = React.useRef<HTMLInputElement>(null);

  const handleUploadAll = () => {
    // handle your upload all action here
    alert('Tell me where to upload these');
  };

  const handleClearAll = () => {
    setFiles([]);
    inputRef.current.value = null;
  };

  return (
    <div>
      <div className="files-upload-card">
        <div className="title-section">
          <div className="files-upload-title">Upload files</div>
          <button className="close-button"> x </button>
        </div>
        <DropZone setFiles={setFiles} inputRef={inputRef} />
        <div className="progress-section">
          {files.map((file) => (
            <ProgressBar
              key={file.name}
              progressValue={progressValue}
              file={file}
            />
          ))}
        </div>
        {files.length !== 0 && (
          <div className="base-button-wrapper">
            <button className="clear-button" onClick={handleClearAll}>
              Clear
            </button>
            <button className="upload-all-button" onClick={handleUploadAll}>
              Upload all
            </button>
          </div>
        )}
      </div>
    </div>
  );
};
