const ItemDetail = ({ ProductoSeleccionado }) => {
    console.log(ProductoSeleccionado);

    if (!ProductoSeleccionado) {
        return <div>Cargando...</div>;
    }

    return (
        <main className="item-detail">
            <h1 style={{ textTransform: "capitalize" }}>{ProductoSeleccionado.name}</h1>
            <section style={{ display: "flex" }}>
            <img src={ProductoSeleccionado.imagen}alt="" />

                <section className="producto-info">
                    <p>Description: {ProductoSeleccionado.description}</p>
                    <p>Stock: {ProductoSeleccionado.stock}</p>
                    <p>Price: {ProductoSeleccionado.price}</p>
                    <p>Category: {ProductoSeleccionado.categoria}</p> 
                </section>
            </section>
        </main>
    );
};

export default ItemDetail;
