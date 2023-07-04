interface CircularProgressProps {
    progress: number;
  }
  
  const CircularProgress: React.FC<CircularProgressProps> = ({ progress }) => {
    let colorClass = "text-red-500";
    let remainingClass = "text-red-100";
  
    if (progress >= 70) {
      colorClass = "text-green-500";
      remainingClass = "text-green-100";
    } else if (progress >= 50) {
      colorClass = "text-yellow-500";
      remainingClass = "text-yellow-100";
    }
  
    return (
      <div className="relative">
        <div className="relative h-[15px] w-[15px]">
          <svg className="absolute" viewBox="0 0 36 36">
            <path
              className={`stroke-current ${remainingClass}`}
              fill="none"
              strokeWidth="5"
              d="M18 2.0845
                a 15.9155 15.9155 0 0 1 0 31.831
                a 15.9155 15.9155 0 0 1 0 -31.831"
            />
            <path
              className={`stroke-current ${colorClass}`}
              fill="none"
              strokeWidth="5"
              strokeDasharray={`${progress} 100`}
              d="M18 2.0845
                a 15.9155 15.9155 0 0 1 0 31.831
                a 15.9155 15.9155 0 0 1 0 -31.831"
            />
          </svg>
        </div>
      </div>
    );
  };
  export default CircularProgress;