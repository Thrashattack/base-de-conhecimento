<template>
    <footer class="footer">
        <span>Copyrigth <strong>Thrashattack</strong> © 2019</span>
    </footer>
</template>

<script>
export default {
    name: 'Footer'
}
</script>

<style>
    .footer {
        grid-area: footer;
        background-color: #bbb;
        color: #333;
        
        display: flex;
        align-items: center;
        justify-content: flex-end;
        padding-right: 10px;
    }
</style>
