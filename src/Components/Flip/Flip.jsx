const Flip = ({
  selectedImage,
  setSelectedImage,
  editedImage,
  setEditedImage,
  editedRef,
}) => {
  return (
    <section className="grid grid-cols-2 h-screen gap-4 bg-black text-white p-8">
      <div className="flex flex-col gap-8 justify-center items-center relative bg-neutral-800 rounded-xl">
        <h3 className="absolute top-4 font-bold">Input</h3>
        {selectedImage && (
          <img
            className="max-h-[40%]"
            src={URL.createObjectURL(selectedImage)}
            alt=""
          />
        )}
        {selectedImage === null ? (
          <input
            type="file"
            name="myImage"
            onChange={(e) => setSelectedImage(e.target.files[0])}
          />
        ) : (
          <button
            className="btn cursor-pointer absolute bottom-4"
            onClick={() => setSelectedImage(null)}
          >
            Remove image
          </button>
        )}
      </div>
      <div className="flex justify-center items-center relative bg-neutral-800 rounded-xl">
        <h3 className="absolute top-4 font-bold">Output</h3>
        {selectedImage !== null ? (
          <img
            className="max-h-[40%] contrast-200"
            ref={editedRef}
            src={URL.createObjectURL(selectedImage)}
          />
        ) : (
          <h3>No image selected</h3>
        )}
      </div>
    </section>
  );
};

export default Flip;
