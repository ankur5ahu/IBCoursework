import FileUpload from "../components/FileUpload";
import CourseWorkList from "@/components/CourseworkList";
import ExploreCourseWork from "@/components/ExploreCoursework";

const Home = () => {
  return (
    <div className="flex flex-col justify-center items-center">
      <div className="w-full px-5 sm:w-[600px] md:w-[806px] lg:w-[906px] my-10">
        <div className="flex gap-4">
          <div>
            <p className="text-neutrals-900 font-bold text-2xl mb-6">
              Hey IB Folks! Unsure about the quality of your answers?{" "}
              <span className="text-primary-500">We get you.</span>
            </p>
            <FileUpload />
          </div>
          <img
            src="/astro.png"
            alt="astro"
            className="w-[298px] hidden md:block object-contain"
          />
        </div>
        <CourseWorkList />
        <ExploreCourseWork />
      </div>
    </div>
  );
};

export default Home;
