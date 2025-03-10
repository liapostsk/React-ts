import { useRef, type FormEvent } from 'react';

type NewGoalProps = {
    onAddGoal: (goal: string, summary: string) => void;
}

export default function NewGoal({ onAddGoal }: NewGoalProps) {
    const goal = useRef<HTMLInputElement>(null); // useRef es una referencia a un elemento del DOM
    const summary = useRef<HTMLInputElement>(null);


    function handleSubmit(event: FormEvent<HTMLFormElement>) { // se añade el tipo FormEvent para que typescript sepa que tipo de evento es
        // se añade esto porque el formulario por defecto recarga la pagina
        // y no queremos que eso pase por eso se previene el comportamiento por defecto
        // con preventDefault que hace que no se recargue la pagina
        event.preventDefault();

        //new FormData(event.currentTarget); Es una manera de obtener los datos del formulario
        //pero no es recomendable porque no es compatible con todos los navegadores
        //por eso usaremos useRef()
        const enteredGoal = goal.current!.value; // ! es para decirle a typescript que estamos seguros de que no es null
        const enteredSummary = summary.current!.value;

        onAddGoal(enteredGoal, enteredSummary);

        //reset el form
        event.currentTarget.reset();
    }

    //el boton al estar dentro de un form, por defecto se comporta como un submit
    //por eso se añade el evento onSubmit al formulario
    return <form onSubmit={handleSubmit}>
        <p>
            <label htmlFor="goal">Your goal</label>
            <input id="goal" type="text" ref={goal} />
        </p>
        <p>
            <label htmlFor="summary">Short summary</label>
            <input id="summary" type="text" ref={summary} />
        </p>
        <p>
            <button>Add Goal</button>
        </p>
    </form>
}