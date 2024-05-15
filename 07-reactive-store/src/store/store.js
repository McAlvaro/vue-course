import { reactive } from "vue";

const store = reactive({
    balance: 1000,
    addBalance() {
        this.balance += 100;
    },
    subBalance() {
        this.balance -= 100;
    }
});

export default store;
