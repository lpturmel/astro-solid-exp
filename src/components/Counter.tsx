import { Component, createSignal } from "solid-js";

const Counter: Component = () => {
    const [counter, setCounter] = createSignal<number>(0);
    const increment = () => setCounter(counter() +1)
    return (
    <div>
        <button class="bg-gray-500 w-full rounded-md hover:bg-gray-600" onClick={increment}> {counter} </button>
    </div>
           )
}

export default Counter;
