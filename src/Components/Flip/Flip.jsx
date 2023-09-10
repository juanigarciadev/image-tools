const Flip = ({
  selectedImage,
  setSelectedImage,
  editedImage,
  setEditedImage,
  editedRef,
}) => {
  return (
    <section className="min-h-screen bg-black text-white">
      <section className="grid grid-cols-2 grid-rows-1 gap-4 h-[50vh] p-8 lg:flex lg:flex-col lg:h-[80vh]">
        {selectedImage !== null ? (
          <div className="flex flex-col p-4 gap-4 h-full bg-neutral-800 rounded-xl">
            <h3 className="font-bold w-32 bg-neutral-900 p-2">
              Original image
            </h3>
            <div className="flex justify-center w-full bg-black h-[70%]">
              <img
                className="h-full"
                src={URL.createObjectURL(selectedImage)}
                alt={selectedImage}
              />
            </div>
            <button className="btn" onClick={() => setSelectedImage(null)}>
              Remove image
            </button>
          </div>
        ) : (
          <div className="h-32 bg-neutral-800 rounded-xl flex flex-col p-2 gap-2">
            <h3 className="font-bold w-32 bg-neutral-900 p-2">
              Original image
            </h3>
            <input
              type="file"
              name="myImage"
              onChange={(e) => setSelectedImage(e.target.files[0])}
            />
          </div>
        )}
        {selectedImage !== null ? (
          <div className="flex flex-col gap-4 h-full p-4 bg-neutral-800 rounded-xl">
            <h3 className="font-bold w-32 bg-neutral-900 p-2">Flipped image</h3>
            <div className="flex justify-center w-full bg-black h-[70%]">
              <img
                className="h-full horizontal-flip"
                src={URL.createObjectURL(selectedImage)}
                alt={selectedImage}
              />
            </div>
          </div>
        ) : (
          <div className="flex flex-col gap-2 p-2 h-32 bg-neutral-800 rounded-xl">
            <h3 className="font-bold w-32 bg-neutral-900 p-2">Flipped image</h3>
            <h3>No image selected</h3>
          </div>
        )}
      </section>
    </section>
  );
};

export default Flip;
