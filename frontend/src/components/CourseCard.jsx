import { Link } from "react-router-dom";
import { FaGoogle, FaFacebook, FaMicrosoft, FaExternalLinkAlt, FaBookOpen } from "react-icons/fa";

const providerIcons = {
  Google: <FaGoogle className="text-blue-600 text-3xl" />,
  Microsoft: <FaMicrosoft className="text-gray-800 text-3xl" />,
  Meta: <FaFacebook className="text-blue-500 text-3xl" />,
  Default: <FaBookOpen className="text-gray-500 text-3xl" />,
};

const CourseCard = ({ course }) => {
  return (
    <div className="bg-white shadow-md rounded-lg p-4 text-center hover:shadow-lg transition">
      <div className="flex justify-center mb-2">
        {providerIcons[course.provider] || providerIcons.Default}
      </div>
      <h3 className="text-lg font-semibold">{course.name}</h3>
      <p className="text-sm text-gray-600 mt-2">{course.description}</p>
      <Link
        to={course.link}
        target="_blank"
        className="mt-3 inline-flex items-center gap-2 text-blue-600 hover:underline"
      >
        View Course <FaExternalLinkAlt />
      </Link>
    </div>
  );
};

export default CourseCard;
