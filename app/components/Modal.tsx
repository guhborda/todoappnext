import { AiOutlineClose } from "react-icons/ai";

interface ModalProps {
  modalOpen: boolean;
  setModalOpen: (open: boolean) => boolean | void;
  children: React.ReactNode;
}
const Modal: React.FC<ModalProps> = ({ modalOpen, setModalOpen, children }) => {
  return (
    <div className={`modal ${modalOpen ? "modal-open" : ""}`}>
      <div className="modal-box overflow-visible">
        <div className="modal-action relative">
          <label className={`btn rounded-full hover:shadow-md absolute -top-16 -right-8`} onClick={()=>setModalOpen(false)}>
            <AiOutlineClose/>
          </label>
        </div>
        {children}
      </div>
    </div>
  );
};
export default Modal;
