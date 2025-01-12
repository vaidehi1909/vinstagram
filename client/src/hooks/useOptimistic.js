import { useState, useCallback } from "react";

export const useOptimistic = (initialValue) => {
  const [value, setValue] = useState(initialValue);
  const [previousValue, setPreviousValue] = useState(initialValue);

  const updateOptimistically = useCallback(
    async (updateFn, apiFn = () => {}) => {
      setPreviousValue(value);
      const newValue = updateFn(value);
      setValue(newValue);

      try {
        await apiFn();
      } catch (error) {
        setValue(previousValue);
        throw error;
      }
    },
    [value, previousValue]
  );

  return [value, updateOptimistically];
};
