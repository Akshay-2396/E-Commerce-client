import { useNavigate } from "react-router-dom";
import { Button } from "../ui/button";
import { SheetContent, SheetHeader, SheetTitle } from "../ui/sheet";
import UserCartItemsContent from "./cart-items-content";

function UserCartWrapper({ cartItems, setOpenCartSheet }) {
  const navigate = useNavigate();

  const totalCartAmount =
    cartItems && cartItems.length > 0
      ? cartItems.reduce(
          (sum, currentItem) =>
            sum +
            (currentItem?.salePrice > 0
              ? currentItem?.salePrice
              : currentItem?.price) *
              currentItem?.quantity,
          0
        )
      : 0;

  const isCartEmpty = !cartItems || cartItems.length === 0;

  return (
    <SheetContent className="sm:max-w-md flex flex-col">
      <SheetHeader>
        <SheetTitle className="font-bold">Your Cart</SheetTitle>
      </SheetHeader>

      <div className="mt-5 space-y-4 flex-1 overflow-y-auto">
        {isCartEmpty ? (
          <img
            className="mt-30"
            src="https://vitanami.com/public//assets/img/adt/empty-cart.png"
            alt=" Your cart is empty ☹"
          />
        ) : (
          cartItems.map((item) => (
            <UserCartItemsContent key={item.productId} cartItem={item} />
          ))
        )}
      </div>

      <Button
        onClick={() => {
          navigate("/shop/checkout");
          setOpenCartSheet(false);
        }}
        className="w-full mt-6"
        disabled={isCartEmpty}
      >
        Checkout
      </Button>
    </SheetContent>
  );
}

export default UserCartWrapper;


// import { useNavigate } from "react-router-dom";
// import { Button } from "../ui/button";
// import { SheetContent, SheetHeader, SheetTitle } from "../ui/sheet";
// import UserCartItemsContent from "./cart-items-content";

// function UserCartWrapper({ cartItems, setOpenCartSheet }) {
//   const navigate = useNavigate();

//   const isCartEmpty = !cartItems || cartItems.length === 0;

//   const subtotal = cartItems?.reduce(
//     (sum, item) =>
//       sum +
//       (item.salePrice > 0 ? item.salePrice : item.price) * item.quantity,
//     0
//   );

//   let shippingCost = 0;
//   if (subtotal < 1000) {
//     shippingCost = 5;
//   } else if (subtotal < 2000) {
//     shippingCost = 2.5;
//   }

//   const finalTotal = subtotal + shippingCost;

//   return (
//     <SheetContent className="sm:max-w-md flex flex-col">
//       <SheetHeader>
//         <SheetTitle className="font-bold">Your Cart</SheetTitle>
//       </SheetHeader>

//       <div className="mt-5 space-y-4 flex-1 overflow-y-auto">
//         {isCartEmpty ? (
//           <img
//             src="https://vitanami.com/public//assets/img/adt/empty-cart.png"
//             alt="Your cart is empty"
//             className="mt-20"
//           />
//         ) : (
//           cartItems.map((item) => (
//             <UserCartItemsContent
//               key={item.productId}
//               cartItem={item}
//             />
//           ))
//         )}
//       </div>

//       {!isCartEmpty && (
//         <div className="border-t pt-4 space-y-2 text-sm">
//           <div className="flex justify-between">
//             <span className="text-gray-600">Subtotal</span>
//             <span>${subtotal.toFixed(2)}</span>
//           </div>

//           <div className="flex justify-between">
//             <span className="text-gray-600">Shipping</span>
//             <span>
//               {shippingCost === 0 ? "Free" : `$${shippingCost.toFixed(2)}`}
//             </span>
//           </div>

//           <div className="flex justify-between font-semibold text-base pt-2 border-t">
//             <span>Total</span>
//             <span>${finalTotal.toFixed(2)}</span>
//           </div>
//         </div>
//       )}

//       <Button
//         onClick={() => {
//           navigate("/shop/checkout");
//           setOpenCartSheet(false);
//         }}
//         className="w-full mt-6"
//         disabled={isCartEmpty}
//       >
//         Checkout
//       </Button>
//     </SheetContent>
//   );
// }

// export default UserCartWrapper;