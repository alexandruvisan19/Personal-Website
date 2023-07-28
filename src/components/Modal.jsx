import { useRef } from 'react';

export default function Modal({ children }) {
  const closeRef = useRef(null);

  function closeModal() {
    closeRef.current.close();
  }

  return (
    <>
      <dialog id='my_modal_1' className='modal' ref={closeRef}>
        <form
          className='modal-box'
          action='https://formsubmit.co/019c6aa344dc85907f6dc9a99ac9e911'
          method='POST'>
          <button
            onClick={closeModal}
            type='button'
            className='btn btn-sm btn-circle btn-ghost absolute right-2 top-2'>
            ✕
          </button>
          {children}
          <label className='block relative mb-5' htmlFor='name'>
            <span className='i-mdi-account text-2xl absolute top-[0.7rem] left-2'></span>
            <input
              id='name'
              name='name'
              type='text'
              placeholder='Name'
              className='input input-bordered input-info w-full max-w-lg pl-10 text-lg'
            />
          </label>
          <label className='block relative mb-5' htmlFor='email'>
            <span className='i-mdi-email text-2xl absolute top-[0.7rem] left-2'></span>
            <input
              id='email'
              name='email'
              type='email'
              placeholder='Email'
              className='input input-bordered input-info w-full max-w-lg pl-10 text-lg'
            />
          </label>
          <label className='block relative mb-5' htmlFor='message'>
            <span className='i-mdi-fountain-pen-tip text-2xl absolute top-[0.7rem] left-2'></span>
            <textarea
              id='message'
              name='message'
              rows='4'
              className='textarea textarea-bordered textarea-info pl-10 text-lg w-full max-w-lg'
              placeholder='Message'></textarea>
          </label>
          <div className='modal-middle'>
            <button
              type='submit'
              className='btn btn-info btn-outline'>
              Send
            </button>
          </div>
        </form>
      </dialog>
    </>
  );
}
