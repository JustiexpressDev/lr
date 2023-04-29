import { Helmet } from "react-helmet";

const GoogleReviews = () => {
  return (
    <div id="reviews">
      <Helmet>
        <script
          src="https://static.elfsight.com/platform/platform.js"
          data-use-service-core
          defer
        ></script>
      </Helmet>
      <div className="elfsight-app-bcbafc0b-dc72-4afe-9bc9-5fc4d8535b7e"></div>
    </div>
  );
};

export default GoogleReviews;
