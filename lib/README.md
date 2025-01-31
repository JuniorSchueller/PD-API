# 📦 `pdapi-wrapper` 

`pdapi-wrapper` is a Node.js library to interact with the [**PD API**](https://github.com/JuniorSchueller/PD-API). With this library, you can easily fetch data related to scripts, tutorials, users, and guilds.

## 🚀 Features

- Get a list of all available scripts ✨
- Retrieve detailed information about a specific script 🎬
- Fetch tutorials for easy learning 📚
- Retrieve a specific tutorial 📖
- Get user information by ID 👤
- Fetch guild information 🌍

## 🔧 Installation

To install `pdapi-wrapper`, run the following command:

```bash
npm install pdapi-wrapper
```

## 🧑‍💻 Usage

You can use the library to interact with the PD API by calling the functions provided:

### 1. Get All Scripts

```javascript
const { getScripts } = require('pdapi-wrapper');

getScripts()
  .then(scripts => console.log(scripts))
  .catch(error => console.error(error));
```

### 2. Get a Specific Script

```javascript
const { getScript } = require('pdapi-wrapper');

const scriptId = 'your-script-id';
getScript(scriptId)
  .then(script => console.log(script))
  .catch(error => console.error(error));
```

### 3. Get All Tutorials

```javascript
const { getTutorials } = require('pdapi-wrapper');

getTutorials()
  .then(tutorials => console.log(tutorials))
  .catch(error => console.error(error));
```

### 4. Get a Specific Tutorial

```javascript
const { getTutorial } = require('pdapi-wrapper');

const tutorialId = 'your-tutorial-id';
getTutorial(tutorialId)
  .then(tutorial => console.log(tutorial))
  .catch(error => console.error(error));
```

### 5. Get User Info

```javascript
const { getUser } = require('pdapi-wrapper');

const userId = 'your-user-id';
getUser(userId)
  .then(user => console.log(user))
  .catch(error => console.error(error));
```

### 6. Get Guild Info

```javascript
const { getGuildInfo } = require('pdapi-wrapper');

getGuildInfo()
  .then(guild => console.log(guild))
  .catch(error => console.error(error));
```

## 🌐 API URL

The API interacts with the following base URL:

```
https://pdapi.vercel.app
```

## 💬 Contributions

Contributions are welcome! Feel free to open issues or submit pull requests to improve the library.

## 📄 License

This project is licensed under the MIT License.