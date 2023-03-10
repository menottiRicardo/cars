import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/outline";
import { Images } from "@prisma/client";
import { useReducer } from "react";
import { useSwipeable } from "react-swipeable";


const ImageCarousel = ({ images }: { images: Images[] }) => {
  const [state, dispatch] = useReducer(reducer, getInitialState(images.length));

  const slide = (dir: Direction) => {
    dispatch({ type: dir, numItems: images.length });
    setTimeout(() => {
      dispatch({ type: "stopSliding" });
    }, 50);
  };

  const handlers = useSwipeable({
    onSwipedLeft: () => slide("NEXT"),
    onSwipedRight: () => slide("PREV"),
    swipeDuration: 500,
    preventScrollOnSwipe: true,
    trackMouse: true,
  });

  return (
    <div className="group relative h-48 w-full overflow-hidden" {...handlers}>
      <div
        className={`flex w-full ${
          state.sliding ? "" : "1s transform transition ease-in-out"
        } `}
      >
        {images &&
          images.map((slide, index) => (
            <>
              <img
                key={slide.id}
                src={`https://res.cloudinary.com/dt4xiekfw/${slide.uri}`}
                className="h-full w-full rounded-t-xl bg-cover bg-center duration-100"
                style={{
                  order: `${getOrder(index, state.pos, images.length)}`,
                }}
              />
            </>
          ))}
      </div>
      <div className="absolute inset-x-0 bottom-2 z-20 flex h-2 w-full items-center justify-center gap-x-2">
        {images.map((slide, index) => {
          const order = getOrder(index, state.pos, images.length);

          return (
            <div
              key={index}
              className={`h-2 w-2 rounded-xl ${
                state.pos === index ? "bg-primary" : "bg-base-300"
              }`}
            />
          );
        })}
      </div>
      {/* Left Arrow */}
      <div
        className="absolute top-[50%] left-5 block -translate-x-0 translate-y-[-50%] cursor-pointer rounded-full bg-black/20 p-2 text-2xl text-white"
        onClick={(e) => {
          e.stopPropagation();
          console.log("hey");
          slide("PREV");
        }}
      >
        <ChevronLeftIcon className="w-6" />
      </div>
      {/* Right Arrow */}
      <div
        onClick={(e) => {
          e.stopPropagation();
          slide("NEXT");
        }}
        className="absolute top-[50%] right-5 block -translate-x-0 translate-y-[-50%] cursor-pointer rounded-full bg-black/20 p-2 text-2xl text-white"
      >
        <ChevronRightIcon className="w-6" />
      </div>
    </div>
  );
};

function reducer(state: CarouselState, action: CarouselAction): CarouselState {
  switch (action.type) {
    case "PREV":
      return {
        ...state,
        dir: "PREV",
        sliding: true,
        pos: state.pos === 0 ? action.numItems - 1 : state.pos - 1,
      };
    case "NEXT":
      return {
        ...state,
        dir: "NEXT",
        sliding: true,
        pos: state.pos === action.numItems - 1 ? 0 : state.pos + 1,
      };
    case "stopSliding":
      return { ...state, sliding: false };
    default:
      return state;
  }
}

export default ImageCarousel;

type Direction = "PREV" | "NEXT";

interface CarouselState {
  pos: number;
  sliding: boolean;
  dir: Direction;
}

type CarouselAction =
  | { type: Direction; numItems: number }
  | { type: "stopSliding" };

const getOrder = (index: number, pos: number, numItems: number) => {
  return index - pos < 0 ? numItems - Math.abs(index - pos) : index - pos;
};

const getInitialState = (numItems: number): CarouselState => ({
  pos: 0,
  sliding: false,
  dir: "NEXT",
});
