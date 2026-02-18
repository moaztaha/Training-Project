import type { ComponentProps } from "react";
import { Icon } from "@iconify/react";
type IconProps = Omit<ComponentProps<typeof Icon>, "icon">;

const FaLinkedinIn = (props: IconProps) => (
  <Icon icon="mdi:linkedin" {...props} />
);
const FaXTwitter = (props: IconProps) => <Icon icon="mdi:twitter" {...props} />;
const IoCall = (props: IconProps) => <Icon icon="mdi:phone" {...props} />;
const MdEmail = (props: IconProps) => <Icon icon="mdi:email" {...props} />;

import { Moon, Sun, User } from "lucide-react";

export { Moon, Sun, User, FaLinkedinIn, FaXTwitter, IoCall, MdEmail };
