import { Fragment, useState } from "react";
import { Dialog, Transition } from "@headlessui/react";

interface PoapModalProps {
  data: {
    id: number;
    name: string;
    description: string;
    city: string;
    country: string;
    image_url: string;
    year: number;
    to_achive_text: string;
    achived_text: string;
  };
  getOpenModal: (open: boolean) => void;
  isAchieved: boolean | undefined;
}

export function PoapModal({ data, getOpenModal, isAchieved }: PoapModalProps) {
  const [open, setOpen] = useState(true);

  return (
    <Transition.Root show={open} as={Fragment}>
      <Dialog
        as="div"
        className="relative z-10"
        onClose={() => {
          setOpen;
          getOpenModal(false);
        }}
      >
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
        </Transition.Child>

        <div className="fixed inset-0 z-10 overflow-y-auto">
          <div className="flex min-h-full items-end justify-center p-4 text-center items-center sm:p-0">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
              enterTo="opacity-100 translate-y-0 sm:scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 translate-y-0 sm:scale-100"
              leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
            >
              <Dialog.Panel className="relative transform overflow-hidden rounded-lg bg-white px-4 pt-5 pb-4 text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-sm sm:p-6">
                <div>
                  <div className="mt-3 text-center sm:mt-5">
                    {isAchieved ? (
                      <>
                        <Dialog.Title
                          as="h3"
                          className="text-lg font-medium leading-6 text-studentsBlue-100 mb-6"
                        >
                          Achievement Unlock
                        </Dialog.Title>
                        <img
                          src={data.image_url}
                          className="h-32 w-32 mx-auto mb-6"
                        />
                        <Dialog.Title
                          as="h3"
                          className="text-lg font-medium leading-6 text-gray-900"
                        >
                          {data.name}
                        </Dialog.Title>
                        <div className="mt-2">
                          <p className="text-sm text-gray-500">
                            {data.city}, {data.country} - {data.year}
                          </p>
                        </div>
                        <div className="mt-2">
                          <p className="text-sm text-black">
                            {data.achived_text}
                          </p>
                        </div>
                      </>
                    ) : (
                      <>
                        <Dialog.Title
                          as="h3"
                          className="text-lg font-medium leading-6 text-studentsBlue-100 mb-6"
                        >
                          Achievement Locked
                        </Dialog.Title>
                        <img
                          src={data.image_url}
                          className="h-32 w-32 mx-auto mb-6 opacity-40"
                        />
                        <Dialog.Title
                          as="h3"
                          className="text-lg font-medium leading-6 text-gray-900"
                        >
                          {data.name}
                        </Dialog.Title>
                        <div className="mt-2">
                          <p className="text-sm text-gray-500 mb-4">
                            {data.city}, {data.country} - {data.year}
                          </p>
                          <p className="text-sm text-black">
                            {data.to_achive_text}
                          </p>
                        </div>
                      </>
                    )}
                  </div>
                </div>
                <div className="mt-5 sm:mt-6 flex justify-center">
                  <button
                    type="button"
                    className="inline-flex w-2/3 justify-center rounded-md border border-transparent bg-studentsBlue-100 px-4 py-2 text-base font-medium text-white shadow-sm hover:bg-studentsBlue-200 focus:outline-none  sm:text-sm"
                    onClick={() => {
                      setOpen(false);
                      getOpenModal(false);
                    }}
                  >
                    Return
                  </button>
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition.Root>
  );
}
