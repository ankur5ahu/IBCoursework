import Chip from "./Chip";

type CourseCardProps = {
    title: string;
    description: string;
    stars: number;
    language: string;
    words: number;
    subject: string;
    time: number;
};

const CourseCard: React.FC<CourseCardProps> = ({
    title,
    description,
    stars,
    language,
    words,
    subject,
    time,
}) => {
    return (
        <div className="flex flex-col gap-2 sm:flex-row items-center border rounded-xl bg-neutrals-50 p-3 md:p-[6px]">
            <div className="flex-shrink-0 w-full sm:w-auto hidden md:block">
                <img
                    src="/pdfView.svg"
                    alt="Document thumbnail"
                    className="rounded-lg w-full sm:w-auto"
                />
            </div>

            <div className="flex flex-col w-full pr-4">
                <div className="md:my-1">
                    <div className="text-lg font-semibold text-neutrals-800 line-clamp-2 mb-1">
                        {title}
                    </div>
                    <div className="text-xs font-light text-neutrals-600 line-clamp-2">
                        {description}
                    </div>
                </div>
                <div className="flex flex-wrap gap-1 mt-[6px] md:mb-2">
                    <Chip icon="/subject.svg" label={`${subject}`} />
                    <Chip icon="/time.svg" label={`${time} min read`} />
                    <Chip icon="/words.svg" label={`${words} words`} />
                    <Chip icon="/star.svg" label={`${stars}/7`} />
                    <Chip icon="/language.svg" label={`${language}`} />
                </div>
            </div>
        </div>
    );
};

export default CourseCard;
