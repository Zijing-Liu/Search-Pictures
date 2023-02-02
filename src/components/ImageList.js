import ImageShow from "./ImageShow";
import "./ImageList.css";
function ImageList({ images }) {
  //take each image in the list, make a copy and pass it to imageShow as a prop
  const renderedImages = images.map((image) => {
    //apply the kep to optimize the updates
    return (
      <div key={image.id}>
        <ImageShow image={image} />
      </div>
    );
  });

  return <div className="image-list"> {renderedImages} </div>;
}
export default ImageList;
