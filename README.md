# 🚀 PD-API

This repository contains two components:

1. **`pdapi-wrapper`**: A Node.js library for interacting with the PD API.
2. **`PD-API`**: An Express-based API that interacts with Discord to provide scripts, tutorials, user, and guild data.

Both components are designed to work together, with the library being used to access the endpoints provided by the API.

## 🧩 Components

### 1. `pdapi-wrapper` 📦

The **`pdapi-wrapper`** is a lightweight library that simplifies the process of interacting with the PD API. It provides easy-to-use methods for retrieving scripts, tutorials, user, and guild information.

- **API Endpoints Supported**: Scripts, Tutorials, Users, Guild
- **Usage**: You can use the methods to fetch data from the PD API and integrate it into your own projects.

### 2. `PD-API` 📡

The **`PD-API`** is an Express-based API that integrates with Discord and exposes several endpoints for accessing scripts, tutorials, user data, and guild information.

- **API Endpoints**:
  - `/api/scripts`
  - `/api/scripts/:scriptId`
  - `/api/tutorials`
  - `/api/tutorials/:tutorialId`
  - `/api/user/:userId`
  - `/api/guild`

---

## 🌐 Documentation
For detailed API documentation, check the respective `README.md` files inside the **`api`** and **`pdapi-wrapper`** folders.

- **[PD-API README](api/README.md)**
- **[pdapi-wrapper README](lib/README.md)**

---

## 💬 Contributions

Contributions are welcome! If you'd like to help improve either the library or the API, feel free to fork the repository, open issues, and submit pull requests.

## 📄 License

This project is licensed under the MIT License.
