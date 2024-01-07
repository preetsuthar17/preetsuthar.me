const getFirstFewLines = (content) => {
  const lines = content.slice(0, 150).split("\n");
  const firstFewLines = lines.slice(0, 1).join("\n");
  let description = "";
  for (const line of lines) {
    if (line.trim().length > 0 && !line.trim().startsWith("#")) {
      if (!line.trim().startsWith("![")) {
        description = line.trim();
        break;
      }
    }
  }

  return description;
};

export default getFirstFewLines;
