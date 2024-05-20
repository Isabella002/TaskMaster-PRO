import React from "react";
import { BiMessageAltDetail } from "react-icons/bi";
import { FaList } from "react-icons/fa";
import { MdAttachFile } from "react-icons/md";

const TaskAssets = ({ activities, assets, subTasks }) => {
  return (
    <div className='flex items-center gap-3'>
      <div className='flex gap-1 items-center text-sm text-[#97C1A9]'>
        <BiMessageAltDetail />
        <span>{activities}</span>
      </div>
      <div className='flex gap-1 items-center text-sm text-[#97C1A9]'>
        <MdAttachFile />
        <span>{assets}</span>
      </div>
      <div className='flex gap-1 items-center text-sm text-[#97C1A9]'>
        <FaList />
        <span>0/{subTasks}</span>
      </div>
    </div>
  );
};

export default TaskAssets;
