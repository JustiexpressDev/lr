import { Helmet } from "react-helmet";

const GoogleReviews = () => {
  return (
    <div>
      <Helmet>
        <script
          src="https://static.elfsight.com/platform/platform.js"
          data-use-service-core
          defer
        ></script>
      </Helmet>
      <div className="elfsight-app-92a8af1e-5e7c-4fd3-90a1-c357c7bda4e6"></div>
    </div>
  );
};

export default GoogleReviews;
