import React from "react";
import { FaEnvelope, FaMapMarker, FaPhone } from "react-icons/fa";

export interface Link  {
  name: string;
  link: string;
  icon?: string;
};

type ItemProps = {
  Links: Link[];
  title: string;
  icon?: string;
};


const Item = ({ Links, title, icon }: ItemProps) => {
  const iconStyle = { width: "20px", height: "20px" };
  const getIconComponent = (icon: any) => {
    switch (icon) {
      case "mail":
        return (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="15"
            viewBox="0 0 20 15"
            fill="none"
            style={iconStyle}
          >
            <path
              d="M18.3334 2.94922V11.2826C18.3334 11.8351 18.1139 12.365 17.7232 12.7557C17.3325 13.1464 16.8026 13.3659 16.2501 13.3659H3.75008C3.19755 13.3659 2.66764 13.1464 2.27694 12.7557C1.88624 12.365 1.66675 11.8351 1.66675 11.2826V2.94922"
              stroke="#fff"
              stroke-width="1.4"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M18.3334 2.94954C18.3334 2.39701 18.1139 1.86711 17.7232 1.47641C17.3325 1.0857 16.8026 0.866211 16.2501 0.866211H3.75008C3.19755 0.866211 2.66764 1.0857 2.27694 1.47641C1.88624 1.86711 1.66675 2.39701 1.66675 2.94954L8.89591 7.46343C9.22702 7.67038 9.60962 7.7801 10.0001 7.7801C10.3905 7.7801 10.7731 7.67038 11.1042 7.46343L18.3334 2.94954Z"
              stroke="#fff"
              stroke-width="1.4"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        );
      case "phone":
        return (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="19"
            viewBox="0 0 20 19"
            fill="none"
            style={iconStyle}
          >
            <path
              d="M12.2529 17.3851L12.262 17.3915C13.049 17.8926 13.9835 18.1102 14.911 18.0084C15.8384 17.9065 16.7034 17.4913 17.3629 16.8313L17.9359 16.2584C18.0628 16.1315 18.1635 15.9808 18.2323 15.815C18.301 15.6492 18.3364 15.4714 18.3364 15.2919C18.3364 15.1124 18.301 14.9347 18.2323 14.7688C18.1635 14.603 18.0628 14.4524 17.9359 14.3255L15.5193 11.9107C15.3924 11.7838 15.2417 11.683 15.0759 11.6143C14.9101 11.5456 14.7324 11.5102 14.5529 11.5102C14.3734 11.5102 14.1956 11.5456 14.0298 11.6143C13.864 11.683 13.7133 11.7838 13.5864 11.9107C13.3302 12.1669 12.9827 12.3108 12.6204 12.3108C12.2581 12.3108 11.9107 12.1669 11.6544 11.9107L7.79048 8.04586C7.53433 7.78963 7.39044 7.44217 7.39044 7.07987C7.39044 6.71757 7.53433 6.3701 7.79048 6.11388C7.91745 5.987 8.01817 5.83633 8.08689 5.67051C8.1556 5.50468 8.19097 5.32694 8.19097 5.14744C8.19097 4.96794 8.1556 4.79019 8.08689 4.62437C8.01817 4.45854 7.91745 4.30788 7.79048 4.18099L5.37482 1.76625C5.1186 1.51011 4.77114 1.36621 4.40884 1.36621C4.04654 1.36621 3.69907 1.51011 3.44285 1.76625L2.86899 2.33919C2.20914 2.99883 1.79408 3.86385 1.69239 4.79131C1.5907 5.71878 1.80847 6.65318 2.30971 7.44012L2.31518 7.44923C4.96236 11.3658 8.3358 14.7386 12.2529 17.3851V17.3851Z"
              stroke="white"
              stroke-width="1.4"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        );
      case "map-marker":
        return (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="19"
            viewBox="0 0 16 19"
            fill="none"
          >
            <path
              d="M14.8609 8.65577C14.8609 14.0346 9.35174 17.3484 8.20685 17.9795C8.14342 18.0145 8.07217 18.0329 7.99974 18.0329C7.9273 18.0329 7.85605 18.0145 7.79263 17.9795C6.64688 17.3484 1.1394 14.0346 1.1394 8.65577C1.1394 4.36779 3.71219 1.36621 8.00016 1.36621C12.2881 1.36621 14.8609 4.36779 14.8609 8.65577Z"
              stroke="#fff"
              stroke-width="1.4"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M4.56982 8.22726C4.56982 9.13705 4.93124 10.0096 5.57456 10.6529C6.21788 11.2962 7.09041 11.6576 8.0002 11.6576C8.91 11.6576 9.78253 11.2962 10.4258 10.6529C11.0692 10.0096 11.4306 9.13705 11.4306 8.22726C11.4306 7.31746 11.0692 6.44493 10.4258 5.80161C9.78253 5.15829 8.91 4.79688 8.0002 4.79688C7.09041 4.79688 6.21788 5.15829 5.57456 5.80161C4.93124 6.44493 4.56982 7.31746 4.56982 8.22726V8.22726Z"
              stroke="#fff"
              stroke-width="1.4"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        );
      default:
        return null;
    }
  };
  return (
    <ul>
      <h1 className="mb-3 font-bold text-white">{title}</h1>
      {Links.map((link) => (
        <li key={link.name} className={`flex gap-3 text-sm mb-3 `}>
          {link.icon && getIconComponent(link.icon)}
          <a
            className={`text-white hover:text-purple-600 duration-300
            text-lg w-11/12  cursor-pointer leading-tight whitespace-nowrap `}
            href={link.link}
          >
            {link.name}
          </a>
        </li>
      ))}
    </ul>
  );
};

export default Item;
