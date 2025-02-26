const AlpineJsIcon = ({ className = "" }: { className?: string }) => {
  return (
    <div className="tooltip">
      <svg className={className} viewBox="0 0 128 128" xmlns="http://www.w3.org/2000/svg">
        <path 
          className="fill-black dark:fill-white" 
          fillRule="evenodd" 
          d="M98.444 35.562 126 62.997 98.444 90.432 70.889 62.997z" 
          clipRule="evenodd"
        />
        <path 
          className="fill-black dark:fill-white" 
          fillRule="evenodd" 
          d="m29.556 35.562 57.126 56.876H31.571L2 62.997z" 
          clipRule="evenodd"
        />
      </svg>
      <div className="tooltiptext">AlpineJS</div>
    </div>
  );
};

export default AlpineJsIcon;