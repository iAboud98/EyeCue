# Real-Time Attention Analysis

## Project Idea

Analyze a live video stream of a person and detect facial features such as **head pose**, **gaze direction**, and **eye behavior** in real-time, in order to estimate how focused the person is

---

## Possible Features (After Detecting)

1. Show attention level as a **percentage**
2. Play a sound to **refocus** the user when attention drops
3. Turn into a **desktop application** that runs in the background
4. (Maybe) Expand to a **mobile app** in the future
5. (Advanced) Use **environmental inputs** like noise level to influence attention score

---

## Important Notes

1. Start with **2–3 simple signals** (e.g. head pose, blink rate) as the MVP (Minimum Viable Product)
2. Still searching for a suitable **dataset** (eye/head/gaze + attention). Might consider building a small custom dataset if needed
3. Found a model called **Face Mesh** developed by Google (via **MediaPipe**)
4. Need to clearly define what "attention" or "focus" means in measurable terms

---

## Tools and Libraries to Explore

- **MediaPipe** – facial landmarks, iris tracking, head pose
- **OpenCV** – webcam feed, frame capture, image processing
- **Dlib / DeepFace / OpenFace** – facial expression and emotion recognition
- **GazeML / PyGaze** – gaze and eye movement estimation
- **Scikit-learn / ONNX / TensorFlow Lite** – light ML model integration

---

## Similar Projects

| Project Name   | Link                                                                 | Notes                                                                 |
|----------------|----------------------------------------------------------------------|-----------------------------------------------------------------------|
| Opti-Tracker   | [GitHub](https://github.com/SoumyaCO/Opti-Tracker)                   | Real-time focus tracking using head and eye direction                 |


---

## Questions to Answer

- What signals are most reliable for measuring attention?
- How is “focus” defined in scientific studies? someone may seem not focused but he is 
- How can we validate that our model's output actually reflects real attention?
