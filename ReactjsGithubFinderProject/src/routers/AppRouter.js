import React from 'react';
import {BrowserRouter, Route, Switch, Link, NavLink} from 'react-router-dom';



const Nav = () => (
    <nav>
        {/* a href="" kullanuldığında sayfa refresh edildiği için Link,NavLink kullanıllır */}
        <NavLink exact to="/" activeClassName="active" >HOME</NavLink><br/>
        <NavLink exact to="/products" activeClassName="active">PRODUCTS</NavLink><br/>
        <NavLink to="/contact#email" activeClassName="active">CONTACT</NavLink><br/>
        <NavLink to="/products/12?orderby=price" activeClassName="active">PRODUCT DETAIL</NavLink>
    </nav>
)
const Header = () => (
    <header>
        <h1>Github Finder</h1>
    </header>
);
const HomePage = () => (
    <>
        <div> HomePage </div>
    </>
);
const ContactPage = (props) => {
    console.log(props);
    return (
        <>
            <div> ContactPage </div>
        </>
    );
}
const ProductsPage = () => (
    <>
        <div> ProductsPage </div>
    </>
);
const ProductDetailsPage = (props) => {
    console.log(props);
    return (
        <>
            <div> Product Details Page </div>
            <div>{props.match.params.id}</div>
        </>
    );
}
const NotFoundPage = () => (
    <>
        <div> 404 NotFound </div>
    </>
);

const AppRouter = () => (
    <BrowserRouter>
        <Header/>
        <Nav/>
        {/* contact/product componentlerinin path'leri içinde / simgesi olduğu için otomatikmen HomePage de döndürülür.exact sadece / gördüğünde HomePage in dönmesini sağlar */}
        {/* Switch rote lardan sadece birinin çaılışmasını sağlar . Aksi halde NotFound her durumda çalışır. */}
        <Switch>        
            <Route exact path="/" component={HomePage}  />
            <Route path="/contact" component={ContactPage}  />
            <Route exact path="/products" component={ProductsPage}  />
            <Route path="/products/:id" component={ProductDetailsPage}  />
            <Route component={NotFoundPage}  />
        </Switch>

    </BrowserRouter>
);

export default AppRouter;

