AI-Powered Image Caption Generator – Project Report

1. Introduction
This project, developed for Apex IT Solutions as part of professional training, is an AI-powered Image Caption Generator. It allows users to upload an image, which is then analyzed by a locally running AI model to generate a meaningful caption. Unlike cloud-based APIs, the AI runs entirely on the local machine via Ollama, ensuring data privacy and fast processing.
<img width="1600" height="774" alt="image" src="https://github.com/user-attachments/assets/ee698ad4-bd80-4638-97ee-bb07ae4fd3bb" />

2. Purpose of the Website
The primary purpose of the website is to:
Allow users to easily upload images.
Generate instant AI-based captions for the uploaded images.
Provide a simple, user-friendly interface for both technical and non-technical users.
Operate offline without depending on any cloud AI service.

3. Components Used in the Website & Their Purpose
3.1 Header Section
Logo/Project Name: Displays the project name clearly for branding.
Navigation Menu: Links to different sections (Home, Upload, About, Contact).
Purpose: Helps users quickly navigate between sections.
<img width="1586" height="93" alt="image" src="https://github.com/user-attachments/assets/52e5addd-7329-41a5-9f0d-c1716cc70a87" />
3.2 Home Section
Background Color: White background with black text for readability.
Purpose: Introduces the project and briefly explains its purpose before users interact with it.
<img width="1585" height="693" alt="image" src="https://github.com/user-attachments/assets/43828883-a0a3-402a-9069-a69ca331b8f7" />
3.3 Image Upload Section
File Input Button: Lets the user browse and select an image from their device.
Upload Button: Sends the selected image to the backend for processing.
Purpose: Main functional area of the site where users upload images for caption generation.

<img width="421" height="67" alt="image" src="https://github.com/user-attachments/assets/637991c3-2653-4735-a4a9-52da9ed23ae0" />

3.4 Caption Display Area
Caption Output Box: Shows the AI-generated caption immediately after processing.
Purpose: Gives instant results to the user without needing to reload the page.

<img width="515" height="60" alt="image" src="https://github.com/user-attachments/assets/cafbd269-cf9e-4643-bc94-a5ed5634f7b8" />

3.5 Buttons
Upload Button: Triggers the backend API call to send the image.
Clear Button (if added): Resets the upload and caption fields.
Purpose: Makes interaction smooth and user-controlled.

<img width="533" height="330" alt="image" src="https://github.com/user-attachments/assets/277bd819-b6f4-4323-82f5-878910db386c" />

3.6 Images
Uploaded Image Preview: Displays the image a user uploads before caption generation.
Purpose: Confirms to the user that the correct image was selected.

<img width="171" height="128" alt="image" src="https://github.com/user-attachments/assets/77c3dc9c-f034-43ee-aa12-d1a6119637ea" />

3.7 Footer Section
Blue Background for contrast.
Social Media Icons: Facebook, Twitter, Instagram, LinkedIn, YouTube.
Contact Info: Email, phone number, and address.
Purpose: Provides additional navigation, branding, and contact details.

<img width="1585" height="377" alt="image" src="https://github.com/user-attachments/assets/6e94c8d5-486f-4109-b0ea-bc960cf90729" />

5. Installation & Setup from Scratch
Here’s exactly what you need to install to make this project work:
A. Install Frontend (React)
npx create-react-app ai-captioner
cd ai-captioner
npm install axios
•	axios → Used to send HTTP requests from React to your backend.
B. Install Backend (Node.js + Express)
mkdir backend
cd backend
npm init -y
npm install express cors
•	express → Handles API routes and requests.
•	cors → Allows the frontend to communicate with the backend without browser blocking.
C. Install Ollama
•	Download from: https://ollama.com/download
•	Install and make sure it runs in the background.
D. Download AI Model
ollama pull llama3.2-vision
•	This downloads the llama3.2-vision model for local AI image captioning.
E. Run the Project

1️⃣ Run Backend
node server.js

 <img width="672" height="260" alt="image" src="https://github.com/user-attachments/assets/1ac6c459-0d1b-4d26-9796-dfed2a01d708" />
 
2️⃣ Run Frontend
npm start

 <img width="702" height="441" alt="image" src="https://github.com/user-attachments/assets/d7957f53-742c-4d6b-a355-9bbca1a7ac2b" />
 
3️⃣ Run Ollama
ollama serve

 <img width="768" height="406" alt="image" src="https://github.com/user-attachments/assets/d67a4f78-e9de-462d-b17e-dd25a763833e" />
 
7. User Workflow
User opens the website.
User navigates to the Upload Section.
User selects and uploads an image.
Backend sends the image to Ollama for analysis.
AI model generates a caption and sends it back.
Caption is displayed alongside the uploaded image.

8. Conclusion
The AI Image Caption Generator successfully meets the project requirements. By switching from API-based AI to local Ollama processing, the system became more reliable, secure, and faster. This project also enhanced my technical expertise in:
•	Full-stack development (React + Node.js)
•	AI integration with local processing
•	Handling real-time data in web applications

6. Conclusion
The AI Image Caption Generator successfully delivers an offline, privacy-first AI experience with a simple, attractive UI. All features, from image upload to instant caption display, are built for ease of use. The project meets its goal of providing fast, secure, and accurate AI image captioning without reliance on third-party APIs.
