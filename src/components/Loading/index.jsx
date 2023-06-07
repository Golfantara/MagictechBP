import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSpinner } from "@fortawesome/free-solid-svg-icons";

const IconLoading = () => {
  const spinnerIcon = <FontAwesomeIcon icon={faSpinner} spin />;

  return (
    <div className="flex items-center justify-center h-screen">
      <div className="flex flex-col items-center">
        <div className="mb-4 text-4xl text-gray-500">{spinnerIcon}</div>
        <span className="text-gray-500">Loading...</span>
      </div>
    </div>
  );
};

export default IconLoading;
