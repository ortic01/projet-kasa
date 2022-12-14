import Banner from "../components/Banner";
import aproposData from "../slogan/aproposData";
import Collapse from "../components/Accordeon";
import imageBanner from "../design/aproposbannerDesktop.png";

function Apropos() {
  const content = (title) => {
  switch (title) {
    case "fiability":
      return aproposData.fiability;
    case "respect":
      return aproposData.respect;
    case "service":
      return aproposData.service;
    case "Responsibility":
      return aproposData.security;
    default:
      console.log("default");
      break;
  }
};

return (
  <div className="apropos">
    <Banner image={imageBanner} />
    <div className="apropos__dropdowns">
      <Collapse title="Fiabilit√©" content={content("fiability")} />
      <Collapse title="Respect" content={content("respect")} />
      <Collapse title="Service" content={content("service")} />
      <Collapse title="Responsabilit√©" content={content("Responsibility")} />
    </div>
  </div>
);
};

export default Apropos;
