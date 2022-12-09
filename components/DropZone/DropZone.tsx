import * as React from 'react';
import './DropZone.css';

interface IDropZoneProps {
  inputRef: React.MutableRefObject<HTMLInputElement>;
  setFiles: React.Dispatch<React.SetStateAction<File[]>>;
}

const { useState } = React;

export const DropZone = ({ inputRef, setFiles }: IDropZoneProps) => {
  const [isDragging, setIsDragging] = useState(false);

  const dragOver: React.DragEventHandler<HTMLDivElement> = (e) => {
    e.preventDefault();
    setIsDragging(true);
  };

  const dragEnter: React.DragEventHandler<HTMLDivElement> = (e) => {
    e.preventDefault();
  };

  const dragLeave: React.DragEventHandler<HTMLDivElement> = (e) => {
    e.preventDefault();
    setIsDragging(false);
  };

  const fileDrop: React.DragEventHandler<HTMLDivElement> = (e) => {
    e.preventDefault();
    setIsDragging(false);
    const files = e.dataTransfer.files;
    setFiles((prevFiles) => [...prevFiles, ...Array.from(files!)]);
  };

  const handleFileInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    setFiles((prevFiles) => [...prevFiles, ...Array.from(files!)]);
  };

  const handleBrowseFiles = () => {
    if (inputRef && inputRef.current) inputRef.current.click();
  };

  return (
    <div>
      <div
        className={`upload-zone ${isDragging && 'is-dragging'}`}
        onDragOver={dragOver}
        onDragEnter={dragEnter}
        onDragLeave={dragLeave}
        onDrop={fileDrop}
      >
        <img
          src="https://res.cloudinary.com/dloekv0xp/image/upload/v1670582765/assets/cloud-computing_fjfky4.png"
          alt="cloud computing"
          width="60px"
        />
        <h3>
          Drag files here or{' '}
          <button className="browse-button" onClick={handleBrowseFiles}>
            browse
          </button>
        </h3>
      </div>
      <input
        ref={inputRef}
        type="file"
        name="file"
        accept="*"
        style={{ display: 'none' }}
        onChange={(e) => handleFileInputChange(e)}
        multiple
      />
    </div>
  );
};
