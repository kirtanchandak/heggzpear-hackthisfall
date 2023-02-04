import React, { useEffect } from "react";
import Modal from "react-modal";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as yup from "yup";
import { getQuery } from "../../Services/Queries";
import { Close } from "../../icons/Close";

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

const submitSchema = yup.object().shape({
  weight: yup.number().required(),
  height: yup.number().required(),
  age: yup.number().required(),
  gender: yup.string().required(),
  diet: yup.string().required(),
  addiction: yup.string().required(),
  pressure: yup.string().required(),
  dob: yup.date().required(),
});

export const DetailModal = ({ isopenModal }) => {
  let subtitle;
  const [modalIsOpen, setIsOpen] = React.useState(isopenModal);

  const [diets, setDiets] = React.useState(null);
  function openModal() {
    setIsOpen(true);
  }

  useEffect(() => {
    const getData = getQuery();
    getData.then(
      function (response) {
        setDiets(response);
      },
      function (error) {
        console.log(error);
      }
    );
    openModal();
  }, []);

  function afterOpenModal() {
    subtitle.style.color = "#f00";
  }

  function closeModal() {
    setIsOpen(false);
  }

  return (
    <div
      className={`${
        modalIsOpen && isopenModal ? "bg-gray-500 h-screen w-full" : ""
      }`}
    >
      <Modal
        isOpen={modalIsOpen && isopenModal}
        onAfterOpen={afterOpenModal}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
      >
        <div className="w-full h-auto p-4 divide-y-2">
          <div className="flex  items-center justify-between text-lg text-gray-400  p-4">
            <h2>Your Diet</h2>
            <button onClick={closeModal}>
              <Close className="text-2xl hover:text-black cursor-pointer" />
            </button>
          </div>
          <div className="py-4 px-4">
            {diets ? (
              <ul>
                {Object.keys(diets.documents).map((item, index) => (
                  <li key={index}>{diets.documents[index].desciption}</li>
                ))}
              </ul>
            ) : (
              ""
            )}
          </div>
        </div>
      </Modal>
    </div>
  );
};
