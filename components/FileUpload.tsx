"use client";

import React, { useState, useRef } from "react";
import { useStore } from "@/store/useStore";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";

interface FileData {
  name: string;
  type: string;
  size: number;
  lastModified: number;
  courseworkType: string;
  subject: string;
  essayTitle: string;
  score: number;
  evaluatedDate: number;
  remark: string;
  pdfContent: string;
  stars: number;
  words: number;
  time: number;
}

const FileUpload= () => {
  const { addEvaluatedFile } = useStore();
  const [file, setFile] = useState<File | null>(null);
  const [fileName, setFileName] = useState<any>("");
  const [selectedCoursework, setSelectedCoursework] = useState<string>("");
  const [selectedSubject, setSelectedSubject] = useState<string>("");
  const [essayTitle, setEssayTitle] = useState<string>("");
  const inputRef = useRef<HTMLInputElement | null>(null);
  const dropZoneRef = useRef<HTMLDivElement | null>(null);
  const router = useRouter();

  const courseworkType = ["IA", "EE", "TOK"];
  const subjects = ["Physics", "Maths", "Chemistry"];

  const handleFile = (selectedFile: File | null) => {
    if (
      selectedFile &&
      selectedFile.type === "application/pdf" &&
      selectedFile.size <= 25 * 1024 * 1024
    ) {
      setFile(selectedFile);

      // Convert PDF to Base64
      const reader = new FileReader();
      reader.onload = (e) => {
        const base64Content = e.target?.result as string;
        setFile((prevFile) => ({
          ...prevFile!,
          pdfContent: base64Content.split(",")[1],
        }));
      };
      reader.readAsDataURL(selectedFile);
    } else if (selectedFile) {
      toast.error(
        "Invalid file type/size. Please select a PDF file under 25MB."
      );
    }
  };

  const handleDragOver = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    e.stopPropagation();
  };

  const handleDrop = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    e.stopPropagation();
    const droppedFile = e.dataTransfer.files[0];
    handleFile(droppedFile);
  };

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const uploadedFile = e.target.files?.[0] || null;
    setFileName(e.target.files?.[0].name);
    handleFile(uploadedFile);
  };

  const handleButtonClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    inputRef.current?.click();
  };

  const handleRemove = (e: React.MouseEvent) => {
    e.stopPropagation();
    setFile(null);
    if (inputRef.current) {
      inputRef.current.value = "";
    }
    localStorage.removeItem("fileUploadData");
  };

  const handleDropZoneClick = (e: React.MouseEvent) => {
    if (e.target === dropZoneRef.current) {
      inputRef.current?.click();
    }
  };

  const handleEvaluate = () => {
    if (file && selectedCoursework && selectedSubject && essayTitle) {
      const mockScore = Math.floor(Math.random() * 20);
      const mockRemark =
        mockScore >= 18
          ? "Excellent"
          : "Good effort, room for improvement";

      const evaluatedFileData: FileData = {
        name: file.name,
        type: file.type,
        size: file.size,
        lastModified: file.lastModified,
        courseworkType: selectedCoursework,
        subject: selectedSubject,
        essayTitle: essayTitle,
        score: mockScore,
        evaluatedDate: Date.now(),
        remark: mockRemark,
        pdfContent: (file as any).pdfContent,
        stars: Math.floor(Math.random() * 6) + 1,
        words: Math.floor(Math.random() * 3000) + 1000,
        time: Math.floor(Math.random() * 30) + 10,
      };

      const fileIndex = addEvaluatedFile(evaluatedFileData);
      
      setFile(null);
      setSelectedCoursework("");
      setSelectedSubject("");
      setEssayTitle("");
      
      if (inputRef.current) {
        inputRef.current.value = "";
      }

      router.push(`/coursework/${fileIndex}`);
    }
  };

  const isFormValid =
    file && selectedCoursework && selectedSubject && essayTitle;

  return (
    <div className="p-5 bg-neutrals-50 border rounded-3xl">
      <div
        ref={dropZoneRef}
        className="border bg-white border-dashed border-spacing-5 border-primary-200 rounded-2xl p-6 h-[200px] flex items-center justify-center"
        onDragOver={handleDragOver}
        onDrop={handleDrop}
        onClick={handleDropZoneClick}
      >
        <Input
          type="file"
          className="sr-only"
          accept="application/pdf"
          onChange={handleFileUpload}
          ref={inputRef}
        />
        {file ? (
          <div className="flex items-center justify-center">
            <div className="relative inline-flex border mx-auto w-auto rounded-xl justify-center items-center p-1">
              <div
                onClick={handleRemove}
                className="absolute -top-1 -right-1 bg-white border border-neutrals-300 p-0.5 shadow-custom rounded-full cursor-pointer"
              >
                <img src="/cross.svg" alt="cross" />
              </div>
              <img src="/frame.svg" alt="frame" />
              <div className="flex p-2 items-center justify-center">
                <img src="/greenTick.svg" alt="frame" className="p-1" />
                <p className="text-sm text-neutrals-600">{fileName}</p>
              </div>
            </div>
          </div>
        ) : (
          <div className="flex flex-col justify-center text-center">
            <img src="/uploadfile.svg" alt="icon" className="w-7 mx-auto" />
            <p className="mt-2 text-neutrals-600">Drag and drop a PDF</p>
            <p className="text-neutrals-600 font-normal text-xs">
              <sup>*</sup>Limit 25 MB per file
            </p>
            <div className="mt-5">
              <Button
                className="shadow-custom"
                onClick={handleButtonClick}
                variant="outline"
              >
                Upload your file
              </Button>
            </div>
          </div>
        )}
      </div>

      <div className="mt-6">
        <p className="mb-1.5 text-sm font-light text-neutrals-600">
          Select your course & subjects<sup>*</sup>
        </p>
        <div className="flex gap-5">
          <Select
            value={selectedCoursework}
            onValueChange={(value) => {
              setSelectedCoursework(value);
            }}
          >
            <SelectTrigger className="w-[160px]">
              <SelectValue placeholder="Coursework Type" />
            </SelectTrigger>
            <SelectContent>
              {courseworkType.map((item) => (
                <SelectItem key={item} value={item}>
                  {item}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>

          <Select
            value={selectedSubject}
            onValueChange={(value) => {
              setSelectedSubject(value);
            }}
          >
            <SelectTrigger className="w-[100px]">
              <SelectValue placeholder="Subject" />
            </SelectTrigger>
            <SelectContent>
              {subjects.map((item) => (
                <SelectItem key={item} value={item}>
                  {item}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
      </div>

      <div className="mt-3">
        <p className="mb-1.5 text-sm font-light text-neutrals-600">
          Enter your essay title<sup>*</sup>(Required)
        </p>
        <Input
          className="w-[280px]"
          type="text"
          placeholder="how nation works..."
          value={essayTitle}
          onChange={(e) => {
            setEssayTitle(e.target.value);
          }}
        />
      </div>

      <div className="mt-8 w-[190px]">
        <Button
          disabled={!isFormValid}
          className={`relative w-full ${
            isFormValid ? "bg-primary-500" : "bg-[#ADB8B9] cursor-not-allowed"
          }`}
          onClick={handleEvaluate}
        >
          <span className="absolute left-1 p-1 bg-neutrals-100 rounded-full align items-start">
            <svg
              width="15"
              height="15"
              viewBox="0 0 15 15"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M6.03959 3.46953L5.88858 3.41035L5.7373 3.46884L4.52713 3.93673L5.00467 2.74237L5.06414 2.59363L5.00865 2.44336L4.60569 1.35205L5.68461 1.7603L5.83597 1.81757L5.98631 1.75766L7.18307 1.28077L6.71585 2.49336L6.65696 2.64619L6.7179 2.79821L7.1636 3.91002L6.03959 3.46953ZM13.0337 10.4675L12.8837 10.4114L12.7347 10.4703L11.5444 10.941L12.0182 9.75592L12.0798 9.60201L12.0188 9.44788L11.5715 8.31788L12.6893 8.77037L12.8444 8.83316L12.9999 8.77122L14.1874 8.29802L13.7173 9.49077L13.658 9.6413L13.7158 9.79242L14.1309 10.8773L13.0337 10.4675ZM4.99688 12.6876L4.85199 12.6356L4.70806 12.6902L1.60829 13.8673L2.78537 10.7675L2.83987 10.624L2.78823 10.4795L1.682 7.38245L4.78894 8.48053L4.93236 8.53123L5.07471 8.47758L8.1611 7.3145L6.99802 10.4009L6.94421 10.5437L6.99533 10.6874L8.10357 13.804L4.99688 12.6876Z"
                fill="#98A1BB"
                stroke="#98A1BB"
                stroke-width="0.833333"
              />
            </svg>
          </span>
          <span className="absolute left-8">Evaluate your Score</span>
        </Button>
      </div>
    </div>
  );
};

export default FileUpload;
