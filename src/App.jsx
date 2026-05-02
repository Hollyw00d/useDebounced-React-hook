/*
Implement a useDebounce hook that delays state updates until a specified delay has passed without any further changes to the provided value.
*/
import {useState} from 'react';
import {useDebounce} from './hooks/debounce.js';
import './App.css';

export default function App() {
   const [text, setText] = useState('');
   const debouncedText = useDebounce(text);

   return (
    <div>
      <p>
         The example below is using a custom <code>useDebounce</code> React hook to delay showing text under the <strong>Debounced Text</strong> heading until typing in the <code>input</code> field is done.
      </p>
      <label htmlFor="text-field">
      <input value={text} name="text-field" onChange={(e) => setText(e.target.value)} placeholder="Text field" />
      </label>
      <h2 className="mb-0 pb-0"><strong>Debounced Text</strong></h2>
      <p className="mt-0 pt-0">{debouncedText}</p>
    </div>
  );
}