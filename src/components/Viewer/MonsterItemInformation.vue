<template>
    <div>
        <div>
            <span class="font-bold">{{ translate('Level') }}:</span> {{ item.level }}
        </div>
        <div>
            <span class="font-bold">{{ translate('Element') }}:</span> {{ element }}
        </div>
        <div>
            <Coordinates :positions="item.position"></Coordinates>
        </div>
        <div v-if="item.fate.forFate">
            <span class="font-bold">{{ translate('Spawns Fate') }}:</span> {{ fate }}
        </div>
        <div v-if="item.mutation.canMutate">
            <span class="font-bold">{{ translate('Mutated Element') }}:</span> {{ mutatedElement }}<br>
            <span class="font-bold">{{ translate('Mutation Conditions') }}:</span>
            <div class="pl-3" v-html="mutateConditions"></div>
        </div>
        <div v-if="item.adaptation.canAdapt">
            <span class="font-bold">{{ translate('Adaptation Conditions') }}:</span>
            <div class="pl-3" v-html="adaptConditions"></div>
        </div>
    </div>
</template>

<script>
    import i18n from '@/i18n/config' // 匯入 i18n 設定
    import nameMapping from '@/i18n/mapping.json' // 匯入翻譯對照表
    import Coordinates from './ItemInformation/Coordinates'        

    export default {
        name: 'monster-item-information',
        components: {
            Coordinates
        },
        props: {
            item: {
                type: Object,
                required: true
            },
            fates: {
                type: Array,
                required: true
            }
        },
        data() {
            return {
                weather: {
                    fairskies: 'Fair Skies',
                    heatwave: 'Heat Wave',
                    snow: 'Snow',
                    blizzard: 'Blizzard',
                    showers: 'Showers',
                    thunderstorm: 'Thunderstorm',
                    fog: 'Fog',
                    umbralwind: 'Umbral Wind',
                    gales: 'Gales',
                    gloom: 'Gloom'
                }
            }
        },
        computed: {
            currentLang() {
                const lang = i18n?.language || localStorage.getItem('i18nextLng') || 'en';
                return lang.startsWith('zh') ? 'zh' : 'en';
            },
            adaptConditions() {
                const conditions = {}
                this.item.adaptation.conditions.forEach(condition => {
                    if (!conditions.hasOwnProperty(condition.weather)) {
                        conditions[condition.weather] = []
                    }
                    conditions[condition.weather].push(this.translate(condition.time.charAt(0).toUpperCase() + condition.time.slice(1)))
                })
                let conditionString = ''
                Object.keys(conditions).forEach((key) => {
                    conditionString += `<div><span class="font-bold">${this.translate(this.weather[key])}:</span> ${conditions[key].sort().join('/')}</div>`
                })

                return conditionString
            },
            mutateConditions() {
                const conditions = {}
                this.item.mutation.conditions.forEach(condition => {
                    if (!conditions.hasOwnProperty(condition.weather)) {
                        conditions[condition.weather] = []
                    }
                    conditions[condition.weather].push(this.translate(condition.time.charAt(0).toUpperCase() + condition.time.slice(1)))
                })
                let conditionString = ''
                Object.keys(conditions).forEach((key) => {
                    conditionString += `<div><span class="font-bold">${this.translate(this.weather[key])}:</span> ${conditions[key].sort().join('/')}</div>`
                })

                return conditionString
            },
            element() {
                const el = this.item.element.charAt(0).toUpperCase() + this.item.element.slice(1)
                return this.translate(el)
            },
            mutatedElement() {
                const el = this.item.mutation.element.charAt(0).toUpperCase() + this.item.mutation.element.slice(1)
                return this.translate(el)
            },
            fate() {
                if (this.item.fate.fateId == '') {
                    return ''
                }

                const fate = this.fates.find(fate => {
                    return fate.id == this.item.fate.fateId
                })

                const translatedFateName = this.translate(fate.name)
                return `${translatedFateName} (${fate.position.x}, ${fate.position.y})`
            }
        },
        methods: {
            // 共用的翻譯方法
            translate(text) {
                if (!text) return '';
                if (this.currentLang === 'zh') {
                    return nameMapping[text] || text;
                }
                return text;
            }
        }
    }
</script>