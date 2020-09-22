// React Import
import React from 'react';

export default function FormField({
  className,
  idName,
  elementName,
  elementLabel,
  errors,
}) {
  return (
    <div className={className}>
      <TextField
        autoFocus
        margin="dense"
        name={elementName}
        id={idName}
        label={elementLabel}
        fullWidth
        defaultValue={elementName}
        inputRef={register({ required: true, pattern: /\d+/ })}
      />
      {errors.wordGoal
        && <span>Word goal is required and must be a number</span>}
    </div>
  );
}
