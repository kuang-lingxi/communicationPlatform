<template>
    <router-link :to="componentName" class="link" tag="span">
        {{text}}
    </router-link>
</template>

<script>
export default {
    name: 'Link',
    props:['componentName', 'text']
}
</script>

<style lang="scss" scoped>
  /*设置路由高亮*/
  .router-link-active{
    position: relative;
    color:red;

    &::after {
        content: '';
        display: block;

        position: absolute;
        top: 30px;
        left: 10%;

        height: 2px;
        width: 80%;
        background-color: red;
    }
  }
  /*设置手指型鼠标*/
  .link{
    cursor: pointer;
  }
</style>

