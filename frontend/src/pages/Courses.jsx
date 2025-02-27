import BackToHome from "../components/BackToHome";
import CourseCard from "../components/CourseCard";

const courses = [
  {
    provider: "Google",
    name: "Fundamentals of Digital Marketing",
    description: "Free course & certificate by Google.",
    link: "https://learndigital.withgoogle.com/digitalgarage/course/digital-marketing",
  },
  {
    provider: "Microsoft",
    name: "Microsoft Advertising Certification",
    description: "Free training and certification from Microsoft.",
    link: "https://about.ads.microsoft.com/en-us/resources/training/get-certified",
  },
];

const Courses = () => {
  return (
    <div className="p-8">
        <BackToHome />
      <h2 className="text-2xl font-bold text-center mb-6">Free Courses</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {courses.map((course, index) => (
          <CourseCard key={index} course={course} />
        ))}
      </div>
    </div>
  );
};

export default Courses;
