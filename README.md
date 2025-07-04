# 🧠 Breast Cancer Detection with Machine Learning (Express + Scikit-learn)

![License](https://img.shields.io/badge/license-MIT-green.svg)
![Status](https://img.shields.io/badge/status-Working-blue)
![Tech](https://img.shields.io/badge/MachineLearning-Scikit--learn-orange)
![Backend](https://img.shields.io/badge/Backend-Express.js-blue)
![API](https://img.shields.io/badge/API-Flask-yellow)

This project is a full-stack machine learning web application for predicting whether a breast tumor is **malignant** or **benign** using the Breast Cancer Wisconsin dataset. The ML model is built with **Scikit-learn**, and the API is served through **Flask**, while the backend server is handled by **Express.js**.

---

## 🚀 Features

- 🎯 Predicts breast cancer type from numeric inputs
- 🧪 Trained on real-world dataset (`sklearn.datasets.load_breast_cancer`)
- 🔄 Communicates between Node.js and Python using HTTP
- 💡 Clean and modular codebase
- 🌐 Ready for deployment or frontend integration

---

## 🧠 Machine Learning

- **Language**: Python
- **Library**: Scikit-learn
- **Model**: Random Forest
- **Accuracy**: **78%**

The model is trained and saved using `joblib`.

---

## 🛠 Tech Stack

| Layer         | Tech                             |
|---------------|----------------------------------|
| ML Model      | Python, Scikit-learn             |
| API Server    | Express.js (Node.js)             |
| ML API Layer  | Flask                            |
| Data          | Breast Cancer Dataset (sklearn)  |
| Communication | HTTP (Node.js ↔ Python)          |

---

## 📦 Setup Instructions

### 1. Clone the Repository

```bash
git clone https://github.com/your-username/breast-cancer-ml-app.git
cd breast-cancer-ml-app
