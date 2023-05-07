import React, {useState} from 'react'
import { Modal } from "react-responsive-modal";
import Profile from "./Profile/Profile" 
import CloseIcon from "@mui/icons-material/Close";
import Avatar from "@mui/material/Avatar";
import user from "./img/user.jpg";
function Avatarmodal() {
    const [isModalOpen, setIsModalOpen] = useState(false);
      const Close = <CloseIcon />;
  return (
    <div>
      <Avatar src={user} onClick={() => setIsModalOpen(true)}/>
          <Modal
          open={isModalOpen}
          CloseIcon={Close}
          onClose={() => setIsModalOpen(false)}
          closeOnEsc
          center
          closeOnOverlayClick={false}
          styles={{
            overlay: {
              height: "auto",
            }, 
            borderRadius: "50px"
          }}
          ><Profile /></Modal>
    </div>
  )
}

export default Avatarmodal
