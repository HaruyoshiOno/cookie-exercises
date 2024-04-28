import { useCookies } from "react-cookie";
import { items } from "./Items";


export const Btn = ({ itemId, itemName }) => {

        const [cookies, setCookie] = useCookies(['cart']);
      
        const handleAddToCart = () => {
          // 商品情報をCookieに保存
          setCookie('cart', { id: items}, { path: '/' });
          console.log('アイテムID:', items, 'をカートに追加しました');
        };


    return (
        <>
            {/* <p className="btn" style={backgroundColor}> */}
            <p className="btn">
                <a href="" onClick={handleAddToCart()}>カートに追加</a>
            </p>
        </>
    );
};


