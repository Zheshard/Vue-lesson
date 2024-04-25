// Задание 1. Создать кнопку "Перевернуть". 
// При клике на кнопку текст кнопки должен перевернуться и отобразиться в обратном порядке.

new Vue({
    el: '#app',
    data: {
        btnText: "Перевернуть",
    },
    methods: {
        reverseText() {
            this.btnText = this.btnText.split("").reverse().join("");
        }
    },
})