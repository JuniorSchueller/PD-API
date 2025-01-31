# 📡 `PD-API`

`PD-API` is an Express-based API that integrates with Discord to provide data on scripts, tutorials, users, and guild information. It's designed to be used with the **pdapi-wrapper** library.

## 🚀 Features

- Retrieve all available scripts 📝
- Get detailed information about a specific script 🎬
- Fetch tutorials 📚
- Get specific tutorial details 📖
- Retrieve user information by ID 👤
- Get guild information 🌍

## 🔧 Installation

To run this API locally, you need to install the dependencies:

```bash
npm install
```

Then, create a `.env` file with the following environment variables:

```bash
USER_TOKEN=your_discord_token
```

**Note:** The `USER_TOKEN` is necessary to authenticate requests to the Discord API.

## 🧑‍💻 Usage

Start the server by running:

```bash
npm start
```

The API will be available at [http://localhost:3000](http://localhost:3000).

## 📚 API Endpoints

### 1. Get All Scripts

```http
GET /api/scripts
```

Returns a list of all scripts with `id` and `name`.

### 2. Get a Specific Script

```http
GET /api/scripts/:scriptId
```

Returns details of a specific script, including a URL link to the script.

### 3. Get All Tutorials

```http
GET /api/tutorials
```

Returns a list of all tutorials with `id` and `name`.

### 4. Get a Specific Tutorial

```http
GET /api/tutorials/:tutorialId
```

Returns details of a specific tutorial, including links for PC, Android, and iOS versions.

### 5. Get User Info

```http
GET /api/user/:userId
```

Returns user information, including username, avatar, roles, and joined date.

### 6. Get Guild Info

```http
GET /api/guild
```

Returns guild information, including name, icon, banner, and member count.

## 🔐 Security

To secure the endpoints, ensure that your `USER_TOKEN` is properly set up in the `.env` file. This token is used to authenticate all requests to the Discord API.

## 💬 Contributions

Contributions are welcome! If you'd like to help improve this API, feel free to fork the repository, open issues, and submit pull requests.

## 📄 License

This project is licensed under the MIT License.
