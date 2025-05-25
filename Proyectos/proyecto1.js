const orderList = document.getElementById('orderList');
const addOrderBtn = document.getElementById('addOrderBtn');

let orderId = 1; // Para identificar los pedidos

addOrderBtn.addEventListener('click', () => 
{
    const order = { id: orderId++, status: 'En Proceso' };
    addOrder(order);
    processOrder(order);
});

function addOrder(order) 
{
    const listItem = document.createElement('li');
    listItem.id = `order-${order.id}`;
    listItem.textContent = `Pedido #${order.id}: ${order.status}`;
    orderList.appendChild(listItem);
}

function updateOrderStatus(order, status) 
{
    const listItem = document.getElementById(`order-${order.id}`);
    if (listItem) 
    {
        listItem.textContent = `Pedido #${order.id}: ${status}`;
    }
}

async function processOrder(order) 
{
    // TODO: Simular la preparación del pedido usando setTimeout y Promise
    const promesa = new Promise((resolve, reject) => 
    {
        setTimeout(() => resolve(), 1000);
    });

    promesa.then(resultado => 
    {
        const listItem = document.createElement('p');
        listItem.id = `order-${order.id}`;
        listItem.textContent = `Preparando pedido #${order.id}`;
        orderList.appendChild(listItem);
    });
    // TODO: Actualizar el estado del pedido a "Completado"
    setTimeout(() => 
    {
        const listItem = document.createElement('p');
        listItem.id = `order-${order.id}`;
        listItem.textContent = `Pedido #${order.id} realizado`;
        orderList.appendChild(listItem);
        updateOrderStatus(order, "Completado");
    }, 3000);
}