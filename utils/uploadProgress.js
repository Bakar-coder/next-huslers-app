export default (
  event,
  setFileUploadPercentage,
  setCoverUploadPercentage,
  fileUploadPercentage,
  coverUploadPercentage
) => {
  if (setFileUploadPercentage && setFileUploadPercentage)
    setFileUploadPercentage(
      parseInt(Math.round(event.loaded * 100) / event.total)
    );
  if (setCoverUploadPercentage && setCoverUploadPercentage)
    setCoverUploadPercentage(
      parseInt(Math.round(event.loaded * 100) / event.total)
    );

  if (fileUploadPercentage === 100) setFileUploadPercentage(0);
  if (coverUploadPercentage === 100 && setCoverUploadPercentage) setCoverUploadPercentage(0);
};
