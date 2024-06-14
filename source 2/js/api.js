const BASE_URL = 'https://echo.htmlacademy.ru/';

const sendData = (body) => fetch(BASE_URL,
  {
    method: 'POST',
    body,
  })
  .then((response) => {
    if (!response.ok) {
      throw new Error('Не удалось отправить форму. Попробуйте ещё раз!');
    }
  })
  .catch(() => {
    throw new Error('Не удалось отправить форму. Попробуйте ещё раз!');
  });

export { sendData };
