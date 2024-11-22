// Home.js
import React, { useContext, useEffect } from "react";
import { Row, Col, Card, Button, Carousel } from 'react-bootstrap';
import { Context } from "../store/appContext";
import CountdownTimer from './CountdownTimer';
import "../../styles/home.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import { Link } from "react-router-dom";

export const Home = () => {
    const { actions, store } = useContext(Context);

    useEffect(() => {
        // Obtener productos desde el backend cuando el componente se monte
        actions.getProducts();
    }, [actions]);

    // Comprobamos si los productos están cargados desde el backend
    const featuredProducts = store.products || [];

    const categories = [
        {
            id: 1,
            name: "Auriculares y Accesorios",
            imageUrl: "https://res.cloudinary.com/dsgltzpu7/image/upload/v1731435335/categoria_auriculares-removebg-preview_akqmze.png",
            path:"/earphones"
        },
        {
            id: 2,
            name: "Fotografía y Videocámaras",
            imageUrl: "https://res.cloudinary.com/dsgltzpu7/image/upload/v1731436387/71OC3bVqbuL._AC_SL1500_-removebg-preview_f9lsa9.png",
            path:"/photographypage"
        },
        {
            id: 3,
            name: "Productos Gaming",
            imageUrl: "https://res.cloudinary.com/dsgltzpu7/image/upload/v1731437141/silla_gaming-removebg-preview_i7jgwd.png",
            path:"/gamingPages"
        },
        {
            id: 4,
            name: "Wearables",
            imageUrl: "https://res.cloudinary.com/dsgltzpu7/image/upload/v1731438764/reloj-removebg-preview_kyowl3.png",
            path:"/wearablesPage"
        },
        {
            id: 5,
            name: "Cargadores y Adaptadores",
            imageUrl: "https://res.cloudinary.com/dsgltzpu7/image/upload/v1731439092/cargador_wveqyh.jpg",
            path:"/chargerPage"
        },
        {
            id: 6,
            name: "Electrodomésticos inteligentes",
            imageUrl: "https://res.cloudinary.com/dsgltzpu7/image/upload/v1731345781/71W2eDGsAJL._AC_SX569__lr1lgu.jpg",
            path:"/smartPage"
        },
        {
            id: 7,
            name: "Accesorios para PC",
            imageUrl: "https://res.cloudinary.com/dsgltzpu7/image/upload/v1731439769/teclado_grdafp.jpg",
            path:"/pcPage"
        },
    ];

    const renderProduct = (product) => (
        <Col key={product.id} md={4} className="mb-4">
            <Card className="h-100">
                <Card.Img className="zoom-image card-img-top" variant="top" src={product.imageUrl} alt={product.name} />
                <Card.Body className="d-flex flex-column">
                    <Card.Title>{product.name}</Card.Title>
                    <Card.Text>${product.price.toFixed(2)}</Card.Text>
    
                    {/* Contenedor de botones centrados */}
                    <div className="d-flex justify-content-center gap-3 mt-auto">
                        <Button variant="outline-warning" className="d-flex align-items-center" onClick={() => actions.addToCart(product)}>
                            <i className="fas fa-shopping-cart"></i>
                        </Button>
                        <Button variant="outline-danger" className="d-flex align-items-center" onClick={() => actions.addToFavorites(product)}>
                            <i className="fas fa-heart"></i>
                        </Button>
                    </div>
                </Card.Body>
            </Card>
        </Col>
    );

    const renderCategory = (category) => (
        <Col key={category.id} md={3} className="category-item text-center">
             <Link to={category.path} className="text-decoration-none text-dark">
            <img className="zoom-image" src={category.imageUrl} alt={category.name} style={{ width: "100%", height: "auto", maxHeight: "150px", objectFit: "contain" }} />
            <h5 className="mt-2">{category.name}</h5>
        </Link>
    </Col>
    );

    return (
        <div className="home">
            {/* Categorías de productos */}
            <section className="categories mt-4">
                <Row className="justify-content-center">
                    {categories.map(renderCategory)}
                </Row>
            </section>

            {/* Productos destacados */}
            <section className="featured-products mt-4">
                <h2 className="text-center">Ofertas destacadas</h2>
                <p>Del 21 de Noviembre al 2 de Diciembre de 2024</p>

                {/* Temporizador de cuenta regresiva */}
                <CountdownTimer targetDate="2024-12-02T23:59:59" /> {/* Fecha ajustada a 2 de diciembre de 2024 */}

                <Carousel controls={true} indicators={false} interval={null} className="featured-carousel">
                    {Array.from({ length: Math.ceil(featuredProducts.length / 3) }).map((_, index) => {
                        const productsToShow = featuredProducts.slice(index * 3, (index + 1) * 3);
                        return (
                            <Carousel.Item key={index}>
                                <Row className="justify-content-center">
                                    {productsToShow.map(renderProduct)}
                                </Row>
                            </Carousel.Item>
                        );
                    })}
                </Carousel>
            </section>
        </div>
    );
};



