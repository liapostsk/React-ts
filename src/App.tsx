import CourseGoal from "./components/CourseGoal.tsx";
import CourseGoalList from "./components/CourseGoalList.tsx";
import Header from "./components/Header.tsx";
import goalsImg from "./assets/goals.jpg";
import { useState } from "react";
import NewGoal from "./components/NewGoal.tsx";

export type CourseGoal = { // De esta manera podemos exportar este tipo para que otros componentes lo puedan usar
  title: string;
  description: string;
  id: number;
};

export default function App() {
  const [goals, setGoals] = useState<CourseGoal[]>([]); //array de CourseGoal

  function handleAddGoal(goal: string, summary: string) {
    const newGoal: CourseGoal = {
      id: Math.random(),
      title: goal,
      description: summary
    }
    setGoals(prevGoals => {
      return [...prevGoals, newGoal];
    });
  }

  function handleDeleteGoal(id: number) {
    setGoals(prevGoals => {
      //filter devuelve un nuevo array con los elementos que cumplen la condicion
      return prevGoals.filter(goal => goal.id !== id);
    });
  }

  return <main>
    <Header image={{src: goalsImg, alt: "A list of goals" }}>
      <h1>Your Course Goals</h1>
    </Header>

    <NewGoal onAddGoal={handleAddGoal}/>
    <CourseGoalList goals={goals} onDeleteGoal={handleDeleteGoal}/>
  </main>
}
