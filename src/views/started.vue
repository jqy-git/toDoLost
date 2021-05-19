<template>
  <div>
    <input v-model="inputValue" @keydown.enter="add" /><button @click="add2">
      添加
    </button>
  </div>
  <button @click="gotoCompleted">去已完成页面</button>
  <div>
    正在进行:{{ startedSum }}
    <ul v-for="(item, index) in started" :key="index">
      <li>
        {{ item }}
        <a @click="() => delStarted(index)" style="margin-left: 50px">删除</a>
        <a @click="() => addCompleted(item, index)" style="margin-left: 50px">已完成</a>
      </li>
    </ul>
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  name: "start",
  data() {
    return {
      inputValue: "",
    };
  },
  methods: {
    add() {
      this.$store.commit("add", this.inputValue);
      this.inputValue = "";
    },

    delStarted (index) {
      this.$store.commit("delStarted", index);
    },

    addCompleted(item, index){
      this.$store.commit("addCompleted",item)
      this.delStarted(index)
    },
    gotoCompleted: function () {
      this.$router.push({ path: "/completed" });
    },
  },

  computed: {
    ...mapState(["started","startedSum"]),
  },
};
</script>

<style scoped>
</style>
