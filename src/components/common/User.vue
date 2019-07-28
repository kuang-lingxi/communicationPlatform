<template>
    <div id="content">
        <el-avatar
            :src="imgUrl"
            fit="cover"
            class="image"
        />
        <div class="name">{{username}}</div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            
        }
    },
    props:['imgUrl', 'username']
}
</script>

<style scoped>
    #content {
        /* width:50px; */
        text-align: center;
    }
    .name {
        font-size:10px;
        color: #adb2b6;
    }
    .image {
        margin: 0 auto;
    }
</style>
