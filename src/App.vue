<template>
    <div id="app">
        <div id="nav">
            <ul>
                <li>
                    <router-link to="/form">Form: 具有数据校验功能的表达组件</router-link>
                </li>
                <li>
                    <router-link to="/display">Display: 动态渲染 .vue 组件</router-link>
                </li>
            </ul>
        </div>
        <router-view></router-view>
    </div>
</template>

<script>
    export default {

    }
</script>