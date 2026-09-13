# 🚀 Dev Stack

A modern and interactive technology stack builder for developers.

Dev Stack helps developers explore different frontend, backend, database, and development tools, compare their options, and build a personalized technology stack for their next project.

---

## 🛠️ Technologies Used

- **React** – UI development
- **TypeScript** – Type-safe JavaScript
- **Tailwind CSS** – Styling and responsive design
- **Vite** – Fast development and build tooling
- **React Toastify** – User notifications
- **JSON** – Technology data management
- **Git & GitHub** – Version control and deployment

---

## ✨ Features

### 1. 🔍 Explore Technologies

Browse a collection of development technologies with useful information such as:

- Technology name
- Category
- Description
- Difficulty level
- Rating
- Technology badge

### 2. 📚 Build Your Own Stack

Add technologies to your personal stack and see your selected technologies in one place.

You can also:

- Remove individual technologies
- Remove all technologies
- Prevent duplicate technologies from being added

### 3. 🔔 Interactive User Feedback

The application provides instant feedback using React Toastify for important actions:

- Technology added successfully
- Duplicate technology attempts
- Technology removed
- All technologies removed
- Data loading errors



#React Questions & Answers

1. What is JSX, and why is it used in React?

Ans: JSX is a syntax that lets us write HTML-like code inside JavaScript or TypeScript. It makes React components easier to read and helps us describe what the UI should look like.

2. What is the difference between props and state?

Ans: Props are data passed from a parent component to a child component. State is data managed inside a component that can change over time.

3. What does the `useState` hook do, and where did you use it in this project?

Ans: useState lets a React component store and update data. I used it in "TechnologySection.tsx" to store the selected technologies, loading status, and error state.

4. What does the `useEffect` hook do, and why did you need it to load the JSON data?

Ans: useEffect runs code after a component renders. I used it in "TechnologySection.tsx" to fetch the technology JSON data when the component loads.

5. Why does every item in a `.map()` list need a unique `key` prop?

Ans: React uses the "key" to identify each item in a list. A unique key helps React efficiently update the correct item when the list changes.

6. What is conditional rendering? Show one place you used it.

Ans: Conditional rendering means showing different UI depending on a condition.

I used it to show an empty-stack message when no technologies have been selected:


{selectedTechnologies.length === 0 ? (
  <p>Your stack is empty. Add technologies to build your stack.</p>
) : (
  // Selected technologies
)}
