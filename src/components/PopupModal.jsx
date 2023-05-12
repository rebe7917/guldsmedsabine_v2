import { motion } from "framer-motion";

function PopupModal({ isOpen, onClose, children }) {
  // Define your animation variants
  const modalVariants = {
    hidden: { opacity: 0, scale: 0.5 },
    visible: { opacity: 1, scale: 1 },
    exit: { opacity: 0, scale: 0.5 },
  };

  // Return null if the modal is not open
  if (!isOpen) return null;

  return (
    <motion.div
      className="modal-content fixed inset-0 bg-transparent flex items-center justify-center p-16"
      onClick={onClose}
      initial="hidden"
      animate="visible"
      exit="exit"
      variants={modalVariants}
      transition={{
        type: "spring",
        stiffness: 400,
        damping: 30,
      }}
    >
      <div className="relative bg-white rounded-md shadow-md max-w-4xl mx-auto">
        <button className="absolute p-2 right-2 top-2 rounded-md hover:bg-white/20 transition-colors" onClick={onClose}>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="white" className="w-8 h-8">
            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        {children}
      </div>
    </motion.div>
  );
}

export default PopupModal;