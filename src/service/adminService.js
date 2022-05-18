import Axios from 'axios';
import constant from '../config/constant'

export class AdminService {
    addbook = (e, data) => {
        e.preventDefault();
        return Axios({
            method: 'post',
            url: `${constant.apiUrl}admin/book`,
            data: data,
        })
    }

    displaybook = (page) => {
        return Axios({
            method: 'get',
            params: {PageNo: page, PageSize: 8},
            url: `${constant.apiUrl}bookStore`,
        })
    }

    getCount = () => {
        return Axios({
            method: 'get',
            url: `${constant.apiUrl}bookStore/count`,
        })
    }

    searchAndFilter = (pageNo, searchText, filterName) => {
        return Axios({
            method: 'get',
            url: `${constant.apiUrl}sort/${pageNo - 1}/${searchText}/${filterName}`,


        })

    }

    addToCart = (data) => {
        const cartItems = JSON.parse(localStorage.getItem('cartItems') || '[]');
        cartItems.push(data);
        localStorage.setItem('cartItems', JSON.stringify(cartItems));
        /*return Axios({
            method: 'post',
            headers: {token: localStorage.getItem('Authorization')},
            url: `${Constant.apiUrl}cart`,
            data: data,
        })*/
    }

    addToWishlist = (data) => {
        const wishlistItems = JSON.parse(localStorage.getItem('wishlistItems') || '[]');
        wishlistItems.push(data);
        localStorage.setItem('wishlistItems', JSON.stringify(wishlistItems));
        /*return Axios({
            method: 'post',
            headers: {token: localStorage.getItem('Authorization')},
            url: `${Constant.apiUrl}cart`,
            data: data,
        })*/
    }

    myCart = () => {
        return JSON.parse(localStorage.getItem('cartItems') ? localStorage.getItem('cartItems') : '[]');
        /*return Axios({
            method: 'get',
            headers: {token: localStorage.getItem('Authorization')},
            url: `${Constant.apiUrl}cart`
        })*/
    }

    myWishlist = () => {
        return JSON.parse(localStorage.getItem('wishlistItems') ? localStorage.getItem('wishlistItems') : '[]');
        /*return Axios({
            method: 'get',
            headers: {token: localStorage.getItem('Authorization')},
            url: `${Constant.apiUrl}cart`
        })*/
    }

    updateCart = (cartValues) => {
        return Axios({
            method: 'put',
            headers: {token: localStorage.getItem('Authorization')},
            url: `${constant.apiUrl}cart`,
            data: cartValues
        })
    }

    // remove = (id) => {
    //     return Axios({
    //         method: 'delete',
    //         headers: {token: localStorage.getItem('Authorization')},
    //         url: `${constant.apiUrl}cart/${id}`
    //     })
    // }

    remove = (id) => {
        const cartItems = this.myCart();
        cartItems.splice(cartItems.findIndex(item => item.id === id), 1);
        localStorage.setItem('cartItems', JSON.stringify(cartItems));
        // return Promise(true);
        /*return Axios({
            method: 'delete',
            headers: {token: localStorage.getItem('Authorization')},
            url: `${Constant.apiUrl}cart/${id}`
        })*/
    }

    removeWishList = (id) => {
        const wishlistItems = this.myWishlist();
        wishlistItems.splice(wishlistItems.findIndex(item => item.id === id), 1);
        localStorage.setItem('wishlistItems', JSON.stringify(wishlistItems));
    }

    uploadFile = (formData) => {
        return Axios({
            method: 'post',
            data: formData,
            url: `${constant.apiUrl}admin/bookStore/image`
        })
    }

    register = (registerData) => {
        return Axios({
            method: 'post',
            url: `${constant.apiUrl}user/register`,
            data: registerData
        })
    }

    login = (loginData) => {
        return Axios({
            method: 'post',
            url: `${constant.apiUrl}user/login`,
            data: loginData
        })
    }

    userDetails = () => {
        return Axios({
            headers: {token: localStorage.getItem('Authorization')},
            method: 'get',
            url: `${constant.apiUrl}customer`,
        })
    }

    forgetPassword = (emailID) => {
        return Axios({
            method: 'post',
            params: {emailID: emailID},
            url: `${constant.apiUrl}user/forget/password`,
        })
    }

    resetPassword = (password, token) => {
        return Axios({
            method: 'post',
            params: {password: password, token: token},
            url: `${constant.apiUrl}user/confirm/password/`,
        })
    }

    verifyEmail = (token) => {
        return Axios({
            method: 'post',
            params: {token: token},
            url: `${constant.apiUrl}user/verify/mail`
        })
    }

    resendMail = (emailID) => {
        return Axios({
            method: 'post',
            url: `${constant.apiUrl}user/resend/email/${emailID}`
        })
    }

    getDetails = (data) => {
        return Axios({
            headers: {token: localStorage.getItem('Authorization')},
            method: 'post',
            url: `${constant.apiUrl}customer`,
            data: data
        })
    }

    placedOrder = (totalprice,discountPrice) => {
        return Axios({
            headers: {token: localStorage.getItem('Authorization')},
            method: 'post',
            params: {totalprice: totalprice,discountPrice:discountPrice},
            url: `${constant.apiUrl}order`,
        })
    }

    myOrder = () => {
        return Axios({
            headers: {token: localStorage.getItem('Authorization')},
            method: 'get',
            url: `${constant.apiUrl}order`,
        })
    }

    getCoupon = (totalPrice) => {
        return Axios({
            headers: {token: localStorage.getItem('Authorization')},
            method: 'get',
            params: {totalPrice: totalPrice},
            url: `${constant.apiUrl}coupon`,
        })
    }

    addDiscountPrice = (discountCoupon, totalPrice) => {
        return Axios({
            headers: {token: localStorage.getItem('Authorization')},
            method: 'post',
            params: {discountCoupon: discountCoupon, totalPrice: totalPrice},
            url: `${constant.apiUrl}coupon`,
        })
    }

}