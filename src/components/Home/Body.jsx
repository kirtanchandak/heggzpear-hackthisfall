import React from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/logo.svg";
import consultImg from "../../assets/consult-img.jpg";
import {Instagram} from "../../icons/Instagram"
import {Facebook} from "../../icons/Facebook"
import {Twitter} from "../../icons/Twitter"

export default function Header() {
  return (
    <>
      <div className="flex flex-col md:flex-row items-center space-y-5 w-full p-4">
        <div className="w-1/2 flex  items-center justify-center">
          <img src={logo} className="w-96 shadow-lg border rounded-full" />
        </div>
        <div className="w-full md:w-1/2">
          <div className="md:p-14">
            <h2 className="font-semibold text-2xl md:text-4xl my-2">
              Lorem Ipsum
            </h2>
            <p className="text-justify text-base md:text-lg text-gray-600">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book.
            </p>
            <button className="bg-primary-500 text-white my-3 p-2 px-9 hover:bg-primary-600 duration-300 rounded">
              Login
            </button>
          </div>
        </div>
      </div>
      <div className="ayurveda p-5 px-5 md:px-20">
        <h2 className="text-2xl md:text-4xl font-semibold my-5">
          What is Ayurveda ?
        </h2>
        <div className="space-y-3 text-justify md:text-base text-gray-600">
          <p>
            Ayurveda, a natural system of medicine, originated in India more
            than 3,000 years ago. The term Ayurveda is derived from the Sanskrit
            words ayur (life) and veda (science or knowledge). Thus, Ayurveda
            translates to knowledge of life. Based on the idea that disease is
            due to an imbalance or stress in a person's consciousness, Ayurveda
            encourages certain lifestyle interventions and natural therapies to
            regain a balance between the body, mind, spirit, and the
            environment.
          </p>
          <p>
            Ayurveda treatment starts with an internal purification process,
            followed by a special diet, herbal remedies, massage therapy, yoga,
            and meditation.
          </p>
          <p>
            Ayurveda, a natural system of medicine, originated in India more
            than 3,000 years ago. The term Ayurveda is derived from the Sanskrit
            words ayur (life) and veda (science or knowledge). Thus, Ayurveda
            translates to knowledge of life. Based on the idea that disease is
            due to an imbalance or stress in a person's consciousness, Ayurveda
            encourages certain lifestyle interventions and natural therapies to
            regain a balance between the body, mind, spirit, and the
            environment.
          </p>
          <p>
            Ayurveda treatment starts with an internal purification process,
            followed by a special diet, herbal remedies, massage therapy, yoga,
            and meditation.
          </p>
        </div>
        <button className="text-primary-500 border-2 p-2 px-4 hover:bg-primary-500 duration-300 hover:text-white my-3 rounded border-primary-500">
          Read More
        </button>
      </div>
      <div className="consultation  my-5 px-5 md:px-20">
        <h2 className="text-2xl md:text-4xl font-semibold my-5">
          Free Online Consultations
        </h2>
        <div className="flex flex-col md:flex-row">
          <div className="w-full md:w-1/2">
            <img src={consultImg} className="" alt="doctor_img" />
          </div>
          <div className="w-full md:w-1/2 md:text-lg md:px-5 md:y-2 text-gray-600">
            <p>
              Our well qualified Ayurvedic physicians (Vaidyas) will give their
              opinion based on the information provided. Sometimes you may be
              requested to furnish additional information. Some of the
              recommendations you receive may include the need for you to come
              to our centre for further evaluation and treatment. If your
              condition does not require for you to come to our centre you may
              be recommended some Ayurvedic treatment advice which may include
              ayurvedic preparations which you may order through us or buy it in
              your area.
            </p>
            <button className="bg-primary-500 p-2 rounded hover:bg-primary-600 duration-200 text-white my-2">
              Request Consultation{" "}
            </button>
          </div>
        </div>
      </div>
      {/*-----------------------------------------------------------Questions Part-------------------------------------------------  */}
      <div className="questions px-5 md:px-20 my-16">
        <div className="w-full">
          <h2 className="text-2xl md:text-4xl font-semibold">
            Frequently Asked Questions
          </h2>
          <p className="text-gray-600 md:w-1/2 md:text-lg my-1">
            Can’t find the answers you’re looking for? Please{" "}
            <a
              href="#"
              className="font-semibold hover:text-blue-600 hover:underline "
            >
              chat with our friendly team.
            </a>
          </p>
        </div>
        <div className="flex space-y-4  lg:space-x-4 lg:space-y-0 flex-col lg:flex-row my-6">
          <div className="lg:w-1/3">
              <h2 className="text-lg text-primary-800">Is there a free trial available?</h2>
              <p className="text-sm text-primary-500">Yes, you can try us for free for 30 days.</p>
          </div>
          <div className="lg:w-1/3">
              <h2 className="text-lg text-primary-800">Can I change my plan later?</h2>
              <p className="text-sm text-primary-500">Of Course, you can change your plan later.  Chat to our friendly team to find a solution that works for you.</p>
          </div>
          <div className="lg:w-1/3">
              <h2 className="text-lg text-primary-800">What is your cancellation policy</h2>
              <p className="text-sm text-primary-500">We understand that things change. You can cancel your plan at any time and we’ll refund you the difference already paid.</p>
          </div>
        </div>
        <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 justify-center border rounded md:justify-between p-3 px-7 items-center border-primary-500">
            <div>
              <h2 className="font-semibold text-center md:text-left">Still have questions?</h2>
              <p className="text-gray-500 text-center md:text-left">
              Can’t find the answers you’re looking for? Please <a href="#" className="underline">chat with our friendly team</a>.
              </p>
            </div>
            <div>
              <button className="bg-primary-500 hover:bg-primary-600 duration-300 text-white p-2 px-4 rounded">Get In Touch</button>
            </div>
        </div>
      </div>
      {/*-----------------------------------------------------------Questions Part-------------------------------------------------  */}
      <div className="flex flex-col p-5 md:px-20 bg-primary-500">
        <div>
          <div className="flex flex-col text-center w-full">
            <img src={logo} className="h-32 my-2" alt="ayurveda"/>
            <p className="text-white my-4">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
          </div>
          <div className="w-1/2 text-white">
            <h4>Follow Us On :</h4>

          </div>
        </div>
        <div className="flex text-gray-500 justify-between bg-white rounded w-full p-3">
          <h2 className="text-sm ">copyright 2023 | All rights reserved</h2>
          <h2 className="text-sm">v 1.0.0</h2>
        </div>
      </div>
    </>
  );
}
