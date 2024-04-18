import { useMemo } from "react";

export default function useStaticSelectOptions() {
  const genderOptions = useMemo(() => {
    return [
      { value: "Female", label: "انثي" },
      { value: "Male", label: "ذكر" },
    ];
  }, []);
 
  return {
    genderOptions,
  };
}