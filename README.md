# 🔐 Authentication System – Node.js, Express, MongoDB

This project is a simple and secure user authentication system built with **Node.js**, **Express**, and **MongoDB**. It uses hashed passwords, JWT tokens, and cookie-based login sessions.

---

## 🚀 Features

- User Registration with hashed passwords
- User Login with JWT Token
- Password hashing using `bcryptjs`
- Environment-based config management
- Token stored in HTTP-only cookies for security

---

## 🧰 Tech Stack & Packages Used

| Technology | Usage |
|------------|-------|
| **Express.js** | Web framework for building the REST API |
| **Mongoose** | ODM for MongoDB, used to interact with the database |
| **dotenv** | To load environment variables from `.env` file |
| **jsonwebtoken** | To generate and verify JWT tokens |
| **cookie-parser** | To parse and manage cookies |
| **bcryptjs** | For password hashing and comparison |
| **multer** | For DB can read our data |
---

* Password Hash 
- We convert password(plan text) to Hash when register.
    const user = await userModel.create({
        username, 
        password: await bcryptjs.hash(password, 10)   //(password, slat)
    })
- No one can read this and it can't be reverse.
❓1. Agar salt hash ke andar hai to kya password bhi nikala jaa sakta hai?
❌ Nahi! Password ko reverse nahi kiya jaa sakta.
Hashing (like bcrypt) is a one-way function.

Jab password + salt ko mila kar hash banate hain, wo ek irreversible format ban jata hai.



Question -> When we login how we can match the password. If it can't be reverse.

Jab user login karta hai, to bcrypt stored hash me se salt nikaalta hai, aur entered password ke saath use karke new hash banata hai. Agar wo hash stored hash se match ho jaaye to password sahi hai.

bcrypt.compare(enteredPassword, storedHash); // internally does:
   → extract salt from storedHash
   → hash enteredPassword with extracted salt
   → compare result with storedHash



Type of Genrative AI
Text => text
Text => image
text => video
text => audio 


image => text