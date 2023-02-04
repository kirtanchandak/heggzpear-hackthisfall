import React, { useEffect } from "react";
import Modal from "react-modal";
import { DetailModal } from "./DetailModal";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as yup from "yup";

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

export const FormModal = () => {
  let subtitle;
  const [modalIsOpen, setIsOpen] = React.useState(false);
  const [opendetail, setOpenDetail] = React.useState(false);
  const [click, setclick] = React.useState(false);

  function openModal() {
    setIsOpen(true);
  }

  useEffect(() => {
    openModal();
  }, []);

  function handleOpenDetail() {
    setOpenDetail(true);
  }

  function afterOpenModal() {
    // references are now sync'd and can be accessed.
    subtitle.style.color = "#f00";
  }

  function closeModal() {
    setIsOpen(false);
  }

  return (
    <>
      <DetailModal isopenModal={opendetail} />
      <div className={`${modalIsOpen ? "bg-gray-500 h-screen w-full" : ""}`}>
        <Modal
          isOpen={modalIsOpen}
          onAfterOpen={afterOpenModal}
          onRequestClose={closeModal}
          style={customStyles}
          contentLabel="Example Modal"
        >
          <div className="w-full h-[500px] md:h-[550px]">
            <p className="border-b border-black p-5 mt-1">
              Based on the inputs below we will recommend you some best
              practices for your health. The recommendations provided are
              verified by the doctors. Feel free to provide the inputs. All the
              data provided will be safe.
            </p>
            <Formik
              initialValues={{
                weight: "",
                height: "",
                age: "",
                gender: "",
                diet: "",
                addiction: "",
                pressure: "",
                dob: "",
              }}
              validationSchema={submitSchema}
              onSubmit={(values) => {
                console.log(values);
                handleOpenDetail();
                closeModal();
              }}
            >
              {({ errors, touched, values, handleChange }) => (
                <Form className="p-4 space-y-4">
                  <div className="flex flex-wrap justify-evenly md:space-x-2">
                    <div className="flex w-full md:w-52 flex-col">
                      <label htmlFor="weight">weight</label>
                      <Field
                        type="number"
                        name="weight"
                        id="weight"
                        className="bg-gray-200 rounded p-2 outline-none"
                        placeholder="In Kg"
                      />
                      <ErrorMessage
                        component="div"
                        name="weight"
                        className="invalid-feedback"
                      />
                    </div>
                    <div className="flex w-full md:w-52 flex-col">
                      <label htmlFor="height">height</label>
                      <Field
                        type="number"
                        name="height"
                        id="height"
                        className="bg-gray-200 rounded p-2 outline-none"
                        placeholder="In CM"
                      />
                      <ErrorMessage
                        component="div"
                        name="height"
                        className="invalid-feedback"
                      />
                    </div>
                    <div className="flex w-full md:w-52 flex-col">
                      <label htmlFor="age">age</label>
                      <Field
                        type="number"
                        name="age"
                        id="age"
                        className="bg-gray-200 rounded p-2 outline-none"
                        placeholder="22"
                      />
                      <ErrorMessage
                        component="div"
                        name="age"
                        className="invalid-feedback"
                      />
                    </div>
                    <div className="flex w-full md:w-52 flex-col">
                      <label htmlFor="gender">gender</label>
                      <select
                        name="gender"
                        id="gender"
                        value={values.gender}
                        className="bg-gray-200 rounded outline-none w-full md:w-52 p-2"
                        onChange={handleChange}
                      >
                        <option value="">--Select--</option>
                        <option value="male">Male</option>
                        <option value="female">Female</option>
                        <option value="others">Others</option>
                      </select>
                      <ErrorMessage
                        component="div"
                        name="gender"
                        className="invalid-feedback"
                      />
                    </div>
                  </div>
                  {/* ----------------------------------------------------------------------- */}
                  <div className="flex flex-wrap justify-evenly md:space-x-2">
                    <div className="flex w-full md:w-52 flex-col">
                      <label htmlFor="diet">Diet Type</label>
                      <select
                        name="diet"
                        id="diet"
                        value={values.diet}
                        className="bg-gray-200 rounded outline-none w-full md:w-52 p-2"
                        onChange={handleChange}
                      >
                        <option value="">--Select--</option>
                        <option value="veg">Male</option>
                        <option value="non-veg">Female</option>
                      </select>
                      <ErrorMessage
                        component="div"
                        name="diet"
                        className="invalid-feedback"
                      />
                    </div>
                    <div className="flex w-full md:w-52 flex-col">
                      <label htmlFor="addiction">Addiction</label>
                      <select
                        name="addiction"
                        id="addiction"
                        value={values.addiction}
                        className="bg-gray-200 rounded outline-none w-full md:w-52 p-2"
                        onChange={handleChange}
                      >
                        <option value="">--Select--</option>
                        <option value="alchohol">alchohol</option>
                      </select>
                      <ErrorMessage
                        component="div"
                        name="addiction"
                        className="invalid-feedback"
                      />
                    </div>
                    <div className="flex w-full md:w-52 flex-col">
                      <label htmlFor="pressure">Blood Pressure</label>
                      <select
                        name="pressure"
                        id="pressure"
                        value={values.pressure}
                        className="bg-gray-200 rounded outline-none w-full md:w-52 p-2"
                        onChange={handleChange}
                      >
                        <option value="">--Select--</option>
                        <option value="alchohol">alchohol</option>
                      </select>
                      <ErrorMessage
                        component="div"
                        name="pressure"
                        className="invalid-feedback"
                      />
                    </div>
                    <div className="flex w-full md:w-52 flex-col">
                      <label htmlFor="dob">Date Of Birth</label>
                      <Field
                        type="date"
                        name="dob"
                        id="dob"
                        className="bg-gray-200 rounded p-2 outline-none"
                        placeholder="In Kg"
                      />
                      <ErrorMessage
                        component="div"
                        name="dob"
                        className="invalid-feedback"
                      />
                    </div>
                    <div className="w-full">
                      <textarea
                        name=""
                        placeholder="Tell us about your medical condition"
                        id=""
                        className="w-full outline-none my-4 rounded bg-gray-200 p-3"
                        cols="30"
                        rows="4"
                      ></textarea>
                    </div>

                    <div className="flex justify-end p-2 w-full">
                      <button
                        type="submit"
                        className="bg-primary-500 px-5 py-2 rounded-md text-white hover:bg-primary-600 duration-300"
                      >
                        Submit
                      </button>
                    </div>
                  </div>
                </Form>
              )}
            </Formik>
          </div>
        </Modal>
      </div>
    </>
  );
};
