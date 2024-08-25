import { create } from 'zustand';
import { createJSONStorage, persist } from 'zustand/middleware';

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

interface StoreState {
    files: FileData[];
    addEvaluatedFile: (fileData: FileData) => void;
}

export const useStore = create<StoreState>()(
    persist(
        (set, get) => ({
            files: [],
            addEvaluatedFile: (fileData) => {
                const newFiles = [...get().files, fileData];
                set({ files: newFiles });
                return newFiles.length - 1; 
            }
        }),
        {
            name: 'file-storage',
            storage: createJSONStorage(() => localStorage),
        }
    )
);