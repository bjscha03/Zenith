import React from 'react';

interface SpamTrapProps {
  value: string;
  onChange: (value: string) => void;
}

const SpamTrap: React.FC<SpamTrapProps> = ({ value, onChange }) => (
  <div className="absolute -left-[10000px] top-auto h-px w-px overflow-hidden" aria-hidden="true">
    <label>
      Leave this field blank
      <input
        type="text"
        name="website"
        tabIndex={-1}
        autoComplete="off"
        value={value}
        onChange={(event) => onChange(event.target.value)}
      />
    </label>
  </div>
);

export default SpamTrap;
