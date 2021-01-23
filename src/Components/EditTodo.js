import React, { useState } from 'react';
import { connect, useDispatch } from 'react-redux';
import Modal from 'react-modal';

import { editTodo } from '../redux/actions/todosActions';

const customStyles = {
    content: {
        top: '40%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)',
    },
};
 Modal.setAppElement('#root');

const EditTodo = ({ task }) => {
    const [modalIsOpen, setIsOpen] = useState(false);
    const [editInput, setEditInput] = useState('');
    const dispatch = useDispatch();
    const openModal = () => {
        setIsOpen(true);
    };
    const closeModal = () => {
        setIsOpen(false);
        setEditInput('');
    };
    return (
        <div>
            <button className="btn" onClick={openModal}>
                Edit
      </button>
            <Modal
                isOpen={modalIsOpen}
                onRequestClose={closeModal}
                style={customStyles}
                contentLabel="Example Modal"  >
                <h3 style={{ margin: 0, padding: 0, color: '#7c7c7c' }}>
                    Edit To-Do
        </h3>
                <form>
                    <input
                        type="text"
                        id="ModalInput"
                        placeholder={task.text}
                        value={editInput}
                        onChange={(event) => setEditInput(event.target.value)}
                    />
                    <button
                        className="Modal-Btn"
                        onClick={() => {
                            editInput.trim()
                                ? dispatch(
                                    editTodo({
                                        id: task.id,
                                        text: editInput,
                                    })
                                )
                                : alert('There is no changes');
                            closeModal();
                            setEditInput('');
                        }}
                    >
                        Submit
          </button>
                    <button className="Modal-Btn" onClick={closeModal}>
                        close
          </button>
                </form>
            </Modal>
        </div>
    );
};

export default connect()(EditTodo);