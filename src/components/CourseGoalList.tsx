import CourseGoal from "./CourseGoal.tsx";
import { type CourseGoal as CGoal} from "../App.tsx";

// Podemos volver a crear un type con los mismos campos que el componente CourseGoal
//type CourseGoalList = {
//  goals: {
//    id: number;
//    title: string;
//    description: string;
//  }[];
//}

// O podemos importar el type del componente CourseGoal
type CourseGoalList = {
  goals: CGoal[];
  onDeleteGoal: (id: number) => void;
};

export default function CourseGoalList({goals, onDeleteGoal}: CourseGoalList) {
  return (
    <ul>
      {goals.map( (goal) => (
        <li key={goal.id}>
          <CourseGoal id={goal.id} title={goal.title} onDelete={onDeleteGoal}>
            <p>{goal.description}</p>
          </CourseGoal>
        </li>
      ))}
    </ul>
  )
}