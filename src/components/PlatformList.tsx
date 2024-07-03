import {
  FaPlaystation,
  FaXbox,
  FaWindows,
  FaLinux,
  FaApple,
} from "react-icons/fa";
import { DiAndroid } from "react-icons/di";
import { BsNintendoSwitch } from "react-icons/bs";

const platformIcons: any = {
  playstation: <FaPlaystation />,
  xbox: <FaXbox />,
  pc: <FaWindows />,
  linux: <FaLinux />,
  mac: <FaApple />,
  android: <DiAndroid />,
  nintendo: <BsNintendoSwitch />,
};

import { platform } from "../hooks/useGames";
interface Props {
  list: { platform: platform }[];
}

const PlatformList = ({ list }: Props) => {
  return (
    <div className="flex justify-start items-center gap-x-2 mb-2">
      {list.map(({ platform }) => (
        <div key={platform.id} className="text-lg">
          {platformIcons[platform.slug]}
        </div>
      ))}
    </div>
  );
};

export default PlatformList;
