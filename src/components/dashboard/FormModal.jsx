import React, { useEffect } from "react";
import ReactDOM from "react-dom";
import Modal from "react-modal";

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    width: "60%",
    padding: "0px",
    transform: "translate(-50%, -50%)",
  },
};

// Make sure to bind modal to your appElement (https://reactcommunity.org/react-modal/accessibility/)

export const FormModal = () => {
  let subtitle;
  const [modalIsOpen, setIsOpen] = React.useState(false);

  function openModal() {
    setIsOpen(true);
  }

  useEffect(() => {
    openModal();
  }, []);

  function afterOpenModal() {
    // references are now sync'd and can be accessed.
    subtitle.style.color = "#f00";
  }

  function closeModal() {
    setIsOpen(false);
  }

  return (
    <div className={`${modalIsOpen ? "bg-gray-500 h-screen w-full" : ""}`}>
      <Modal
        isOpen={modalIsOpen}
        onAfterOpen={afterOpenModal}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
      >
        <div className="w-full">
          <p class="border-b border-black p-5">
            Based on the inputs below we will recommend you some best practices
            for your health. The recommendations provided are verified by the
            doctors. Feel free to provide the inputs. All the data provided will
            be safe.
          </p>
          <form action="" className="p-4">
            <div className="flex space-x-2">
              <div className="flex flex-col">
                <label for="weight">weight</label>
                <input
                  type="number"
                  name="weight"
                  id="weight"
                  className="bg-gray-200 rounded p-2 outline-none"
                  placeholder="In Kg"
                />
              </div>
              <div className="flex flex-col">
                <label for="height">height</label>
                <input
                  type="number"
                  name="height"
                  id="height"
                  className="bg-gray-200 rounded p-2 outline-none"
                  placeholder="In Kg"
                />
              </div>
              <div className="flex flex-col">
                <label for="age">age</label>
                <input
                  type="number"
                  name="age"
                  id="age"
                  className="bg-gray-200 rounded p-2 outline-none"
                  placeholder="In Kg"
                />
              </div>
              <div className="flex flex-col">
                <label for="gender">gender</label>
                <input
                  type="select"
                  name="gender"
                  id="gender"
                  className="bg-gray-200 rounded p-2 outline-none"
                  placeholder="In Kg"
                />
              </div>
            </div>
          </form>
        </div>
      </Modal>
    </div>
  );
};
