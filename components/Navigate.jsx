import React, { useState } from "react";
import {
  FaMapMarkerAlt,
  FaHome,
  FaUser,
  FaBriefcase,
  FaCog,
  FaHeart,
  FaInfoCircle,
} from "react-icons/fa";
import { motion } from "framer-motion";
import Image from "next/image";

const icons = [
  { id: 1, component: <FaHome size={30} color="#003a56" />, label: "Home" },
  { id: 2, component: <FaUser size={30}   color="#003a56"/>, label: "Profile" },
  { id: 3, component: <FaBriefcase size={30}  color="#003a56" />, label: "Work" },
  { id: 4, component: <FaCog size={30}   color="#003a56"/>, label: "Settings" },
  { id: 5, component: <FaHeart size={30}  color="#003a56"  />, label: "Favorites" },
  { id: 6, component: <FaInfoCircle size={30}  color="#003a56"/>, label: "Info" },
];

function Navigate() {
  const [showIcons, setShowIcons] = useState(false);
  const [selectedIcon, setSelectedIcon] = useState(null);

  const handleClickMapIcon = () => {
    setShowIcons(!showIcons);
  };

  const handleClickIcon = (icon) => {
    setSelectedIcon(icon);
  };

  const getRotationAngle = (icon) => {
    const index = icons.findIndex((i) => i.id === icon.id);
    const angle = (360 / icons.length  + 4) * index;
    return angle;
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-[300px] bg-gray-100">
      <div className="relative flex items-center justify-center">
        <motion.div
          className="relative flex items-center justify-center w-24 h-24 rounded-full cursor-pointer z-20"
          onClick={handleClickMapIcon}
          animate={{
            rotate: selectedIcon ? getRotationAngle(selectedIcon) : 46,
          }}
          transition={{ duration: 0.5 }}
        >
          <Image
            alt="compass"
            src={"/compass.png"}
            width={100}
            height={100}
            priority
          />
         
        </motion.div>
        {showIcons && (
          <div className="absolute w-64 h-64 flex justify-center items-center">
            {icons.map((icon, index) => {
              const angle = (360 / icons.length) * index;
              const x = 100 * Math.cos((angle * Math.PI) / 180);
              const y = 100 * Math.sin((angle * Math.PI) / 180);
              return (
                <motion.div
                  key={icon.id}
                  className="absolute flex flex-col items-center rounded-lg cursor-pointer shadow-lg"
                  style={{
                    top: `calc(50% + ${y}px - 20px)`,
                    left: `calc(53% + ${x}px - 20px)`,
                  }}
                  whileHover={{ scale: 1.8 }}
                  onClick={() => handleClickIcon(icon)}
                >
                  {icon.component}
                </motion.div>
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
}

export default Navigate;
