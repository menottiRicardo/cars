import {
  HeartIcon,
  HomeIcon,
  PlusCircleIcon,
} from "@heroicons/react/24/outline";
import { useRouter } from "next/router";
import Link from "next/link";
const BottomTabs = () => {
  const router = useRouter();
  const pathname = router.pathname;
  return (
    <div className="btm-nav z-50 bg-base-100">
      <Link
        href={"/"}
        className={`${pathname === "/" ? "active text-primary-focus" : ""}`}
      >
        <HomeIcon className="w-6" />
        <span className="btm-nav-label">Inicio</span>
      </Link>
      <Link
        href={"/new"}
        className={`${pathname === "/new" ? "active text-primary-focus" : ""}`}
      >
        <PlusCircleIcon className="w-6" />
        <span className="btm-nav-label">Publicar</span>
      </Link>
      <Link
        href={"/favorites"}
        className={`${
          pathname === "/favorites" ? "active text-primary-focus" : ""
        }`}
      >
        <HeartIcon className="w-6" />
        <span className="btm-nav-label">Favoritos</span>
      </Link>
    </div>
  );
};

export default BottomTabs;
