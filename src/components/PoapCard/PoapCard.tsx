import React, { useState } from "react";
import { PoapModal } from "../PoapModal/PoapModal";

interface PoapCardProps {
  poap: {
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
  poapsDone: [] | undefined;
  index?: number;
}

export function PoapCard({ poap, poapsDone }: PoapCardProps) {
  const [isOpenModal, setIsOpenModal] = useState(false);

  const getOpenModal = (closedModal: boolean) => {
    setIsOpenModal(closedModal);
  };

  let isAchieved = poapsDone?.some((el: any) => el.event.id === poap.id);

  return (
    <div>
      <div
        className="border-2 border-studentsBlue-100 rounded-full p-2 h-28 w-28 flex justify-center items-center shadow-lg shadow-studentsBlue-100"
        onClick={() => setIsOpenModal(true)}
      >
        {isAchieved ? (
          <img src={poap.image_url} className="h-24 w-24 rounded-full" />
        ) : (
          <img
            src="./lockedPoap.svg"
            className="h-24 w-24 opacity-50 rounded-full "
          />
        )}
      </div>
      {isOpenModal && (
        <PoapModal
          data={poap}
          getOpenModal={getOpenModal}
          isAchieved={isAchieved}
        />
      )}
    </div>
  );
}
