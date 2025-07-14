# HappyMed AI - Healthcare Assistant 🏥🤖

> An AI-powered healthcare assistant that helps users understand their symptoms and provides preliminary medical guidance.

**Built for Klusterthon 2023 Hackathon by Stutern**

## ⚠️ Project Status
This project is no longer actively maintained. It was developed during the Klusterthon 2023 hackathon and serves as a proof of concept for AI-assisted healthcare consultation.

## 🚀 Overview

HappyMed AI is an intelligent healthcare assistant that leverages OpenAI's GPT technology to analyze user symptoms and provide helpful medical information. The application aims to make healthcare more accessible by offering preliminary symptom analysis and guidance.

## 👥 Team

- **Developer**: Destiny Ezenwata - Full Stack Development
- **UI/UX Designer**: Chidimma Ugwu - User Interface & Experience Design

## 🛠️ Tech Stack

- **Frontend**: React.js
- **Backend**: PHP Slim Framework
- **AI Integration**: OpenAI GPT API
- **Containerization**: Docker & Docker Compose
- **Deployment**: Self-hosted

## 📁 Project Structure

```
happymed-ai-klusterthon2023/
├── frontend/          # React.js application
├── backend/           # PHP Slim API
├── docker-compose.yml # Container orchestration
└── README.md
```

## ✨ Features

- **Symptom Analysis**: Users can input their symptoms and receive AI-powered analysis
- **Medical Guidance**: Provides preliminary medical information and recommendations
- **User-Friendly Interface**: Clean and intuitive design for easy navigation
- **Responsive Design**: Works across different devices and screen sizes

## 🚀 Getting Started

### Prerequisites
- Docker and Docker Compose installed
- OpenAI API key

### Installation

1. Clone the repository
```bash
git clone https://github.com/[your-username]/happymed-ai-klusterthon2023.git
cd happymed-ai-klusterthon2023
```

2. Set up environment variables (Update in docker-compose.yml)
```bash
# Add your OpenAI API key to the backend configuration
OPENAI_API_KEY=api-key
```

3. Run with Docker Compose
```bash
docker-compose up -d
```

4. Access the application
- Frontend: `http://localhost:3000`
- Backend API: `http://localhost:8000`

## 🎯 Hackathon Context

This project was developed during the **Klusterthon 2023** hackathon organized by **Stutern**. Due to time constraints during the hackathon, we focused on core functionality with plans to expand features like appointment booking and medication reminders in future iterations.

## ⚡ Future Enhancements (Planned)

- Appointment booking system
- Medication reminders
- Doctor recommendations
- Medical history tracking
- Integration with healthcare providers

## 📝 Disclaimer

**Important**: This application is for educational and informational purposes only. It should not be used as a substitute for professional medical advice, diagnosis, or treatment. Always consult with qualified healthcare professionals for medical concerns.

## 🏆 Hackathon Experience

Participating in Klusterthon 2023 was an incredible learning experience. Working under time pressure taught us to prioritize features effectively and deliver a functional MVP within the hackathon timeframe.

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🤝 Acknowledgments

- **Stutern** for organizing the Klusterthon 2023 hackathon
- **OpenAI** for providing the GPT API
- All fellow participants who made the hackathon a memorable experience

---

*Built with ❤️ during Klusterthon 2023*
