import ReactDOM from 'react-dom';
import NewCard from '../NewCard'

const FlashcardModal = ({ onClose, onCardCreated }) => {
  const handleClickOutside = (e) => {
    if (e.target.classList.contains('modal-overlay')) {
      onClose();
    }
  };

  return ReactDOM.createPortal(
    <div onClick={handleClickOutside} className="modal-overlay fixed inset-0 bg-gray-600 bg-opacity-75 flex items-center justify-center">
      <div className="relative bg-white dark:bg-gray-800 p-8 rounded shadow-md w-full max-w-lg">
        <NewCard onClose={onClose} onCardCreated={onCardCreated} /> {/* Passe a função onCardCreated */}
        <button
          onClick={onClose}
          className="mt-4 text-white px-4 py-2 rounded-full text-4xl hover:bg-light-accent transition absolute top-0 right-5"
        >
          &#215;
        </button>
      </div>
    </div>,
    document.getElementById('modal-root') 
  );
};

export default FlashcardModal;
