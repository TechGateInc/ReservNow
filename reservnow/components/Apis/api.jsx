import { useState } from 'react';

export function useDuplicatedButton3() {
  const [duplicatedButton3, setDuplicatedButton3] = useState(null);

  const handleDuplicate3 = (button3) => {
    setDuplicatedButton3(button3);
  };

  const handleRemove3 = () => {
    setDuplicatedButton3(null);
  };

  return [duplicatedButton3, handleDuplicate3, handleRemove3];
}
