import cl from "./BasketModal.module.scss";
import cross from "./../../../assets/Modal/icon-close-cross-button.png";
import ButtonOrder from "../button/ButtonOrder/ButtonOrder";
import ButtonClearBasket from "../button/ButtonClearBasket/ButtonClearBasket";

const BasketModal = ({
  children,
  visibleBasket,
  setVisibleBasket,
  local,
  sum,
  onClick,
}) => {
  const rootClasses = [cl.myModal];
  if (visibleBasket) {
    rootClasses.push(cl.active);
  }

  return (
    <div
      className={rootClasses.join(" ")}
      onClick={() => {
        setVisibleBasket(false);
        document.body.classList.remove("no-scroll");
      }}
    >
      <div className={cl.myModalContent} onClick={(e) => e.stopPropagation()}>
        <div className={cl.header_basket}>
          <ButtonClearBasket onClick={onClick} />
          <div
            className={cl.close}
            onClick={() => {
              setVisibleBasket(false);
              document.body.classList.remove("no-scroll");
            }}
          >
            <img src={cross} />
          </div>
        </div>

        <div className={cl.overlov}> {children}</div>

        {local && local.length > 0 ? (
          <div className={cl.container_sum}>
            <div className={cl.sum}>
              Сума покупки: <span className={cl.span}>{sum} грн.</span>
            </div>
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
