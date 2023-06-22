<template>
</template>

<script lang="ts">
    import { Vue, Component } from "vue-property-decorator"

    @Component
    export default class SeparatePanelComponent extends Vue {

        public navigation: any = {
            shown: true,
            width: 600,
            borderSize: 3
        }

        mounted() {
            this.setBorderWidth();
            this.setEvents();
        }

        setBorderWidth() {
            const drawer: any = this.$refs.drawer;
            let i: any = drawer?.$el.querySelector(".v-navigation-drawer__border");
            i.style.width = this.navigation.borderSize + "px";
            i.style.cursor = "ew-resize";
            i.style.backgroundColor = "lightgrey";
        }

        setEvents() {
            const minSize = this.navigation.borderSize;
            const drawer: any = this.$refs.drawer;
            const el: any = drawer?.$el;
            const drawerBorder = el.querySelector(".v-navigation-drawer__border");
            const direction = el.classList.contains("v-navigation-drawer--right") ? "right" : "left";

            function resize(e: any) {
                document.body.style.cursor = "ew-resize";
                let f = direction === "right" ? document.body.scrollWidth - e.clientX : e.clientX;
                el.style.width = f + "px";
            }

            drawerBorder.addEventListener("mousedown", (e: any) => {
                if (e.offsetX < minSize) {
                    el.style.transition = "initial";
                    document.addEventListener("mousemove", resize, false);
                }

            }, false);

            document.addEventListener("mouseup", () => {
                el.style.transition = "";
                this.navigation.width = el.style.width;
                document.body.style.cursor = "";
                document.removeEventListener("mousemove", resize, false);

            }, false);
        }
    }
</script>