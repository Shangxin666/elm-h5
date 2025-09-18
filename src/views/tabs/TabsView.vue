<template>
  <RouterView></RouterView>
  <Tabbar v-model="active">
    <TabbarItem name="home" icon="home-o">首页</TabbarItem>
    <TabbarItem name="order" icon="bars">订单</TabbarItem>
    <TabbarItem name="me" icon="contact">我的</TabbarItem>
  </Tabbar>
</template>

<script setup lang="ts">
import { Tabbar, TabbarItem } from 'vant'
import { ref, watch } from 'vue'
import { RouterView, useRoute, useRouter } from 'vue-router'

const route = useRoute()

const active = ref(route.name as string)

const router = useRouter()

watch(active, (newValue) => {
  router.push({
    name: newValue,
  })
})
</script>

<style scoped lang="less"></style>
