const convertIdToUuid = (id) => {
  const hexId = id.toString(16);
  const paddedHexId = hexId.padStart(32, "0");
  const uuid = `${paddedHexId.substr(0, 8)}-${paddedHexId.substr(
    8,
    4
  )}-${paddedHexId.substr(12, 4)}-${paddedHexId.substr(
    16,
    4
  )}-${paddedHexId.substr(20)}`;

  return uuid;
};

export default convertIdToUuid;
