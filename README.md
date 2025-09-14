# QuickGpt - AI-Powered Chat Application

A full-stack AI chat application that supports both text and image generation, built with React and Node.js. Features a modern UI with dark/light mode, credit-based payment system, and community image sharing.

🌐 **Live Demo**: [https://quick-gpt-nu.vercel.app/](https://quick-gpt-nu.vercel.app/)

## 🚀 Features

- **Dual AI Modes**: Text chat and AI image generation
- **User Authentication**: Secure login/register with JWT
- **Credit System**: Pay-per-use model with Stripe integration
- **Dark/Light Theme**: Toggle between themes with persistent settings
- **Community Gallery**: Share and browse AI-generated images
- **Multiple Chats**: Create and manage conversation threads
- **Responsive Design**: Works on desktop and mobile
- **Real-time UI**: Smooth animations and loading states

## 🛠️ Tech Stack

### Frontend
- **React 19.1.1** - UI framework
- **Vite** - Build tool and dev server
- **Tailwind CSS** - Styling framework
- **React Router DOM** - Client-side routing
- **React Context API** - State management
- **React Hot Toast** - Notifications
- **React Markdown** - Markdown rendering
- **Prism.js** - Code syntax highlighting

### Backend
- **Node.js** - Runtime environment
- **Express.js 5.1.0** - Web framework
- **MongoDB** - Database
- **Mongoose** - ODM
- **JWT** - Authentication
- **Stripe** - Payment processing
- **OpenAI API** - AI text and image generation
- **ImageKit** - Image storage and optimization
- **bcryptjs** - Password hashing

## 📁 Project Structure

```
QuickGpt/
├── frontend/                 # React frontend application
│   ├── src/
│   │   ├── components/       # Reusable UI components
│   │   ├── pages/           # Page components
│   │   ├── context/         # React Context for state
│   │   ├── assets/          # Images, icons, dummy data
│   │   └── main.jsx         # Entry point
│   ├── public/              # Static assets
│   └── package.json
├── backend/                 # Node.js backend API
│   ├── models/              # MongoDB schemas
│   ├── controllers/         # Business logic
│   ├── routes/              # API routes
│   ├── middlewares/         # Custom middleware
│   ├── configs/             # Configuration files
│   └── server.js            # Entry point
└── README.md
```

## 🚀 Getting Started

### Prerequisites

- Node.js (v16 or higher)
- MongoDB (local or cloud)
- OpenAI API key
- Stripe account
- ImageKit account

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd QuickGpt
   ```

2. **Install frontend dependencies**
   ```bash
   cd frontend
   npm install
   ```

3. **Install backend dependencies**
   ```bash
   cd ../backend
   npm install
   ```

4. **Environment Setup**
   
   Create a `.env` file in the backend directory:
   ```env
   PORT=8080
   MONGODB_URI=your_mongodb_connection_string
   JWT_SECRET=your_jwt_secret_key
   OPENAI_API_KEY=your_openai_api_key
   STRIPE_SECRET_KEY=your_stripe_secret_key
   STRIPE_WEBHOOK_SECRET=your_stripe_webhook_secret
   IMAGEKIT_PUBLIC_KEY=your_imagekit_public_key
   IMAGEKIT_PRIVATE_KEY=your_imagekit_private_key
   IMAGEKIT_URL_ENDPOINT=your_imagekit_url_endpoint
   ```

### Running the Application

1. **Start the backend server**
   ```bash
   cd backend
   npm start
   ```
   Server will run on `http://localhost:8080`

2. **Start the frontend development server**
   ```bash
   cd frontend
   npm run dev
   ```
   Frontend will run on `http://localhost:5173`

3. **Open your browser**
   Navigate to `http://localhost:5173`

   Or visit the live demo: [https://quick-gpt-nu.vercel.app/](https://quick-gpt-nu.vercel.app/)

## 📱 Usage

### Getting Started
1. **Register/Login**: Create an account or login with existing credentials
2. **Start Chatting**: Type your message and select text or image mode
3. **Manage Credits**: Purchase credits to use AI features
4. **Explore Community**: Browse and share AI-generated images

### Credit System
- **Text Generation**: 1 credit per request
- **Image Generation**: 2 credits per request
- **Credit Plans**:
  - Basic: $10 for 100 credits
  - Pro: $20 for 500 credits
  - Premium: $30 for 1000 credits

### Features Overview
- **Dark Mode**: Toggle between light and dark themes
- **Multiple Chats**: Create and switch between different conversations
- **Search**: Find specific conversations
- **Community**: Share and discover AI-generated images
- **Responsive**: Works on all device sizes

## 🔧 API Endpoints

### Authentication
- `POST /api/user/register` - User registration
- `POST /api/user/login` - User login

### Chat Management
- `GET /api/chat` - Get user chats
- `POST /api/chat` - Create new chat
- `PUT /api/chat` - Update chat
- `DELETE /api/chat` - Delete chat

### AI Generation
- `POST /api/message/text` - Generate text response
- `POST /api/message/image` - Generate image

### Payments
- `GET /api/credit/plan` - Get credit plans
- `POST /api/credit/purchase` - Create payment session
- `POST /api/stripe` - Stripe webhook

### Community
- `GET /api/user/published-images` - Get community images

## 🎨 Customization

### Theme Customization
The app supports both light and dark themes. Theme preferences are stored in localStorage and automatically applied on page load.

### Styling
- Uses Tailwind CSS for styling
- Custom CSS classes in `src/index.css`
- Responsive design with mobile-first approach

### Adding New Features
1. **Frontend**: Add components in `src/components/`
2. **Backend**: Add routes in `routes/` and controllers in `controllers/`
3. **Database**: Add new models in `models/`

## 🚀 Deployment

### Frontend Deployment (Vercel/Netlify)
1. Build the frontend:
   ```bash
   cd frontend
   npm run build
   ```
2. Deploy the `dist` folder to your hosting service

### Backend Deployment (Railway/Heroku)
1. Set environment variables in your hosting platform
2. Deploy the backend folder
3. Update frontend API URLs to point to production backend

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🐛 Troubleshooting

### Common Issues

1. **CORS Errors**: Ensure backend CORS is configured for your frontend URL
2. **Database Connection**: Check MongoDB connection string and network access
3. **API Keys**: Verify all environment variables are set correctly
4. **Payment Issues**: Ensure Stripe webhook is configured properly

### Getting Help

- Check the console for error messages
- Verify all environment variables are set
- Ensure all dependencies are installed
- Check network connectivity for API calls

## 📞 Support

For support, email support@quickgpt.com or create an issue in the repository.

## 🔗 Links

- **Live Demo**: [https://quick-gpt-nu.vercel.app/](https://quick-gpt-nu.vercel.app/)
- **Repository**: [GitHub Repository](https://github.com/yourusername/QuickGpt)

---

**Built with ❤️ using React, Node.js, and AI**
