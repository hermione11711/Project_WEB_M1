<template>

    <footer>
        <div class="container">
            <p>&copy; Mathis&Alexandre Corp. All rights reserved.</p>
            <p>Terms of Service | Privacy Policy | Cookie Policy</p>
        </div>
        <slot></slot>
    </footer>

</template>

<script>
export default {
    name: 'BaseFooter'
}
</script>

<style>
footer {
    background-color: #f5f5f5;
    padding: 20px 0;
    text-align: center;
    font-size: 14px;
    color: #666;
    width: 100%;
}
.container {
    max-width: 1200px;
    margin: 0 auto;
}
</style>