const PrismaIcon = ({ className }: { className?: string }) => {
  return (
    <div className="tooltip">
      <svg xmlns="http://www.w3.org/2000/svg" width='24' height='24' className={className} fill="none" viewBox="0 0 100 100">
        <path className="fill-black dark:fill-white" fill-rule="evenodd" d="M9.774 68.639a4.98 4.98 0 0 1-.04-5.269L47.126 2.377c2.08-3.393 7.102-3.096 8.768.518l34.159 74.099a4.98 4.98 0 0 1-3.092 6.854L33.824 99.79a4.98 4.98 0 0 1-5.637-2.103zM51.44 20.211c.36-1.794 2.819-2.053 3.545-.373L78.548 74.36a1.868 1.868 0 0 1-1.18 2.53L40.653 87.85a1.867 1.867 0 0 1-2.365-2.158z" clip-rule="evenodd"/>
      </svg>
      <div className="tooltiptext">Prisma</div>
    </div>
  );
};

export default PrismaIcon;
