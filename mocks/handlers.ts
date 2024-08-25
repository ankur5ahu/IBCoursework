import { setupWorker } from 'msw/browser'
import { http, HttpResponse } from 'msw'

interface FileData {
    name: string;
    courseworkType: string;
    subject: string;
    essayTitle: string;
    pdfContent: string;
}

interface EvaluationResponse extends FileData {
    score: number;
    remark: string;
    stars: number;
    words: number;
    time: number;
}

export const worker = setupWorker(
    http.post<FileData, EvaluationResponse>('/evaluate', async ({ request }) => {
        const body = await request.json() as FileData;
        const { name, courseworkType, subject, essayTitle, pdfContent } = body;

        const mockScore = Math.floor(Math.random() * 20);
        let mockRemark = "";

        if (mockScore >= 15) {
            mockRemark = "Excellent";
        } else if (mockScore >= 10) {
            mockRemark = "Good";
        } else if (mockScore >= 5) {
            mockRemark = "Good effort, room for improvement.";
        } else {
            mockRemark = "Needs significant improvement.";
        }

        const response: EvaluationResponse = {
            ...body,
            score: mockScore,
            remark: mockRemark,
            stars: Math.floor(Math.random() * 6) + 1,
            words: Math.floor(Math.random() * 3000) + 1000,
            time: Math.floor(Math.random() * 30) + 10,
        };

        return HttpResponse.json(response, { status: 200 });
    }),
)