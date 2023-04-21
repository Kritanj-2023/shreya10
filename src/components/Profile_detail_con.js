import React, { useState, useRef } from 'react'
import { motion } from "framer-motion";
import {
  MdFastfood,
  MdCloudUpload,
  MdDelete,
  MdFoodBank,
  MdAttachMoney,
} from "react-icons/md";
import { firestore } from '../firestore';
import { addDoc, collection } from '@firebase/firestore'
import { useStateValue } from "../context/StateProvider";
import { deleteObject, getDownloadURL, ref, uploadBytesResumable } from 'firebase/storage'
import { storage } from "../firestore";
import Loader from "./Loader";
import { saveItem } from '../utils/firebaseFunctions';
import { getAllDetails } from "../utils/firebaseFunctions";

import { actionType } from "../context/reducer";

const Profile_detail_con = () => {

  const [name, setName] = useState("");
  const [passout_year, setPassout_year] = useState("");
  const [branch, setBranch] = useState("");
  const [Job_deatils, set_JobDetails] = useState("");
  const [Job_offer, set_JobOffer] = useState("");
  const [imageAsset, setImageAsset] = useState(null);
  const [fields, setFields] = useState(false);
  const [alertStatus, setAlertStatus] = useState("danger");
  const [msg, setMsg] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [{ details }, dispatch] = useStateValue();

  

  const uploadImage = (e) => {
    setIsLoading(true);
    const imageFile = e.target.files[0];
    const storageRef = ref(storage, `images/${Date.now()}-${imageFile.name}`);
    const uploadTask = uploadBytesResumable(storageRef, imageFile);

    uploadTask.on(
      "state_changed",
      (snapshot) => {
        const uploadProgress =
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
      },
      (error) => {
        console.log(error);
        setFields(true);
        setMsg("Error while uploading : Try AGain 🙇");
        setAlertStatus("danger");
        setTimeout(() => {
          setFields(false);
          setIsLoading(false);
        }, 4000);
      },
      () => {
        getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
          setImageAsset(downloadURL);
          setIsLoading(false);
          setFields(true);
          setMsg("Image uploaded successfully 😊");
          setAlertStatus("success");
          setTimeout(() => {
            setFields(false);
          }, 4000);
        });
      }
    );
  }

  const saveDetails = () => {
    setIsLoading(true);
    try {
      if (!name || !passout_year || !imageAsset || !branch || !Job_deatils) {
        setFields(true);
        setMsg("Required fields can't be empty");
        setAlertStatus("danger");
        setTimeout(() => {
          setFields(false);
          setIsLoading(false);
        }, 4000);
      } else {
        const data = {
          id: `${Date.now()}`,
          name: name,
          imageURL: imageAsset,
          passout_year: passout_year,
          branch: branch,
          Job_offer: Job_offer,
          Job_deatils: Job_deatils,
        };
        saveItem(data);
        setIsLoading(false);
        setFields(true);
        setMsg("Data Uploaded successfully 😊");
        clearData();
        setAlertStatus("success");
        setTimeout(() => {
          setFields(false);
        }, 4000);

      }
    } catch (error) {
      console.log(error);
      setFields(true);
      setMsg("Error while uploading : Try AGain 🙇");
      setAlertStatus("danger");
      setTimeout(() => {
        setFields(false);
        setIsLoading(false);
      }, 4000);
    }
    fetchData();

  };

  const clearData = () => {
    setName("");
    setImageAsset(null);
    setPassout_year("");
    setBranch("");
    set_JobDetails("");
    set_JobOffer("");
  };

  const deleteImage = () => {
    setIsLoading(true);
    const deleteRef = ref(storage, imageAsset);
    deleteObject(deleteRef).then(() => {
      setImageAsset(null);
      setIsLoading(false);
      setFields(true);
      setMsg("Image deleted successfully 😊");
      setAlertStatus("success");
      setTimeout(() => {
        setFields(false);
      }, 4000);
    });
  };


  const fetchData = async () => {
    await getAllDetails().then((data) => {
      dispatch({
        type: actionType.SET_DETAILS,
        details: data,
      });
    });
  };



  return (
    <div className='w-full h-full align-middlen justify-center'>

      <div className="w-full min-h-screen flex items-center justify-center">
        <div className="w-[90%] md:w-[50%] border border-gray-300 rounded-lg p-4 flex flex-col items-center justify-center gap-4">
          {fields && (
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className={`w-full p-2 rounded-lg text-center text-lg font-semibold ${alertStatus === "danger"
                ? "bg-red-400 text-red-800"
                : "bg-emerald-400 text-emerald-800"
                }`}
            >
              {msg}
            </motion.p>
          )}


          <div className="w-full py-2 border-b border-gray-300 flex items-center gap-2">

            <input
              type="text"
              required
              placeholder="Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full h-full text-lg bg-transparent outline-none border-none placeholder:text-gray-400 text-textColor"
            />
          </div>

          <div className="w-full py-2 border-b border-gray-300 flex items-center gap-2">

            <input
              type="text"
              required
              placeholder="pass-out year"
              value={passout_year}
              onChange={(e) => setPassout_year(e.target.value)}
              className="w-full h-full text-lg bg-transparent outline-none border-none placeholder:text-gray-400 text-textColor"
            />
          </div>

          <div className="w-full py-2 border-b border-gray-300 flex items-center gap-2">

            <input
              type="text"
              required
              placeholder="Branch"
              value={branch}
              onChange={(e) => setBranch(e.target.value)}
              className="w-full h-full text-lg bg-transparent outline-none border-none placeholder:text-gray-400 text-textColor"
            />
          </div>

          <div className="w-full py-2 border-b border-gray-300 flex items-center gap-2">

            <input
              type="text"
              value={Job_deatils}
              onChange={(e) => set_JobDetails(e.target.value)}
              placeholder="Job details"
              required
              className="w-full h-full text-lg bg-transparent outline-none border-none placeholder:text-gray-400 text-textColor"
            />
          </div>

          <div className="w-full py-2 border-b border-gray-300 flex items-center gap-2">

            <input
              type="text"
              value={Job_offer}
              onChange={(e) => set_JobOffer(e.target.value)}
              placeholder="Job offer/offers"
              className="w-full h-full text-lg bg-transparent outline-none border-none placeholder:text-gray-400 text-textColor"
            />
          </div>



          {/* <div className="group flex justify-center items-center flex-col border-2 border-dotted border-gray-300 w-full h-225 md:h-340 cursor-pointer rounded-lg">


                        <>
                            <label className="w-full h-full flex flex-col items-center justify-center cursor-pointer">
                                <div className="w-full h-full flex flex-col items-center justify-center gap-2">
                                    <MdCloudUpload className="text-gray-500 text-3xl hover:text-gray-700" />
                                    <p className="text-gray-500 hover:text-gray-700">
                                        Click here to upload
                                    </p>
                                </div>
                                <input
                                    type="file"
                                    name="uploadimage"
                                    accept="image/*"
                                    onChange={uploadImage}
                                    className="w-0 h-0"
                                />
                            </label>
                        </>

                        <>
                            <div className="relative h-full">
                                <img

                                    // upload image
                                    className="w-full h-full object-cover"
                                />
                                <button
                                    type="button"
                                    className="absolute bottom-3 right-3 p-3 rounded-full bg-red-500 text-xl cursor-pointer outline-none hover:shadow-md  duration-500 transition-all ease-in-out"

                                >
                                    <MdDelete className="text-white" />
                                </button>
                            </div>
                        </>

                    </div> */}


          <div className="group flex justify-center items-center flex-col border-2 border-dotted border-gray-300 w-full h-225 md:h-340 cursor-pointer rounded-lg">
            {isLoading ? (
              <Loader />
            ) : (
              <>
                {!imageAsset ? (
                  <>
                    <label className="w-full h-full flex flex-col items-center justify-center cursor-pointer">
                      <div className="w-full h-full flex flex-col items-center justify-center gap-2">
                        <MdCloudUpload className="text-gray-500 text-3xl hover:text-gray-700" />
                        <p className="text-gray-500 hover:text-gray-700">
                          Click here to upload
                        </p>
                      </div>
                      <input
                        type="file"
                        name="uploadimage"
                        accept="image/*"
                        onChange={uploadImage}
                        className="w-0 h-0"
                      />
                    </label>
                  </>
                ) : (
                  <>
                    <div className="relative h-full">
                      <img
                        src={imageAsset}
                        alt="uploaded image"
                        className="w-full h-full object-cover"
                      />
                      <button
                        type="button"
                        className="absolute bottom-3 right-3 p-3 rounded-full bg-red-500 text-xl cursor-pointer outline-none hover:shadow-md  duration-500 transition-all ease-in-out"
                        onClick={deleteImage}
                      >
                        <MdDelete className="text-white" />
                      </button>
                    </div>
                  </>
                )}
              </>
            )}
          </div>



          <div className="flex items-center w-full">
            <button
              type="button"
              className="ml-0 md:ml-auto w-full md:w-auto border-none outline-none bg-emerald-500 px-12 py-2 rounded-lg text-lg text-white font-semibold"
              onClick={saveDetails}
            >
              Save
            </button>
          </div>
        </div>
      </div>

    </div>


  )
}

export default Profile_detail_con