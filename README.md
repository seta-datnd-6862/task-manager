# 📋 Task Manager Application

A modern, feature-rich task management application built with React, Vite, and Tailwind CSS.

![Task Manager Screenshot](https://via.placeholder.com/800x400?text=Task+Manager+Screenshot)

## ✨ Features

- ✅ **Create, Edit, Delete Tasks** - Full CRUD operations
- 🎯 **Priority Levels** - High, Medium, Low priority tasks
- 🔍 **Filter Tasks** - View All, Active, or Completed tasks
- 📊 **Statistics Dashboard** - Real-time task statistics
- 🌓 **Dark Mode** - Toggle between light and dark themes
- 🎨 **Drag & Drop** - Reorder tasks with drag and drop
- 💾 **LocalStorage Persistence** - Tasks saved automatically
- ✅ **Form Validation** - Input validation with error messages
- 📱 **Responsive Design** - Works on mobile and desktop
- 🎭 **Smooth Animations** - Beautiful transitions and effects

## 🚀 Demo

[Live Demo](https://your-username.github.io/task-manager) *(Update this after deployment)*

## 📸 Screenshots

### Light Mode
![Light Mode](https://via.placeholder.com/600x400?text=Light+Mode)

### Dark Mode
![Dark Mode](https://via.placeholder.com/600x400?text=Dark+Mode)

## 🛠️ Tech Stack

- **React 18** - UI Library
- **Vite** - Build tool and dev server
- **Tailwind CSS** - Utility-first CSS framework
- **Lucide React** - Icon library
- **LocalStorage API** - Data persistence

## 📋 Prerequisites

Before you begin, ensure you have the following installed:
- [Node.js](https://nodejs.org/) (v14 or higher)
- [npm](https://www.npmjs.com/) (v6 or higher) or [yarn](https://yarnpkg.com/)

Check your versions:
```bash
node -v
npm -v
```

## 🔧 Installation

1. **Clone the repository**
```bash
git clone https://github.com/your-username/task-manager.git
cd task-manager
```

2. **Install dependencies**
```bash
npm install
```

3. **Start the development server**
```bash
npm run dev
```

4. **Open your browser**
Navigate to `http://localhost:5173`

## 📦 Build for Production

Create a production build:
```bash
npm run build
```

Preview the production build:
```bash
npm run preview
```

## 📁 Project Structure
```
task-manager/
├── public/                 # Static assets
├── src/
│   ├── components/         # React components
│   │   ├── Header.jsx
│   │   ├── Statistics.jsx
│   │   ├── TaskForm.jsx
│   │   ├── TaskFilters.jsx
│   │   ├── TaskItem.jsx
│   │   └── TaskList.jsx
│   ├── App.jsx            # Main App component
│   ├── main.jsx           # Entry point
│   └── index.css          # Global styles
├── .gitignore
├── index.html
├── package.json
├── postcss.config.js
├── tailwind.config.js
├── vite.config.js
└── README.md
```

## 🎯 Usage

### Adding a Task
1. Click the "Add New Task" button
2. Enter task title (required, 3-100 characters)
3. Add description (optional, max 500 characters)
4. Select priority level (Low, Medium, High)
5. Click "Add Task"

### Editing a Task
1. Click the edit icon (pencil) on any task
2. Modify the task details
3. Click "Update Task"

### Completing a Task
- Click the checkbox circle to mark as complete/incomplete

### Deleting a Task
- Click the trash icon and confirm deletion

### Filtering Tasks
- Use the filter buttons to view:
  - **All** - All tasks
  - **Active** - Incomplete tasks only
  - **Completed** - Completed tasks only

### Reordering Tasks
- Drag and drop tasks using the grip icon (≡) to reorder

### Dark Mode
- Click the sun/moon icon in the top right to toggle theme

## 🧪 Available Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start development server |
| `npm run build` | Build for production |
| `npm run preview` | Preview production build |
| `npm run lint` | Run ESLint |

## 🔑 Key Features Explained

### Form Validation
- Title: Required, 3-100 characters
- Description: Optional, max 500 characters
- Real-time error messages
- Character counter for description

### LocalStorage Persistence
- Tasks automatically saved to browser storage
- Data persists across browser sessions
- Theme preference saved

### Priority System
- **High** (Red): Urgent tasks
- **Medium** (Yellow): Normal priority
- **Low** (Green): Low priority tasks

## 🤝 Contributing

Contributions are welcome! Please follow these steps:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 👤 Author

**Your Name**
- GitHub: [@your-username](https://github.com/your-username)
- Email: your.email@example.com

## 🙏 Acknowledgments

- [React Documentation](https://react.dev/)
- [Vite Documentation](https://vitejs.dev/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Lucide Icons](https://lucide.dev/)

## 📞 Support

If you have any questions or issues, please [open an issue](https://github.com/your-username/task-manager/issues).

---

Made with ❤️ by datnd6862
