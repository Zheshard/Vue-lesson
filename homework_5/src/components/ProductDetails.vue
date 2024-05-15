<template>
  <div>
    <div class="product">
        <h3 class="product__name">{{ product.name }}</h3>
        <p class="product__name">{{ formattedPrice }}</p>
        <div class="product__available">
            <template v-if="product.available">Available</template>
            <template v-else>Out of stock</template>
        </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ProductDetails',

  data () {
    return {
      product: {
        name: 'Product 1',
        price: 99.99,
        available: true
      }
    //   product: {
    //     name: 'Product 1',
    //     price: 99.99,
    //     available: true
    //   }
    }
  },

  mounted () {

  },

  methods: {

  },

  computed: {
    formattedPrice () {
      return `$${this.product.price}`
    }
  }
}
</script>

<!-- Вы разрабатываете приложение для интернет-магазина и у вас есть компонент Vue под названием "ProductDetails". Компонент отображает детали о конкретном продукте, включая его название, цену и статус доступности.

Внутри компонента "ProductDetails" создайте свойство "product" с объектом, представляющим информацию о продукте. Объект должен иметь свойства "name" (название продукта), "price" (цена продукта) и "available" (флаг, указывающий на доступность продукта).

Используя вычисляемое свойство, назовите его "formattedPrice", которое будет возвращать форматированную цену продукта со знаком валюты. Например, если цена равна 99.99, вычисляемое свойство должно вернуть строку "$99.99".

В компоненте "ProductDetails" отобразите название продукта, его форматированную цену и статус доступности.

Если продукт доступен, отобразите текст "Available", в противном случае - "Out of stock". -->
