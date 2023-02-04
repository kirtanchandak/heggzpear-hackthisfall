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
    borderRadius: "12px",
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
        <div className="w-full h-[500px] md:h-[470px]">
          <p class="border-b border-black p-5 mt-1">
            Based on the inputs below we will recommend you some best practices
            for your health. The recommendations provided are verified by the
            doctors. Feel free to provide the inputs. All the data provided will
            be safe.
          </p>
          <form action="" className="p-4 space-y-4">
            <div className="flex flex-wrap justify-evenly md:space-x-2">
              <div className="flex w-full md:w-52 flex-col">
                <label for="weight">weight</label>
                <input
                  type="number"
                  name="weight"
                  id="weight"
                  className="bg-gray-200 rounded p-2 outline-none"
                  placeholder="In Kg"
                />
              </div>
              <div className="flex w-full md:w-52 flex-col">
                <label for="height">height</label>
                <input
                  type="number"
                  name="height"
                  id="height"
                  className="bg-gray-200 rounded p-2 outline-none"
                  placeholder="In Kg"
                />
              </div>
              <div className="flex w-full md:w-52 flex-col">
                <label for="age">age</label>
                <input
                  type="number"
                  name="age"
                  id="age"
                  className="bg-gray-200 rounded p-2 outline-none"
                  placeholder="In Kg"
                />
              </div>
              <div className="flex w-full md:w-52 flex-col">
                <label for="gender">gender</label>
                <select
                  name="gender"
                  id="gender"
                  className="bg-gray-200 rounded outline-none w-full md:w-52 p-2"
                >
                  <option value="male">Male</option>
                  <option value="female">FemMale</option>
                  <option value="others">Others</option>
                </select>
              </div>
            </div>
            <div className="flex flex-wrap justify-evenly md:space-x-2">
              <div className="flex w-full md:w-52 flex-col">
                <label for="weight">weight</label>
                <input
                  type="number"
                  name="weight"
                  id="weight"
                  className="bg-gray-200 rounded p-2 outline-none"
                  placeholder="In Kg"
                />
              </div>
              <div className="flex w-full md:w-52 flex-col">
                <label for="height">height</label>
                <input
                  type="number"
                  name="height"
                  id="height"
                  className="bg-gray-200 rounded p-2 outline-none"
                  placeholder="In Kg"
                />
              </div>
              <div className="flex w-full md:w-52 flex-col">
                <label for="age">age</label>
                <input
                  type="number"
                  name="age"
                  id="age"
                  className="bg-gray-200 rounded p-2 outline-none"
                  placeholder="In Kg"
                />
              </div>
              <div className="flex w-full md:w-52 flex-col">
                <label for="gender">gender</label>
                <select
                  name="gender"
                  id="gender"
                  className="bg-gray-200 rounded outline-none w-full md:w-52 p-2"
                >
                  <option value="male">Male</option>
                  <option value="female">FemMale</option>
                  <option value="others">Others</option>
                </select>
              </div>
              <textarea
                name=""
                rows="4"
                className="resize-y rounded-md w-full my-2 bg-gray-200 outline-none p-2"
                placeholder="Tell us about your medical conditions, if any."
              ></textarea>
              <div className="flex justify-end p-2 w-full">
                <button
                  type="submit"
                  className="bg-primary-500 px-5 py-2 rounded-md text-white hover:bg-primary-600 duration-300"
                >
                  Submit
                </button>
              </div>
            </div>
          </form>
        </div>
      </Modal>
    </div>
  );
};
