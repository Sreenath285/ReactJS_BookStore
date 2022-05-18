import React from 'react';
import {Route, Switch } from 'react-router-dom';
import AdminPage from "../components/admin/adminPage";
import HomePage from "../components/user/homePage";
import Cart from "../components/user/cart";
import WishList from "../components/user/wishList";
import OrderSuccessful from "../components/user/orderSuccessful";
import MyOrdersList from "../components/user/myOrdersList";


class RouterComponent extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <Switch>
                <Route path="/" component={HomePage} exact={true} />
                <Route path="/admin" component={AdminPage} exact={true} />
                <Route path={"/cart"} component={Cart} exact={true}/>
                <Route path={"/wishlist"} component={WishList} exact={true}/>
                <Route path={"/orders/successful/:random"} component={OrderSuccessful} exact/>
                {/*<Route path={"/user/login"} component={SignUp} exact/>*/}
                {/*<Route path={"/forgot/password"} component={ForgotPassword} exact/>*/}
                {/*<Route path={"/reset/password/:token"} component={ResetPassword} exact/>*/}
                {/*<Route path={"/verify/email/:token"} component={VerificationSuccessful} exact/>*/}
                {/*<Route path={"/resend/email"} component={ResendEmail} exact/>*/}
                {/*<Route path={"/forgot/resend/email"} component={ResendEmail} exact/>*/}
                <Route path={"/orders"} component={MyOrdersList} exact/>
            </Switch>
        );
    }
}

export default RouterComponent;