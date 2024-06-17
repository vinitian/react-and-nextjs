import { useState } from 'react';

export default function SyncedInputs() {
  const [text, setText] = useState('');

  return (
    <>
      <Input
        label="First input"
        text={text}
        onChange={(e) => setText(e.target.value)}
        />
      <Input
        label="Second input"
        text={text}
        onChange={(e) => setText(e.target.value)}
        />
    </>
  );
}

function Input({ label, text, onChange }) {
  return (
    <label>
      {label}
      {' '}
      <input
        value={text}
        onChange={onChange}
      />
    </label>
  );
}
