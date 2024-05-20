import { createSlice } from "@reduxjs/toolkit";


export const counterSlice = createSlice({
    name: "allprice",
        initialState: {
            total: 0,
        },
    reducers: {
        AllPrice: (state) => {
            let flg = false;
            if(!flg){
                const prices = document.querySelectorAll('.cart-total');
                const totalPrice = document.querySelector('.cart-money');
                prices.forEach((price) => {
                    state.total += parseFloat(price.textContent.replace(/\D/g, ''));
                });
                totalPrice.textContent = state.total;
                flg = true;
            };
        }
    }
})

export const { AllPrice } = counterSlice.actions;

export default counterSlice.reducer;