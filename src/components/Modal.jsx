export default function Modal({ children }) {
  return (
    <>
      <dialog id='my_modal_1' className='modal'>
        <form method='dialog' className='modal-box'>
          {children}
          <div className=' modal-middle'>
            <button className='btn'>Close</button>
          </div>
        </form>
      </dialog>
    </>
  );
}
