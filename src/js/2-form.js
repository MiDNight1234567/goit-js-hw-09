const refs = {
  form: document.querySelector('.feedback-form'),
  input: document.querySelector('.form-input'),
  textarea: document.querySelector('.form-textarea'),
};

const localStorageKey = 'feedback-form-state';
const localFormData = JSON.parse(localStorage.getItem(localStorageKey));

if (localFormData !== null && localFormData !== undefined) {
  refs.input.value = localFormData.email;
  refs.textarea.value = localFormData.message;
}

refs.form.addEventListener('input', e => {
  const formData = {
    email: refs.input.value.trim(),
    message: refs.textarea.value.trim(),
  };

  localStorage.setItem(localStorageKey, JSON.stringify(formData));
});

refs.form.addEventListener('submit', event => {
  event.preventDefault();
  const elements = event.target.elements;
  const formData = {
    email: elements.email.value.trim(),
    message: elements.message.value.trim(),
  };

  if (
    event.target.elements.email.value.trim() !== '' &&
    event.target.elements.message.value.trim() !== ''
  ) {
    console.log(formData);
    localStorage.removeItem(localStorageKey);
    refs.form.reset();
  }
});
