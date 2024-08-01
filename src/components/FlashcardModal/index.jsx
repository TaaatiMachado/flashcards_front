import ReactDOM from 'react-dom';
import FlashcardForm from '../NewCard'; 

const FlashcardModal = ({ onClose }) => {
    const handleClickOutside = (e) => {
        if (e.target.classList.contains('modal-overlay')) {
          onClose();
        }
      };
  return ReactDOM.createPortal(
    <div onClick={handleClickOutside} className="fixed inset-0 bg-gray-600 bg-opacity-75 flex items-center justify-center">
      <div>
        <FlashcardForm onClose={onClose} /> 
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
