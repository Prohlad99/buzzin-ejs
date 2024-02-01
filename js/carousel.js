const customThem = {
  root: {
    base: "relative h-full w-full",
    leftControl:
      "absolute  -bottom-[100px] -right-[130px] flex h-full items-center justify-center px-4 focus:outline-none",
    rightControl:
      "absolute  -bottom-[100px] -right-60 flex h-full items-center justify-center px-4 focus:outline-none",
  },
  indicators: {
    active: {
      off: "bg-white/50 hover:bg-white dark:bg-gray-800/50 dark:hover:bg-gray-800",
      on: "bg-white dark:bg-gray-800",
    },
    base: "h-3 w-3 rounded-full",
    wrapper: "absolute bottom-5 left-1/2 flex -translate-x-1/2 space-x-3",
  },
  control: {
    base: "inline-flex shadow-stone-500 hover:bg-gradient-to-t from-[#0B54E7] to-[#6017CD] shadow-lg h-8 w-8 items-center justify-center rounded-full bg-white/30 group-hover:bg-white/50 group-focus:outline-none group-focus:ring-4 group-focus:ring-white dark:bg-gray-800/30 dark:group-hover:bg-gray-800/60 dark:group-focus:ring-gray-800/70 sm:h-10 sm:w-10",
    icon: "h-5 w-5 text-black hover:text-white dark:text-gray-800 sm:h-6 sm:w-6",
  },
};
