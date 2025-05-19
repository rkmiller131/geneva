"use client";

interface GoToButtonProps {
  onClick: () => void;
}

export default function GoToButton({ onClick }: GoToButtonProps) {

  return (
    <button
      className="group cursor-pointer border border-[0.3px] border-accent p-1 hover:border-gray-300 transition-border duration-200"
      onClick={onClick}
    >
      <svg
        width="20"
        height="20"
        viewBox="0 0 17 21"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="text-sky-400 group-hover:text-gray-300 transition-colors duration-200"
      >
        <path
          d="M16.9824 0L1.06021 6.81786L14.9258 17.198L16.9824 0ZM2.00003 20.0132L3.20082 20.9121L10.0927 11.7061L8.89193 10.8071L7.69114 9.90818L0.79924 19.1143L2.00003 20.0132Z"
          fill="currentColor"
        />
      </svg>
    </button>
  );

}