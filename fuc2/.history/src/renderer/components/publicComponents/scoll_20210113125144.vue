<template>

</template>

<script>

</script>


<style scoped lang = "scss">
@import "../../assets/style/mixin.scss";

ul{
    width: 60px;
    height: 100%;
    top:0px;
    background-color: $white_color;
    padding:80px 16px 20px 16px;
    position: fixed;
    border-right:  #f4f4f7 1px solid;
}

/* 点击的图标 */
  i {
    font-size:28px;
    color:$color;
    display:flex;
    margin-top:40px;
    cursor: pointer;
    background-color:$white_color;

    &:hover{
    color:$Brand_Color;
  }
  }
</style>
