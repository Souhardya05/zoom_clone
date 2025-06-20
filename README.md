# YOOM – Zoom Clone 🧑‍💻📹

[🔗 Live Demo](https://zoom-clone-ga4h.vercel.app/) • [📁 GitHub Repository](https://github.com/Souhardya05/zoom_clone.git)

YOOM is a modern video conferencing web application inspired by Zoom. Built using **Next.js 15**, **TypeScript**, **Tailwind CSS**, **Clerk**, and **Stream Video SDK**, it offers a polished and production-ready UI for seamless meetings.

---

## 🚀 Features

- 🔐 User Authentication & Authorization with **Clerk**
- 🎥 Real-time video meetings using **Stream Video SDK**
- 🧑‍🤝‍🧑 Personal meeting rooms
- 📅 Schedule and manage upcoming meetings
- 📜 View previous meetings
- 📁 Access to meeting recordings
- 🎨 Beautiful, responsive UI with **Tailwind CSS** & **ShadCN/UI**
- ☁️ Deployed on **Vercel**

---

## 🧰 Tech Stack

| Tech            | Description                     |
|-----------------|---------------------------------|
| **Next.js 15**  | App Router & SSR capabilities   |
| **TypeScript**  | Static type checking            |
| **Tailwind CSS**| Utility-first CSS framework     |
| **ShadCN/UI**   | UI components                   |
| **Clerk**       | Authentication and user mgmt    |
| **Stream SDK**  | Video call backend              |
| **Vercel**      | Hosting and CI/CD               |

---

## 🛠️ Getting Started

### 1. Clone the Repository

```bash
git clone https://github.com/Souhardya05/zoom_clone.git
cd zoom_clone
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Configure Environment Variables

Create a `.env.local` file and add your keys:

```env
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=your_clerk_publishable_key
CLERK_SECRET_KEY=your_clerk_secret_key
NEXT_PUBLIC_STREAM_API_KEY=your_stream_api_key
STREAM_SECRET=your_stream_secret
```

> You can get your API keys from [Clerk](https://clerk.com/) and [GetStream](https://getstream.io/).

### 4. Run the App

```bash
npm run dev
```

Visit: [http://localhost:3000](http://localhost:3000)

---

## 🙋 About Me

Made with ❤️ by **[Souhardya Saha](https://github.com/Souhardya05)**  
Feel free to explore, fork, or connect!

---

## 📄 License

This project is licensed under the [MIT License](LICENSE).