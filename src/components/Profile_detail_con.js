import React from 'react'
import { motion } from "framer-motion";
import {
    MdFastfood,
    MdCloudUpload,
    MdDelete,
    MdFoodBank,
    MdAttachMoney,
} from "react-icons/md";

const Profile_detail_con = () => {
    return (
        <div className='w-full h-full align-middlen justify-center'>
            
                    <div className="w-full min-h-screen flex items-center justify-center">
                        <div className="w-[90%] md:w-[50%] border border-gray-300 rounded-lg p-4 flex flex-col items-center justify-center gap-4">

                            <motion.p
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                exit={{ opacity: 0 }}
                                className={`w-full p-2 rounded-lg text-center text-lg font-semibold 
               "bg-red-400 text-red-800"
                : "bg-emerald-400 text-emerald-800"
            }`}
                            >

                            </motion.p>


                            <div className="w-full py-2 border-b border-gray-300 flex items-center gap-2">
                                <MdFastfood className="text-xl text-gray-700" />
                                <input
                                    type="text"
                                    required
                                    placeholder="Give me a title..."
                                    className="w-full h-full text-lg bg-transparent outline-none border-none placeholder:text-gray-400 text-textColor"
                                />
                            </div>

                            <div className="w-full">
                                <select

                                    className="outline-none w-full text-base border-b-2 border-gray-200 p-2 rounded-md cursor-pointer"
                                >
                                    <option value="other" className="bg-white">
                                        Select Category
                                    </option>

                                    <option
                                        className="text-base border-0 outline-none capitalize bg-white text-headingColor"
                                    >
                                    </option>

                                </select>
                            </div>

                            <div className="group flex justify-center items-center flex-col border-2 border-dotted border-gray-300 w-full h-225 md:h-340 cursor-pointer rounded-lg">


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

                                            className="w-0 h-0"
                                        />
                                    </label>
                                </>

                                <>
                                    <div className="relative h-full">
                                        <img

                                            alt="uploaded image"
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

                            </div>

                            <div className="w-full flex flex-col md:flex-row items-center gap-3">
                                <div className="w-full py-2 border-b border-gray-300 flex items-center gap-2">
                                    <MdFoodBank className="text-gray-700 text-2xl" />
                                    <input
                                        type="text"
                                        required
                                        placeholder="Calories"
                                        className="w-full h-full text-lg bg-transparent outline-none border-none placeholder:text-gray-400 text-textColor"
                                    />
                                </div>

                                <div className="w-full py-2 border-b border-gray-300 flex items-center gap-2">
                                    <MdAttachMoney className="text-gray-700 text-2xl" />
                                    <input
                                        type="text"
                                        required
                                        placeholder="Price"
                                        className="w-full h-full text-lg bg-transparent outline-none border-none placeholder:text-gray-400 text-textColor"
                                    />
                                </div>
                            </div>

                            <div className="flex items-center w-full">
                                <button
                                    type="button"
                                    className="ml-0 md:ml-auto w-full md:w-auto border-none outline-none bg-emerald-500 px-12 py-2 rounded-lg text-lg text-white font-semibold"
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