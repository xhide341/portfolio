const NextJsIcon = ({ width = "20px", height = "20px" }: { width?: string; height?: string }) => {
  return (
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      width={width} 
      height={height} 
      viewBox="0 0 24 24"
      fill="none" 
    >
      <path fill="currentColor" d="M11.572 0c6.445 0 11.572 5.127 11.572 11.572 0 6.445-5.127 11.572-11.572 11.572-6.445 0-11.572-5.127-11.572-11.572C0 5.127 5.127 0 11.572 0Z"/>
      <path fill="url(#a)" d="M19.925 20.290 8.902 6.953H6.953v9.251h1.558V8.918L18.00 21.18a11.57 11.57 0 0 0 1.925-.890"/>
      <path fill="url(#b)" d="M16.325 6.953H14.78v9.251h1.545z"/>
      <defs>
        <linearGradient id="a" x1="14.012" x2="18.524" y1="14.969" y2="20.615" gradientUnits="userSpaceOnUse">
          <stop stopColor="#fff"/>
          <stop offset="1" stopColor="#fff" stopOpacity="0"/>
        </linearGradient>
        <linearGradient id="b" x1="15.553" x2="15.527" y1="6.953" y2="13.733" gradientUnits="userSpaceOnUse">
          <stop stopColor="#fff"/>
          <stop offset="1" stopColor="#fff" stopOpacity="0"/>
        </linearGradient>
      </defs>
    </svg>
  );
};

export default NextJsIcon;
