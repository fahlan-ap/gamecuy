import { useEffect } from "react";

const Helmet = ({ title }) => {
  useEffect(() => {
    document.title = title;
  }, [title]);

  return null;
};

export default Helmet;