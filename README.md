
## Setup Instructions

1. **Clone the Repository**  
   ```bash
   git clone https://github.com/ankur5ahu/IBCoursework.git
   cd IBCoursework
   ```

2. **Install Dependencies**  
   Ensure you have Node.js installed, then run:
   ```bash
   npm install
   ```

3. **Run the Development Server**  
   Start the server with:
   ```bash
   npm run dev
   ```
   Open [http://localhost:3000](http://localhost:3000) to view the application in your browser.

## Implemented Features

### 1. File Upload

- **Drag-and-Drop Functionality**: Users can drag and drop PDF files for easy uploading.
- **Manual Upload Option**: Users can also manually select files for upload.
- **File Size Limit**: Displayed a limit of 25 MB per file.
- **Local Storage**: Uploaded files and their metadata are stored locally for persistence.

### 2. Local Storage Implementation

- **Persistence**: Files and metadata are saved across page reloads.
- **Efficient Retrieval**: Implemented efficient methods to retrieve stored files and data.

### 3. Coursework Details Form

- **Dropdowns**: Includes dropdowns for selecting "Coursework Type" and "Subject".
- **Text Input**: A field for entering the essay title.
- **Local Storage**: Form data is stored locally and associated with the uploaded file.

### 4. Evaluation Display

- **Dummy Data**: Evaluation display uses dummy data.
- **Circular Progress Indicator**: Shows the overall score.
- **Score Breakdown**: Displays a breakdown of scores by criteria (A, B, C).
- **Evaluation Date**: Includes the date of evaluation.
- **Local Storage**: Evaluation results are stored and retrieved locally.

### 5. Coursework List

- **Display Coursework**: Lists previously uploaded coursework from local storage.
- **Details Shown**: Displays title, subject, word count, and other relevant details for each item.

### 6. Explore Coursework Section

- **Tabbed Interface**: Implements tabs for different coursework categories.
- **Grid Layout**: Displays coursework examples in a grid layout.

### Bonus Features

- **Animations**: Smooth transitions and micro-interactions enhance user feedback.
- **User Gratification**: Includes congratulatory messages for good scores and encouraging feedback for areas of improvement.

## Challenges Faced

### 1. Setting Up Zustand

- **Challenge**: Initial setup of Zustand and its store was challenging.
- **Solution**: Overcame this by reading documentation and through trial and error. Prior experience with Recoil helped speed up the process.

### 2. Rendering PDFs in Evaluation Page

- **Challenge**: Rendering PDFs using the react-pdf package was problematic.
- **Issue**: Setting up the worker source took significant time.
  - Tried the recommended approach but encountered an API version mismatch.
  - Attempted to use CDNs, but they continuously loaded without rendering.
- **Solution**: Resolved the issue by copying the `dist` worker file into the public folder and fetching it from there, as suggested by various discussions on Stack Overflow and GitHub.
