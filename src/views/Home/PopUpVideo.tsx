import React from "react";
import ModalVideo from "react-modal-video";

interface IProps {
  isOpen: boolean;
  setVideoOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const PopUpVideo = ({ isOpen, setVideoOpen }: IProps) => {
  return (
    <div className="absolute z-30 shadow-card">
      <ModalVideo
        channel="youtube"
        isOpen={isOpen}
        videoId="2-Ra-dvRTgk"
        onClose={() => setVideoOpen(false)}
      />
    </div>
  );
};

export default PopUpVideo;
