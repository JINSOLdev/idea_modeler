<template>
    <div>
        <v-card flat>
            <v-card-title class="subtitle-1 d-flex">
                <div class="mr-auto">
                    Exceptions
                </div>
                <v-btn @click="addExcept" icon>
                    <v-icon>mdi-plus</v-icon>
                </v-btn>
            </v-card-title>

            <v-card-text>
                <div v-for="(item, index) in getExcept"
                        :key="item.id+index"
                >
                    <variables-field
                            :value.sync="item.variables"
                            :label="'Except'"
                            :isMultiple="true"
                    >
                        <template slot="title-area">
                            <v-btn @click="delExcept(item)" icon>
                                <v-icon>mdi-delete-outline</v-icon>
                            </v-btn>
                        </template>

                        <template slot="no-value-area">
                            <span v-if="item.variables == null || item.variables.length == 0">
                                No except patterns set
                            </span>
                        </template>
                    </variables-field>
                </div>

                <v-divider class="my-6"></v-divider>

                <div v-for="item in value.property.branch"
                        :key="item.id"
                >
                    <v-switch
                            v-if="item.name == 'Else' || item.name == 'Finally'"
                            v-model="item.status"
                            :label="`${item.name} Branch`"
                            class="py-0"
                    ></v-switch>
                </div>
            </v-card-text>
        </v-card>
    </div>
</template>

<script lang="ts">
    import { Component, Mixins, Watch } from "vue-property-decorator"
    import ControlPanel from "../panels/ControlPanel.vue";

    @Component({
        components: {
            ControlPanel,
        }
    })

    export default class TryExceptTaskPanel extends Mixins(ControlPanel) {
        public getExcept: any = null
        
        mounted() {
            var list = this.value.property.branch.filter((item: any) => item.name == 'Except')
            this.$set(this, "getExcept", list)
        }

        addExcept() {
            var lengthIndex = this.value.property.branch.filter((item: any) => item.name == 'Except').length
            var obj = {
                id: `except_${++lengthIndex}`,
                name: 'Except',
                status: true,
                variables: null,
                child: []
            }
            let newBranch = this.value.property.branch
            newBranch.splice(lengthIndex, 0, obj)
            var list = newBranch.filter((item: any) => item.name == 'Except')

            this.$set(this.value.property, "branch", newBranch)
            this.$set(this, "getExcept", list)
        }

        delExcept(value: any) {
            var newBranch = this.value.property.branch.filter((item: any) => item.id != value.id)
            var list = newBranch.filter((item: any) => item.name == 'Except')

            this.$set(this.value.property, "branch", newBranch)
            this.$set(this, "getExcept", list)
        }
    }
</script>