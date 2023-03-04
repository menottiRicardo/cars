import {
  HeartIcon,
  HomeIcon,
  PlusCircleIcon,
} from "@heroicons/react/24/outline";
import { useRouter } from "next/router";
const CarBottom = () => {
  const router = useRouter();
  const pathname = router.pathname;
  return (
    <div className="btm-nav z-50 my-4 px-2 bg-base-100">
      <span className="text-2xl font-medium">$35,000</span>
      <div className="w-full">
        <button className="btn-primary btn w-full rounded-full shadow-lg">
          Agendar cita
        </button>
      </div>
    </div>
  );
};

export default CarBottom;
