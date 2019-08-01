<template>
    <div class="pagination">
        <slot name="articles" :elements="elements" :current-page="currentPage" :items="items"></slot>
        <div class="not-found" v-if="!elements">
            К сожалению ничего не найдено :(
        </div>
        <div class="btn-container" v-if="currentPage <= countOfPages && items.length > maxElementsPage">
            <nuxt-link class="btn-link control-pagination" :class="{ stop: currentPage - 1 < 1 }" :to="`${path}/${currentPage - 1}`">
                <v-icon>fas fa-arrow-left</v-icon>
            </nuxt-link>

            <nuxt-link class="btn-link" v-for="(link, i) in buttons" :key="i" :to="link.path" :class="{ active: link.page === currentPage }">
                {{ link.page }}
            </nuxt-link>

            <nuxt-link class="btn-link control-pagination" :class="{ stop: currentPage + 1 > countOfPages }" :to="`${path}/${currentPage + 1}`">
                <v-icon>fas fa-arrow-right</v-icon>
            </nuxt-link>
        </div>
    </div>
</template>

<script>
    export default {
        name: "pagination",
        props: {
            maxElementsPage: {
                type: Number,
                required: true
            },
            maxButtonCount: {
                type: Number,
                required: true
            },
            items: {
                type: Array,
                required: true
            },
            currentPage: {
                type: Number,
                default: 1
            },
            path: {
                type: String
            }
        },
        data() {
            return {};
        },
        computed: {
            countOfPages() {
                const pages = Math.round(this.items.length / this.maxElementsPage);
                return pages <= 0 ? 1 : pages;
            },
            elements() {
                return this.pages[this.currentPage - 1];
            },
            pages() {
                return Array.from({ length: this.countOfPages }, (it, i) => {
                    return this.items.slice(this.maxElementsPage * i, this.maxElementsPage * (i + 1));
                });
            },
            buttons() {
                const vm = this;
                let currentPage = this.currentPage;
                const buttons = {
                    [Symbol.iterator]: function*() {
                        for(const key of Object.keys(this)) {
                            yield this[key];
                        }
                    },
                    [1]: {
                        page: 1,
                        get path() {
                            return `${vm.path}/${this.page}`
                        }
                    }
                };

                currentPage === 1 ? currentPage++ : null;

                if(this.countOfPages > 1) buttons[this.countOfPages] = {
                    page: this.countOfPages,
                    get path() {
                        return `${vm.path}/${this.page}`
                    }
                };

                if(this.maxButtonCount >= this.countOfPages - (this.currentPage - 1)) {
                    const totalButtonPages = this.currentPage > this.maxButtonCount ? this.countOfPages - this.maxButtonCount : 1;
                    Array.from({ length: this.maxButtonCount }).forEach((it, i) => {
                        buttons[totalButtonPages + i <= this.countOfPages ? totalButtonPages + i : this.countOfPages] = {
                            page: totalButtonPages + i <= this.countOfPages ? totalButtonPages + i : this.countOfPages,
                            get path() {
                                return `${vm.path}/${this.page}`
                            }
                        }
                    });
                } else {
                    Array.from({
                        length: Math.min(this.maxButtonCount, this.countOfPages - (this.currentPage - 1))
                    }).forEach((it, i) => {
                        buttons[currentPage + i] = {
                            page: currentPage + i,
                            get path() {
                                return `${vm.path}/${this.page}`
                            }
                        }
                    });
                }

                return buttons;
            }
        }
    }
</script>

<style lang="scss" scoped>
    .pagination {
        width: 100%;
    }

    .btn-container {
        --col-offset: 5px;
        --btn-padd: 6px 14px;
        display: flex;
        justify-content: center;
        align-items: center;
        .btn-link {
            flex-grow: 1;
            margin: 0 var(--col-offset);
            border: 1px solid #fb9761;
            padding: var(--btn-padd);
            display: flex;
            justify-content: center;
            align-items: center;
            color: #fb9761;
            font-weight: 500;
            max-width: max-content;
            &.active {
                background-color: #fb9761;
                color: #fff;
            }
            &.stop {
                pointer-events: none;
                cursor: default;
                border-color: rgba(0, 0, 0, 0.29);
                opacity: .55;
            }
            &.control-pagination {
                border-color: transparent;
            }
        }
    }

    .not-found {
        background-color: #fff;
        padding: 30px;
        width: 100%;
        margin-bottom: 30px;
        min-width: 100%;
        max-width: 100%;
        border-radius: 6px;
        border: 1px solid #c4cff0;
    }

    a {
        text-decoration: none;
    }
</style>
