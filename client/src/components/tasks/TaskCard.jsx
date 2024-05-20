import clsx from "clsx";
import React, { useState } from "react";
import { IoMdAdd } from "react-icons/io";
import {
  MdKeyboardArrowDown,
  MdKeyboardArrowUp,
  MdKeyboardDoubleArrowUp,
} from "react-icons/md";
import { useSelector } from "react-redux";
import {
  BGS,
  PRIOTITYSTYELS,
  TASK_TYPE,
  formatDate,
} from "../../utils/index.js";
import UserInfo from "../UserInfo.jsx";
import { AddSubTask, TaskAssets, TaskColor, TaskDialog } from "./index";

const ICONS = {
  high: <MdKeyboardDoubleArrowUp />,
  medium: <MdKeyboardArrowUp />,
  low: <MdKeyboardArrowDown />,
};

const TaskCard = ({ task }) => {
  const { user } = useSelector((state) => state.auth);
  const [open, setOpen] = useState(false);

  return (
    <>
      <div className='w-full h-fit bg-white dark:bg-[#1f1f1f] shadow-md p-4 rounded'>
        <div className='w-full flex justify-between'>
          <div
            className={clsx(
              "flex flex-1 gap-1 items-center text-sm font-medium",
              PRIOTITYSTYELS[task?.priority]
            )}
          >
            <span className='text-lg'>{ICONS[task?.priority]}</span>
            <span className='uppercase'>{task?.priority} Priority</span>
          </div>
          <TaskDialog task={task} />
          {/* {user.isAdmin && <TaskDialog task={task} />} */}
        </div>
        <>
          <div className='flex items-center gap-2'>
            <TaskColor className={TASK_TYPE[task.stage]} />
            <h4 className='text- line-clamp-1 text-black dark:text-white'>
              {task?.title}
            </h4>
          </div>
          <span className='text-sm text-[#97C1A9]'>
            {formatDate(new Date(task?.date))}
          </span>
        </>

        <div className='w-full border-t border-[#97C1A9] my-2' />
        <div className='flex items-center justify-between mb-2'>
          <TaskAssets
            activities={task?.activities?.length}
            subTasks={task?.subTasks?.length}
            assets={task?.assets?.length}
          />

          <div className='flex flex-row-reverse'>
            {task?.team?.length > 0 &&
              task?.team?.map((m, index) => (
                <div
                  key={index}
                  className={clsx(
                    "w-7 h-7 rounded-full text-white flex items-center justify-center text-sm -mr-1",
                    BGS[index % BGS?.length]
                  )}
                >
                  <UserInfo user={m} />
                </div>
              ))}
          </div>
        </div>

        {/* subtasks */}
        {task?.subTasks?.length > 0 ? (
          <div className='py-4 border-t border-[#97C1A9]'>
            <h5 className='text-base line-clamp-1 text-black dark:text-[#97C1A9]'>
              {task?.subTasks[0].title}
            </h5>

            <div className='p-4 space-x-8'>
              <span className='text-sm text-[#97C1A9]'>
                {formatDate(new Date(task?.subTasks[0]?.date))}
              </span>
              <span className='bg-[#8FCACA]/10 px-3 py-1 rounded-full text-[#8FCACA] font-medium'>
                {task?.subTasks[0]?.tag}
              </span>
            </div>
          </div>
        ) : (
          <div>
            <div className='py-4 border-t border-[#97C1A9]'>
              <span className='text-[#97C1A9]'>No Sub-Task</span>
            </div>
          </div>
        )}

        <div className='w-full pb-2'>
          <button
            disabled={user.isAdmin ? false : true}
            onClick={() => setOpen(true)}
            className='w-full flex gap-4 items-center text-sm text-[#97C1A9] font-semibold disabled:cursor-not-allowed disabled:text-gray-300'
          >
            <IoMdAdd className='text-lg' />
            <span>ADD SUBTASK</span>
          </button>
        </div>
      </div>

      <AddSubTask open={open} setOpen={setOpen} id={task._id} />
    </>
  );
};

export default TaskCard;
