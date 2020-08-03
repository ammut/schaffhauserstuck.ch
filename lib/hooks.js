import {useState} from "react";

export function useToggle(init) {
    const [state, setState] = useState(init)
    const toggleState = () => setState(!state)
    return [state, toggleState]
}
