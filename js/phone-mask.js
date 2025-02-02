const forms = document.querySelectorAll('.form__body');

forms.forEach((form) => {
  const phoneInputs = form.querySelectorAll('.form__input--phone');

  const getInputValue = (input) => input.value.replace(/\D/g, '');

  const onPhoneInput = (evt) => {
    // eslint-disable-next-line prefer-const
    let input = evt.target,
      inputNumbersValue = getInputValue(input),
      formattedInputValue = '',
      // eslint-disable-next-line prefer-const
      selectionStart = input.selectionStart;

    if (!inputNumbersValue) {
      input.value = '';
    }
    if (input.value.length !== selectionStart) {
      if (evt.data && /\D/g.test(evt.data)) {
        input.value = inputNumbersValue;
      }
      return;
    }
    if (['7', '8', '9'].indexOf(inputNumbersValue[0]) > -1) {
      if (inputNumbersValue[0] === '9') {
        inputNumbersValue = `${ inputNumbersValue}`;
        formattedInputValue = '+7 (9';
      } else if (inputNumbersValue[0] === '8' || inputNumbersValue[0] === '7') {
        formattedInputValue = '+7 ';
      }
      if (inputNumbersValue.length > 1) {
        formattedInputValue += `(${ inputNumbersValue.substring(1, 4)}`;
      }
      if (inputNumbersValue.length >= 5) {
        formattedInputValue += `) ${inputNumbersValue.substring(4, 7)}`;
      }
      if (inputNumbersValue.length >= 8) {
        formattedInputValue += `-${ inputNumbersValue.substring(7, 9)}`;
      }
      if (inputNumbersValue.length >= 10) {
        formattedInputValue += `-${ inputNumbersValue.substring(9, 11)}`;
      }
    } else {
      formattedInputValue = `+7 ${inputNumbersValue.substring(0, 16)}`;
    }
    input.value = formattedInputValue;
  };
  const onPhoneKeydown = (evt) => {
    const input = evt.target;
    if (evt.keyCode === 8 && getInputValue(input).length === 1) {
      input.value = '';
    }
  };

  const onPhonePaste = (evt) => {
    const pasted = evt.clipboardData || window.clipboardData;
    const input = evt.target,
      inputNumbersValue = getInputValue(input);
    if (pasted) {
      const pastedText = pasted.getData('Text');
      if (/\D/g.test(pastedText)) {
        input.value = inputNumbersValue;
      }
    }
  };

  phoneInputs.forEach((input) => {
    input.addEventListener('input', onPhoneInput);
    input.addEventListener('keydown', onPhoneKeydown);
    input.addEventListener('paste', onPhonePaste);
  });
});
