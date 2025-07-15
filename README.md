# 📚 NoteShare – Empowering Academic Excellence Through Knowledge Sharing

**Live URL**: [noteshare.example.com](https://noteshare.example.com)

![NoteShare Platform](https://noteshare.example.com/preview.png)

---

## 🚀 About the Project

**NoteShare** is a comprehensive academic resource platform built with the **MERN stack**, enabling seamless collaboration between students and faculty. It allows faculty to upload and manage educational materials while providing students a centralized space for accessing notes, engaging in discussions, and exploring categorized content.

---

## ✨ Features

- 📝 **Rich Academic Content**: Upload and access lecture notes, resources, and more  
- 🔍 **Smart Search Functionality**: Find relevant content easily  
- 📊 **Categorized Resources**: Browse by subject, topic, or department  
- 📺 **Educational Videos**: Watch curated academic content  
- 💬 **Discussion & Comments**: Interact through moderated discussions  
- 👨‍🏫 **Admin Panel**: Manage content, blogs, and user interactions  
- 🤖 **AI Features**:  
  - AI-powered blog generation (Google Gemini API)  
  - AI-curated educational videos  
  - Smart content discovery  

---

## 🛠️ Tech Stack

### 🖥️ Frontend

- **React.js** – Component-based architecture  
- **Tailwind CSS** – Utility-first styling  
- **React Router** – Client-side routing  
- **QuillJS** – Rich text editor  
- **Axios** – API request handling  

### 🔧 Backend

- **Node.js** & **Express.js** – RESTful API  
- **MongoDB** – NoSQL database  
- **JWT** – Authentication  
- **ImageKit** – Image optimization and CDN  
- **Google Gemini API** – AI-powered content  

---

## 🗂️ Folder Structure

```
├── client/
│   ├── public/
│   │   └── ... (static assets)
│   │
│   ├── src/
│   │   ├── assets/
│   │   │   └── assets.js (global assets)
│   │   │
│   │   ├── components/
│   │   │   ├── admin/
│   │   │   │   ├── BlogTableItem.jsx
│   │   │   │   ├── CommentTableItem.jsx
│   │   │   │   ├── Login.jsx
│   │   │   │   └── Sidebar.jsx
│   │   │   │
│   │   │   ├── BlogCard.jsx
│   │   │   ├── BlogList.jsx
│   │   │   ├── Contributors.jsx
│   │   │   ├── Footer.jsx
│   │   │   ├── Header.jsx
│   │   │   ├── Navbar.jsx
│   │   │   └── Newsletter.jsx
│   │   │
│   │   ├── context/
│   │   │   └── AppContext.jsx
│   │   │
│   │   ├── pages/
│   │   │   ├── admin/
│   │   │   │   ├── AddBlog.jsx
│   │   │   │   ├── Comments.jsx
│   │   │   │   ├── Dashboard.jsx
│   │   │   │   ├── Layout.jsx
│   │   │   │   └── ListBlog.jsx
│   │   │   │
│   │   │   ├── Blog.jsx
│   │   │   ├── Home.jsx
│   │   │   └── Videos.jsx
│   │   │
│   │   ├── App.jsx
│   │   ├── index.css
│   │   └── main.jsx
│   │
│   ├── package.json
│   └── vite.config.js
│
├── server/
│   ├── configs/
│   │   ├── ai.js
│   │   ├── db.js
│   │   └── imageKit.js
│   │
│   ├── controllers/
│   │   ├── adminController.js
│   │   └── blogController.js
│   │
│   ├── middleware/
│   │   ├── auth.js
│   │   └── multer.js
│   │
│   ├── models/
│   │   ├── Blog.js
│   │   └── Comment.js
│   │
│   ├── routes/
│   │   ├── adminRoutes.js
│   │   └── blogRoutes.js
│   │
│   ├
│   ├── package.json
│   └── server.js
```

---

## 👥 User Roles

- 👨‍🎓 **Students** – Browse, comment, discuss  
- 👩‍🏫 **Faculty** – Upload and manage course materials  
- 🛡️ **Admins** – Full content and comment moderation  

---

## 🔐 Authentication & Security

- JWT-based admin authentication  
- Secure access to the admin panel  
- Content moderation to ensure academic integrity  

---

## ⚙️ Installation & Setup

### Clone the Repo

```bash
git clone https://github.com/your-username/NoteShare.git
cd NoteShare
```

### Install Frontend Dependencies

```bash
cd client
npm install
```

### Install Backend Dependencies

```bash
cd ../server
npm install
```

---

## 🚀 Run the Project

### Start the Backend

```bash
cd server
npm start
```

### Start the Frontend

```bash
cd ../client
npm run dev
```

---

## 🌱 Future Scope

- Live classroom sessions and webinars  
- Personalized learning journeys  
- Resource ratings and recommendations  
- Academic calendar integration  
- Mobile app for learning on the go  

---

## 🙌 Contributors

- **Md. Habibun Nabi Hemel** – Lead Developer & Founder  


---

## 👨‍💻 Author

**Habibun Nabi Hemel**  
[GitHub](https://github.com/your-username) | [Portfolio](https://hemel-portfolio.vercel.app/) | [LinkedIn](https://www.linkedin.com/in/habibun-nabi-hemel/)

---

> **NoteShare** – Empowering Academic Excellence Through Knowledge Sharing 🚀
