import "./newCollection.css";
import new_collection from "../assets/new_collections";
import Item from "../Item/Item";
const NewCollection = () => {
  return (
    <div className="new-collection">
      <h1>NEW COLLECTION</h1>
      <hr />
  
      <div className="collection">
        {new_collection.map((i,item) => {
          return (
            <Item
              key={item}
              id={i.id}
              name={i.name}
              image={i.image}
              new_price={i.new_price}
              old_price={i.old_price}
            />
          );
        })}
      </div>
    </div>
  );
};

export default NewCollection;
