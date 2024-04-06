import { ErrorText, BASE_URL } from './constants';

const sendData = (body) => fetch(BASE_URL,
  {
    method: 'POST',
    body,
  })
  .then((response) => {
    if (!response.ok) {
      throw new Error(ErrorText.SENDING_ERROR);
    }
  });

export { sendData };
