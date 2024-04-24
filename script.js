const createBtn = document.querySelector('#create-btn')
const product = document.querySelector('#product')
const price = document.querySelector('#price')

createBtn.addEventListener('click', e => {
    if (!createBtn || !product) return alert('alert')
    const object = {
        product: product.value,
        price: price.value
    }
    localStorage.setItem('products', JSON.stringify(object))
})
