import { useSelector } from "react-redux";
import Bagitem from "../components/Bagitem";
import Bagsummary from "../components/Bagsummary";
import BagDisplay from "../components/BagDisplay";

const Bag = () => {
  const bagItems = useSelector((store) => store.bags);
  const items = useSelector((store) => store.items);
  const finalItems = items.filter((item) => {
    const itemIndex = bagItems.indexOf(item.id);
    return itemIndex >= 0;
  });
  return (
    <main>
      <div className="bag-page">
        {bagItems.length === 0 ? (
          <BagDisplay />
        ) : (
          <div>
            <div className="bag-items-container">
              {finalItems.map((item) => (
                <Bagitem item={item}></Bagitem>
              ))}
            </div>
            <div className="bag-summary">
              <Bagsummary></Bagsummary>
            </div>
          </div>
        )}
      </div>
    </main>
  );
};
export default Bag;
