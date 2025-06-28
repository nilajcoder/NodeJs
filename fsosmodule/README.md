
# 🛠️ Node.js System Info & File Creator

This simple Node.js project demonstrates how to use two powerful built-in core modules:

- 📁 `fs` (File System)
- 💻 `os` (Operating System)

No need to install them — they're part of Node.js by default!

---

## 🔍 What It Does

1. Retrieves system and user information using the `os` module.
2. Logs details like username, hostname, architecture, OS type, and version.
3. Appends a personalized greeting to a `greeting.txt` file using the `fs` module.

---

## 📦 Modules Used

### ✅ `os` – Operating System Module

Provides system-level info like:
- `os.userInfo()` → Logged-in user details
- `os.hostname()` → Computer name
- `os.machine()` → Machine architecture (e.g., x86_64)
- `os.type()` → OS type (e.g., Windows_NT)
- `os.version()` → OS version (e.g., Windows 11)
- `os.arch()` → CPU architecture

### ✅ `fs` – File System Module

- `fs.appendFile()` → Appends text to a file or creates it if it doesn't exist.

---

