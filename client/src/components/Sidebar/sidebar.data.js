import { FiUsers } from "react-icons/fi"
import { BiUserPlus, BiSolidUserCircle } from "react-icons/bi"
import { BsHouseAddFill } from "react-icons/bs"
import { RiReservedLine } from "react-icons/ri"
import { CiLogout } from "react-icons/ci"
import { MdOutlineSpaceDashboard, MdOutlineTour } from "react-icons/md"

export const sidebarNavData = [
   { title: "داشبورد", path: "/admin", icon: MdOutlineSpaceDashboard },
   { title: "کاربران", path: "/admin/users/list", icon: FiUsers },
   { title: "ساخت حساب کاربر", path: "/admin/users/new", icon: BiUserPlus },
   { title: "پروفایل من", path: "/admin/profile", icon: BiSolidUserCircle },
   { title: "تورها و سفر ها", path: "/admin/tours/list", icon: MdOutlineTour },
   { title: "افزودن تور", path: "/admin/tours/add", icon: BsHouseAddFill },
   { title: "رزور ها", path: "/admin/reserves/list", icon: RiReservedLine },
   { title: "خروج از حساب", path: "/logout", icon: CiLogout },
]