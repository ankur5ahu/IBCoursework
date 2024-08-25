
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

interface ProgressBarProps {
  value: number;
  maxValue: number;
  color: string;
}

const ProgressBar: React.FC<ProgressBarProps> = ({ value, maxValue, color }) => {
  const percentage = (value / maxValue) * 100;

  return (
    <CircularProgressbar
      value={percentage}
      text={`${value}/${maxValue}`}
      strokeWidth={10}
      styles={buildStyles({
        pathColor: color,  
        trailColor: '#EAF0F2', // Grey color
        textColor: '#000000',  // Black color
        textSize: '24px',
      })}
    />
  );
};

export default ProgressBar;
