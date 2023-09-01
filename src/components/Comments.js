import { useEffect } from "react";

const UtterancesComments = () => {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://utteranc.es/client.js";
    script.setAttribute("repo", "preetsuthar17/comments");
    script.setAttribute("issue-term", "pathname");
    script.setAttribute("label", "comment :speech_balloon:");
    script.setAttribute("theme", "github-light");
    script.crossOrigin = "anonymous";
    script.async = true;

    const commentsContainer = document.getElementById("utterances-comments");
    if (commentsContainer) {
      commentsContainer.appendChild(script);
    }

    const handleScriptLoad = () => {
      if (commentsContainer && script.parentNode) {
        commentsContainer.removeChild(script);
      }
    };

    script.addEventListener("load", handleScriptLoad);

    return () => {
      script.removeEventListener("load", handleScriptLoad);
    };
  }, []);

  return <section id="utterances-comments" />;
};

export default UtterancesComments;
