# EyeCue
*Real-time Attention Monitoring for Online Learning*  

## 📌 Overview  
EyeCue is an AI-powered system that helps teachers keep track of student engagement in online classes.  
By analyzing webcam input, EyeCue provides **real-time attention monitoring** and **visual dashboards**, enabling teachers to detect when students lose focus and take timely action.  

Our goal: **make remote education more interactive, supportive, and effective**.  

---

## ✨ Features  
### Minimum Viable Product (MVP)  
- **Real-Time Monitoring**: Tracks student attention using webcam input and facial landmarks.  
- **Threshold-Based Alerts**: Notifies teachers when attention levels fall below a certain point.  

### Future Roadmap  
- 📊 **Attention Trends**: View short-term attention patterns across the class.  
- 🗂 **Long-Term History & Analytics**: Store and analyze engagement data over time.  
- 🤖 **AI-Based Focus Suggestions**: Personalized recommendations to improve focus.  

---

## 🏗 Architecture  
EyeCue follows a client–server model with real-time communication.  

1. **Student Client**  
   - Captures webcam frames and sends them securely to the backend.  

2. **Backend (Node.js + FastAPI)**
   - Receives frames from students.
   - Uses **MediaPipe** for facial landmark detection.  
   - Computes eye/head positions → attention label.
   - Stores processed results in database.
   - Runs a **Check Similarity** step to avoid redundant calculations:
     - If **similar** → discard to save storage & computation.
     - If **different** → process and update the attention score.
   - Stores processed results in database.

3. **Teacher Dashboard**  
   - Displays real-time attention label of students.

---

## ☁️ Tech Stack
- **Frontend**: React
- **Backend**: Node.js (Express), FastAPI (Python)  
- **AI/ML**: MediaPipe, Custom Attention Analysis  