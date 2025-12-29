<template>
    <div class="p-2 rounded overflow-hidden shadow-md section-filters">
        <div class="mb-2">
            <div class="flex flex-wrap -mx-3">
                <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                    <input :checked="filters.ashkin" @change="updateFilters($event, 'ashkin')" id="ashkinCheckbox" class="mr-2 leading-tight" type="checkbox">
                    <label for="ashkinCheckbox" class="text-sm font-bold">
                        {{ translate('Ashkin') }}
                    </label>
                </div>
                <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                    <input :checked="filters.sprite" @change="updateFilters($event, 'sprite')" id="spriteCheckbox" class="mr-2 leading-tight" type="checkbox">
                    <label for="spriteCheckbox" class="text-sm font-bold">
                        {{ translate('Sprite') }}
                    </label>
                </div>
            </div>
        </div>
        <div class="mb-2">
            <div class="flex flex-wrap -mx-3">
                <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                    <input :checked="filters.fate" @change="updateFilters($event, 'fate')" id="fateCheckbox" class="mr-2 leading-tight" type="checkbox">
                    <label for="fateCheckbox" class="text-sm font-bold">
                        {{ translate('FATE') }}
                    </label>
                </div>
                <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                    <label class="block text-sm font-bold mb-2" for="username">
                        {{ translate('Aggro') }}
                    </label>
                    <div class="inline-block relative w-full">
                        <select :value="filters.aggro" @change="updateFilters($event, 'aggro')" class="shadow appearance-none border rounded w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline">
                            <option value="">{{ translate('Any') }}</option>
                            <option value='sight'>{{ translate('Sight') }}</option>
                            <option value='truesight'>{{ translate('Truesight') }}</option>
                            <option value='magic'>{{ translate('Magic') }}</option>
                            <option value='sound'>{{ translate('Sound') }}</option>
                            <option value='blood'>{{ translate('Blood') }}</option>
                        </select>
                        <div class="pointer-events-none absolute flex items-center px-2 inset-y-0 right-0">
                            <svg class="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="mb-2">
            <div class="flex flex-wrap -mx-3">
                <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                    <input :checked="filters.mutates" @change="updateFilters($event, 'mutates')" id="mutationCheckbox" class="mr-2 leading-tight" type="checkbox">
                    <label for="mutationCheckbox" class="text-sm font-bold">
                        {{ translate('Mutates') }}
                    </label>
                </div>
                <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                    <input :checked="filters.adapts" @change="updateFilters($event, 'adapts')" id="adaptationCheckbox" class="mr-2 leading-tight" type="checkbox">
                    <label for="adaptationCheckbox" class="text-sm font-bold">
                        {{ translate('Adapts') }}
                    </label>
                </div>
            </div>
        </div>
        <div class="mb-2">
            <div class="flex flex-wrap -mx-3">
                <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                    <label :title="translate('Mutation/Adaptation Weather')" class="block text-sm font-bold mb-2" for="username">
                        {{ translate('Weather') }}
                    </label>
                    <div class="inline-block relative w-full">
                        <select :value="filters.maweather" @change="updateFilters($event, 'maweather')" class="shadow appearance-none border rounded w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline">
                            <option value="">{{ translate('Any') }}</option>
                            <option value='fairskies'>{{ translate('Fair Skies') }}</option>
                            <option value='heatwave'>{{ translate('Heat Wave') }}</option>
                            <option value='snow'>{{ translate('Snow') }}</option>
                            <option value='blizzard'>{{ translate('Blizzard') }}</option>
                            <option value='showers'>{{ translate('Showers') }}</option>
                            <option value='thunderstorm'>{{ translate('Thunderstorm') }}</option>
                            <option value='fog'>{{ translate('Fog') }}</option>
                            <option value='umbralwind'>{{ translate('Umbral Wind') }}</option>
                            <option value='gales'>{{ translate('Gales') }}</option>
                            <option value='gloom'>{{ translate('Gloom') }}</option>
                        </select>
                        <div class="pointer-events-none absolute flex items-center px-2 inset-y-0 right-0">
                            <svg class="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
                        </div>
                    </div>
                </div>
                <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                    <label :title="translate('Mutation/Adaptation Time')" class="block text-sm font-bold mb-2" for="username">
                        {{ translate('Time') }}
                    </label>
                    <div class="inline-block relative w-full">
                        <select :value="filters.matime" @change="updateFilters($event, 'matime')" class="shadow appearance-none border rounded w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline">
                            <option value="">{{ translate('Any') }}</option>
                            <option value='day'>{{ translate('Day') }}</option>
                            <option value='night'>{{ translate('Night') }}</option>
                        </select>
                        <div class="pointer-events-none absolute flex items-center px-2 inset-y-0 right-0">
                            <svg class="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="mb-2">
            <div class="flex flex-wrap -mx-3">
                <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                    <label class="block text-sm font-bold mb-2" for="username">
                        {{ translate('Mutation Element') }}
                    </label>
                    <div class="inline-block relative w-full">
                        <select :value="filters.mutateElement" @change="updateFilters($event, 'mutateElement')" class="shadow appearance-none border rounded w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline">
                            <option value="">{{ translate('Any') }}</option>
                            <option value='fire'>{{ translate('Fire') }}</option>
                            <option value='earth'>{{ translate('Earth') }}</option>
                            <option value='lightning'>{{ translate('Lightning') }}</option>
                            <option value='water'>{{ translate('Water') }}</option>
                            <option value='wind'>{{ translate('Wind') }}</option>
                            <option value='ice'>{{ translate('Ice') }}</option>
                        </select>
                        <div class="pointer-events-none absolute flex items-center px-2 inset-y-0 right-0">
                            <svg class="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    // --- 注入漢化邏輯 ---
    import nameMapping from '@/i18n/mapping.json'
    import i18n from '@/i18n/config'

    export default {
        name: 'monsters',
        props: {
            filters: {
                type: Object
            }
        },
        data() {
            return {
                checkboxKeys: [
                    'ashkin',
                    'sprite',
                    'fate',
                    'mutates',
                    'adapts'
                ]
            }
        },
        methods: {
            // --- 漢化核心函式 ---
            translate(text) {
                if (!text) return '';
                if (i18n.language.startsWith('zh')) {
                    return nameMapping[text] || text;
                }
                return text;
            },
            updateFilters(evt, key) {
                // 注意：這裡修正了原代碼中 event (應為 evt) 的小錯誤
                this.$emit('updateFilters', Object.assign(this.filters, {[key]: this.checkboxKeys.includes(key) ? evt.target.checked : evt.target.value}))
            }
        }
    }
</script>