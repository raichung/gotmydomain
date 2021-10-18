import React from "react";

import GitHubIcon from "@material-ui/icons/GitHub";
import FacebookIcon from "@material-ui/icons/Facebook";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import TwitterIcon from "@material-ui/icons/Twitter";

import "./Socials.css";
import { Button } from "@material-ui/core";

const Socials = () => {
  return (
    <React.Fragment>
      <Button
        onClick={(event) =>
          (window.location.href = "https://github.com/raichung")
        }
      >
        <GitHubIcon className="icon1" />
      </Button>
      <Button
        onClick={(event) =>
          (window.location.href =
            "https://www.facebook.com/raichung.mgr/")
        }
      >
        <FacebookIcon className="icon2" />
      </Button>
      <Button
        onClick={(event) =>
          (window.location.href =
            "https://www.linkedin.com/in/raichung")
        }
      >
        <LinkedInIcon className="icon2" />
      </Button>
      <Button
        onClick={(event) =>
          (window.location.href = "https://twitter.com/Raichung_17")
        }
      >
        <TwitterIcon className="icon2" />
      </Button>
    </React.Fragment>
  );
};

export default Socials;
