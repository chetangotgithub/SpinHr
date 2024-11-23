## Spin HR

An Application used by HR to manage employees' data at scale. Employees use it to see attendance add leaves check salary, holidays, and tasks assigned

## Project Status
Currently, in the WIP state, you can sign up, sign in, add leaves, and check attendance.

## Project Screen Shot

![image](https://github.com/user-attachments/assets/53e6ea18-4502-48fc-b4f6-e88ba317f309)

![image](https://github.com/user-attachments/assets/c6b5bf18-f8d9-456e-b512-155b7d16f224)

![image](https://github.com/user-attachments/assets/babdf3b8-f2dc-45b5-ad4d-37d6fa2b5352)

## Installation and Setup Instructions

1. Clone project

2. install dependencies
```
cd frontend
npm i
```

```
cd backend
npm i
```
3. Create .env file in backend folder

```
MONGODB_URI = <MONGODB_URI>
PORT = <ANY PORT>
SALT = <NUMBER>

TOKEN_SECRET=<RANDOM STRING>

```
4. Run the code

```
cd frontend
npm run dev
```

```
cd backend
npm start
```

## Tech Stack Used

**Frontend:** React, Express, MaterialUI, CSS, Redux, React Router, Axios
</br>
**Backend:** Mongodb, Mongoos,e JsonWebToken, REST APIS


