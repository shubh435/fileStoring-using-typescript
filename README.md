# 📁 File Storing API using TypeScript

A simple and extensible backend API built with **Express.js**, **TypeScript**, and **MongoDB** for handling file uploads, storing them locally, and saving file metadata to a database. Users can upload, retrieve, and manage multiple files through RESTful endpoints.

---

## 🚀 Features

- Upload and store multiple files (images, PDFs, audio, etc.)
- Retrieve all uploaded files or a specific file by ID
- Fully type-safe with **TypeScript**
- Clean modular architecture (Controllers, Routes, Models)
- File validation and renaming with `multer` and `shortid`
- Postman-tested API collection provided

---

## 🗂️ Project Structure

fileStoring-using-typescript/
```
├── controller/ # Handles request logic
│ └── filesStorer.ts
├── model/ # Mongoose schema for storing files
│ └── filesStorer.ts
├── routes/ # API route handlers
│ └── filesRoutes.ts
├── constants/ # Constants and custom types
│ ├── config.ts
│ └── type.ts
├── public/ # Directory to store uploaded files
├── index.ts # Application entry point
└── package.json

```
---

## ⚙️ Installation & Setup

### 1. Clone the repository


git clone https://github.com/shubh435/fileStoring-using-typescript.git
cd fileStoring-using-typescript

2. Install dependencies
npm install
3. Set up environment variables
Create a .env file in the root directory with the following:
MONGO_DB_USER=your_user_here
MONGO_DB_PASSWORD=your_password_here
MONGO_DB_DATABASE=your_database_name_here
MONGO_DB_STRING=your_connection_string_here
PORT=4000
Make sure MongoDB is running locally or remotely and the connection string is valid.

4. Run the project
For development:
npm run start

For production:
npm run build
npm start
🧪 API Endpoints
✅ Upload Multiple Files
POST /api/files/create
| Form Field | Type     | Description              |
| ---------- | -------- | ------------------------ |
| `name`     | `text`   | Optional name of the set |
| `files`    | `file[]` | Multiple file uploads    |
Example (Postman):
URL: http://localhost:4000/api/files/create

Method: POST

Body: form-data

name: test files

files: upload multiple files

Response:
{
  "files": {
    "_id": "id",
    "name": "test files",
    "files": [
      {
        "fileUrl": "http://localhost:4000/public/shortid_file1.jpg",
        "fileType": "image/jpeg"
      }
    ]
  }
}

📄 Get All Files
GET /api/files/get

Response:
{
  "files": [
    {
      "_id": "...",
      "name": "...",
      "files": [
        {
          "fileUrl": "...",
          "fileType": "..."
        }
      ]
    }
  ]
}


🔍 Get File by ID
GET /api/files/:productId

Replace :productId with a valid MongoDB ObjectID.

Example:
GET http://localhost:4000/api/files/68396374589e5f457ba4bfb3

Response:
{
  "product": {
    "_id": "...",
    "name": "...",
    "files": [
      {
        "fileUrl": "...",
        "fileType": "..."
      }
    ]
  }
}
📫 Postman Collection
Test all APIs using the provided Postman collection:

✅ Upload files

✅ Get file by ID

✅ Get all files

🔗 Download [filestorercollection.json](https://github.com/user-attachments/files/20517647/filestorercollection.json) and import it into Postman
🧱 Built With
Node.js

Express.js

TypeScript

MongoDB

Mongoose

Multer

shortid

🙋‍♂️ Author

Shubham Sarode

🔗 Portfolio: https://shubh435.github.io/

📧 shubhamsarode435@gmail.com

🔗 LinkedIn: https://www.linkedin.com/in/shubh435/

🔗 GitHub: https://github.com/shubh435


This project is licensed under the MIT License.

🌟 Support
If you like this project, give it a ⭐ on GitHub and share it with others!

Let me know if you'd like to:

- Add screenshots of Postman tests or folder structure
- Add Swagger API documentation

I can help with all of those!

---
[Uploading filestorercollection.{
	"info": {
		"_postman_id": "e57b665c-5bb2-4ccd-bafb-b0777b897022",
		"name": "News Collection",
		"schema": "https://schema.getpostman.com/json/collection/v2.1.0/collection.json",
		"_exporter_id": "20860135"
	},
	"item": [
		{
			"name": "upload files",
			"request": {
				"method": "POST",
				"header": [],
				"body": {
					"mode": "formdata",
					"formdata": [
						{
							"key": "name",
							"value": "test files",
							"type": "text"
						},
						{
							"key": "files",
							"type": "file",
							"src": [
								"postman-cloud:///1f03c7f8-beb1-4d40-ad42-ce0c582d04fd",
								"/Users/ext-hyd-lap-058/Downloads/file_example_MP3_700KB.mp3",
								"/Users/ext-hyd-lap-058/Downloads/m6.jpeg",
								"/Users/ext-hyd-lap-058/Downloads/m8.jpeg",
								"/Users/ext-hyd-lap-058/Downloads/Screenshot 2025-05-22 132311.png"
							]
						}
					]
				},
				"url": {
					"raw": "http://localhost:4000/api/files/create",
					"protocol": "http",
					"host": [
						"localhost"
					],
					"port": "4000",
					"path": [
						"api",
						"files",
						"create"
					]
				}
			},
			"response": []
		},
		{
			"name": "Get file by id",
			"request": {
				"method": "GET",
				"header": [],
				"url": {
					"raw": "http://localhost:4000/api/files/68396374589e5f457ba4bfb3",
					"protocol": "http",
					"host": [
						"localhost"
					],
					"port": "4000",
					"path": [
						"api",
						"files",
						"68396374589e5f457ba4bfb3"
					]
				}
			},
			"response": []
		},
		{
			"name": "getAllFiles",
			"request": {
				"method": "GET",
				"header": []
			},
			"response": []
		}
	]
}json…]()
