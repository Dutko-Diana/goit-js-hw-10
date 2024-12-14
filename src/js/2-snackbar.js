import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

const input = document.querySelector('.snackbar-input');
const form = document.querySelector('.form');
const radio = document.querySelectorAll('.radio');

form.addEventListener('submit', createPromise);

function createPromise(event) {
  event.preventDefault();
  const delay = input.value;
  const state = event.currentTarget.elements.state.value;

  event.currentTarget.reset();

  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (state === 'rejected') {
        reject(
          iziToast.error({
            icon: 'none',
            close: false,
            message: `❌ Rejected promise in ${delay}ms`,
          })
        );
      } else {
        resolve(
          iziToast.success({
            icon: 'none',
            close: false,
            message: `✅ Fulfilled promise in ${delay}ms`,
          })
        );
      }
    }, delay);
  });
}

// createPromise()
//   .then(data =>
//     iziToast.success({
//       message: data,
//     })
//   )
//   .catch(error =>
//
//   );
