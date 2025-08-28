## My To-Do App 🚀
Welcome to my simple To-Do App! This project is a classic example of a web application built with React and Next.js to help you manage your daily tasks efficiently.

## 🌟 Features
**Create Tasks:** Easily add new tasks to your list.

**Mark as Completed:** Check off tasks as you finish them.

**Edit Tasks:** Made a typo? No problem! You can edit any existing task.

**Delete Tasks:** Remove tasks you no longer need.

**Persistence:** Your tasks are saved locally in your browser, so they're still there even if you close the tab.

## 🛠️ Technologies Used
`React:` For building the user interface.

`Next.js:` A fantastic React framework that provides a great development experience.

`Font Awesome:` For the sleek and functional icons.

`uuid:` To generate unique IDs for each task, ensuring everything is tracked correctly.

## 📝 How It Works
The magic happens in TodoWrapper.js, which acts as the central hub for the application's state. It uses React's useState hook to manage the list of tasks and the useEffect hook to handle local storage, saving and loading your tasks automatically.

`addTodo:` Adds a new task object to the todos array with a unique ID, the task text, and initial completed and isEditing states.

`taskCompleted:` Toggles the completed status of a specific task based on its ID.

`deleteTodo:` Removes a task from the todos array.

`editTodo:` Toggles the isEditing status of a task, which controls whether the edit form is displayed.

`editTask:` Updates the text of a task when you're done editing.

## 🚀 Getting Started
To get a copy of this project up and running on your local machine, follow these simple steps.

**Prerequisites**
You'll need to have Node.js installed on your computer.

**Installation**
Clone the repository:

```Bash

git clone https://github.com/SHLapi/Simple-To-Do-list.git
```
Navigate to the project directory:

```Bash

cd to-do
```
Install the dependencies:

```Bash

npm install
```
Running the App

Start the development server:

```Bash

npm run dev
```
Open your browser and visit ```http://localhost:3000``` to see the app in action!
