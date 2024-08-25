"use client"

import { useStore } from '@/store/useStore';
import { useParams } from 'next/navigation';
import Accordion from '@/components/Accordian';
import PDFViewer from '@/components/PDFViewer';
import Score from '@/components/Score';

export default function Coursework() {
  const { id } = useParams();
  const { files } = useStore();
  const file = files[Number(id)];

  if (!file) {
    return <div>Coursework not found</div>;
  }

  const base64ToBlob = (base64: string, mimeType: string): Blob => {
    const byteCharacters = atob(base64);
    const byteNumbers = new Array(byteCharacters.length);
    for (let i = 0; i < byteCharacters.length; i++) {
      byteNumbers[i] = byteCharacters.charCodeAt(i);
    }
    const byteArray = new Uint8Array(byteNumbers);
    return new Blob([byteArray], { type: mimeType });
  };

  const pdfBlob = base64ToBlob(file.pdfContent, 'application/pdf');
  const pdfUrl = URL.createObjectURL(pdfBlob);

  return (
    <div className="p-4 min-h-screen flex flex-col justify-center items-center">
      <div className="grid lg:grid-cols-2 grid-cols-1 gap-4 sm:ml-16 my-10">
        <PDFViewer fileUrl={pdfUrl} title={file.essayTitle}/>
        <div className="flex flex-col gap-4">
          <Score score={file.score} remark={file.remark} date={new Date(file.evaluatedDate).toLocaleDateString()} />
          <div className="mt-4 flex flex-col gap-2">
            <Accordion title="Criteria A" score={7} color="#3CC28A" />
            <Accordion title="Criteria B" score={5} color="#F9C94E" />
            <Accordion title="Criteria C" score={3} color="#EB751F" />
          </div>
        </div>
      </div>
    </div>
  );
}