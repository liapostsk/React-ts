import { type ReactNode } from 'react';
// import { type PropsWithChildren } from 'react';
type CourseGoalProps = {
    id: number;
    title: string;
    onDelete: (id: number) => void;
    children: ReactNode;
};

// We can also use PropsWithChildren that includes the child prop
// type CourseGoalProps = PropsWithChildren<{ title: string }>;

// we can also use interface
// interface CourseGoalProps {
//     title: string;
//     description: string;
// }

// Para que usamos children? Para poder pasarle elementos hijos al componente


export default function CourseGoal({id, title, onDelete, children}: CourseGoalProps ) {
    return (
        <article>
            <div>
                <h2>{title}</h2>
                {children}
            </div>
            <button onClick={() => onDelete(id)}>Delete</button>
        </article>
    );
}



// Uso de key, un prop especial que se usa para identificar elementos en una lista

//CODIGO COMPONENTE
// type UserProps = {
//    name: string;
// };
 
// function User({ name }: UserProps) {
//   return <li>User: {name}</li>;
// }

// CODIGO APP

//Este componente se usa dentro de App, donde se tiene un array de usuarios:
// const users = [{ name: 'John' }, { name: 'Mary' }, { name: 'Luke' }];
// export default function App() {
//   return (
//     <ul>
//       {users.map((user, index) => (  //index es el segundo argumento que se le pasa a la funcion map
//         <User key={index} name={user.name} />    //key es un prop especial que se usa para identificar elementos en una lista
//       ))}
//     </ul>
//   );
// }