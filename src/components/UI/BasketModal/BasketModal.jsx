import cl from "./BasketModal.module.scss";
import cross from "./../../../assets/Modal/icon-close-cross-button.png";
import ButtonOrder from "../button/ButtonOrder/ButtonOrder";

const BasketModal = ({
  children,
  visibleBasket,
  setVisibleBasket,
  local,
  sum,
}) => {
  const rootClasses = [cl.myModal];
  if (visibleBasket) {
    rootClasses.push(cl.active);
  }

  return (
    <div
      className={rootClasses.join(" ")}
      onClick={() => setVisibleBasket(false)}
    >
      <div className={cl.close}>
        <img src={cross} />
      </div>

      <div className={cl.myModalContent} onClick={(e) => e.stopPropagation()}>
        {children}

        {local && local.length > 0 ? (
          <div className={cl.container_sum}>
            <div className={cl.sum}>Сума покупки: {sum} грн.</div>
            <ButtonOrder />
          </div>
        ) : (
          <></>
        )}
      </div>
    </div>
  );
};

export default BasketModal;
