import { useState, useEffect } from "react";

export const useForm = (callback, validate, form) => {
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    if (Object.keys(errors).length === 0 && isSubmitting) {
      callback();
    }
  }, [errors, callback, isSubmitting]);

  const handleSubmit = (event) => {
    if (event) event.preventDefault();
    setErrors(validate(form));
    setIsSubmitting(true);
  };

  return {
    handleSubmit,
    errors,
  };
};
