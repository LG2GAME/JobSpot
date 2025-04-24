export const handleChange = (e, setFormData) => {
  const { id, value, type, checked } = e.target;
  const mappedId =
    id === "remember-me"
      ? "rememberMe"
      : id.replace("rep-password", "repPassword");

  setFormData((prev) => ({
    ...prev,
    [mappedId]: type === "checkbox" ? checked : value,
  }));
};

export const handleSubmit = (e, formData) => {
  e.preventDefault();
  console.log("Form data:", formData);
};
