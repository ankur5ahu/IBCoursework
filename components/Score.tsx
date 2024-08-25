import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import ProgressBar from './ProgressBar';

type ScoreProps={
    score: number;
    remark: string;
    date: string;
}

const Score : React.FC<ScoreProps>= ({ score, remark, date }) => (
    <div className="bg-white p-[12px] rounded-3xl">
      <div className="flex justify-between items-center">
        <div className='px-5'>
          <h2 className="text-md text-neutrals-800">Overall Score</h2>
          <p className="text-xl font-bold">Remark : <span className="text-[#3CC28A]">{remark}</span></p>
          <p className="text-sm text-neutrals-500">Evaluated on {date}</p>
        </div>
        <div className='w-[80px] h-[80px]'>
          <ProgressBar value={score} maxValue={20} color="#3CC28A"/>
        </div>
        
      </div>
    </div>
  );

export default Score;