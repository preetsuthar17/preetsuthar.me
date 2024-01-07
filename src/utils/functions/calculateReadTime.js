import MarkdownIt from "markdown-it";
const md = new MarkdownIt();

const calculateReadTime = (content) => {
  const plainText = md.render(content);

  const words = plainText.split(/\s+/).length;

  const wordsPerMinute = 200;

  const readTimeMinutes = words / wordsPerMinute;

  const hours = Math.floor(readTimeMinutes / 60);
  const remainingMinutes = Math.floor(readTimeMinutes % 60);
  const seconds = Math.round((readTimeMinutes % 1) * 60);

  let readTime = "";

  if (hours > 0) {
    readTime += `${hours} hour${hours > 1 ? "s" : ""} `;
  }

  if (remainingMinutes > 0 || (hours === 0 && seconds > 0)) {
    readTime += `${Math.max(1, remainingMinutes)} minute${
      remainingMinutes > 1 ? "s" : ""
    } `;
  }

  return readTime.trim();
};

export default calculateReadTime;
