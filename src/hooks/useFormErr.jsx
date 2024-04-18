import { useState } from 'react'
import { toast } from 'react-toastify';

export default function useFormErr() {
  const [formErr, setFormErr] = useState({});

  function handleMutationErr(err){
    if (err.response.data) {
      setFormErr(err.response.data.data);
      toast.error(err.response.data.message);
    } else {
      toast.error(err.message);
    }
  }

  return {formErr, setFormErr, handleMutationErr}
}
