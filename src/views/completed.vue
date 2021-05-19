<template>
  <div>
    已完成:{{completedSum}}
    <button @click="gotoStarted">去正在进行页面</button>
    <ul class="completed" v-for="(item, index) in completed" :key="index">
      <li>{{ item }} <a @click="() => delCompleted(index)" style="margin-left:50px">删除</a></li>
    </ul>
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  name: "complete",
  methods: {
    delCompleted: function (index) {
      this.$store.commit("delCompleted", index);
    },
    gotoStarted:function(){
      this.$router.push({ path: "/started" });
    }
  },
  computed:{
    ...mapState(['completed','completedSum'])
  }
};
</script>

<style scoped>
</style>
