import { getQuery } from "../Services/Queries";
import { useEffect, useState } from "react";
import React from "react";
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

function Result() {
  const [data, setData] = useState(null);
  useEffect(() => {
    const getData = getQuery();
    getData.then(
      function (response) {
        setData(response);
      },
      function (error) {
        console.log(error);
      }
    );
  }, []);

  //Modal -
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

  return data ? (
    <div>
      <div className={`${modalIsOpen ? "bg-gray-500 h-screen w-full" : ""}`}>
        <Modal
          isOpen={modalIsOpen}
          onAfterOpen={afterOpenModal}
          onRequestClose={closeModal}
          style={customStyles}
          contentLabel="Example Modal"
        >
          <div className="w-full h-[500px] md:h-auto">
            <p className="border-b border-black p-5 mt-1">
              <ul>
                {Object.keys(data.documents).map((item, index) => (
                  <li key={index}>{data.documents[index].desciption}</li>
                ))}
              </ul>
            </p>
          </div>
        </Modal>
      </div>
    </div>
  ) : (
    <div>Fetching</div>
  );
}

export default Result;
