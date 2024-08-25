"use client";
import { Document, Page, pdfjs } from "react-pdf";
import { useState } from "react";
import "react-pdf/dist/Page/AnnotationLayer.css";
import "react-pdf/dist/Page/TextLayer.css";

const PDFViewer = ({ fileUrl , title }: { fileUrl: string, title: string }) => {
  const [numPages, setNumPages] = useState<number | null>(null);
  const [pageNumber, setPageNumber] = useState(1);
  const [scale, setScale] = useState(1.0);
  const [collapsed, setCollapsed] = useState(false);

  pdfjs.GlobalWorkerOptions.workerSrc = "/js/pdf.worker.min.mjs";

  const onDocumentLoadSuccess = ({ numPages }: { numPages: number }) => {
    setNumPages(numPages);
  };

  const zoomIn = () => {
    // setScale((prevScale) => Math.min(prevScale + 0.1, 3.0));
  };

  const zoomOut = () => {
    // setScale((prevScale) => Math.max(prevScale - 0.1, 0.5));
  };

  const toggleCollapse = () => {
    setCollapsed(!collapsed);
  };

  return (
    <div className="relative w-full max-w-3xl mx-auto">
      <div className="flex flex-col h-[82px] p-3 rounded-t-2xl bg-[#FFFFFF7A] border-b">
        <div className="w-max text-sm text-neutrals-700 font-medium py-1 px-3 bg-white rounded-full truncate">
          {title}
        </div>
        <div className="flex items-center justify-between mt-2">
          <div className="flex items-center gap-[6px]">
            <button onClick={zoomOut}>
              <img src="/zoomOut.svg" alt="Zoom Out" className="h-4" />
            </button>
            <span className="text-xs font-medium text-neutrals-700">
              {Math.round(scale * 100)}%
            </span>
            <button onClick={zoomIn}>
              <img src="/zoomIn.svg" alt="Zoom In" className="h-4" />
            </button>
          </div>

          <div className="flex items-center gap-3">
            <button onClick={toggleCollapse}>
              <img src="/fullScreen.svg" alt="Fullscreen" />
            </button>
            <button onClick={toggleCollapse}>
              <img src="/collapse.svg" alt="Collapse" />
            </button>
          </div>
        </div>
      </div>

      <div className="rounded-b-lg bg-white overflow-auto">
        <div className="flex justify-center">
          <Document file={fileUrl} onLoadSuccess={onDocumentLoadSuccess}>
            <div className="overflow-auto max-w-full">
              <Page
                pageNumber={pageNumber}
                scale={scale}
                className="inline-block"
                width={600}
              />
            </div>
          </Document>
        </div>
      </div>
    </div>
  );
};

export default PDFViewer;