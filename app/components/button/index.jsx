import clsx from "clsx";

export const Button = ({ children, outline = false, ...props }) => {
  return (
    <button
      className={clsx(
        "border border-emerald-400 p-2 px-4 rounded hover:bg-emerald-600 cursor-pointer active:bg-emerald-800 bg-emerald-500 outline-none text-white",
        {
          "bg-transparent hover:bg-emerald-600 !text-slate-700 hover:!text-white dark:!text-slate-300": outline
        },
      )}
      {...props}
    >
      {children}
    </button>
  );
};
