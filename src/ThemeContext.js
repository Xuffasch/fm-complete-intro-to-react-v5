import { createContext } from 'react';

// The context is a hook with :
// - a default value : "green", a string value
// - method to update the value: () => {}, empty function for a default function
const ThemeContext = createContext(["green", () => {}]);

export default ThemeContext;