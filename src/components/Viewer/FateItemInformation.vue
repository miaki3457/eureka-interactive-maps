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
        <div v-if="item.boss">
            <span class="font-bold">{{ translate('Boss') }}:</span> {{ translate(item.boss.name) }}
        </div>
        <div v-if="item.weather">
            <span class="font-bold">{{ translate('Weather') }}:</span> {{ translate(weather[item.weather]) }}
        </div>
        <div>
            <span class="font-bold">{{ translate('Spawns Fate') }}:</span> {{ monster }}
        </div>
    </div>
</template>

<script>
    import Coordinates from './ItemInformation/Coordinates'
    import i18n from '@/i18n/config'
    import nameMapping from '@/i18n/mapping.json'

    export default {
        name: 'fate-item-information',
        components: {
            Coordinates
        },
        props: {
            item: {
                type: Object,
                required: true
            },
            monsters: {
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
            // 取得目前的語言狀態
            currentLang() {
                const lang = i18n?.language || localStorage.getItem('i18nextLng') || 'en';
                return lang.startsWith('zh') ? 'zh' : 'en';
            },
            element() {
                const el = this.item.element.charAt(0).toUpperCase() + this.item.element.slice(1)
                return this.translate(el)
            },
            monster() {
                const monster = this.monsters.find(monster => {
                    return this.item.id == monster.fate.fateId
                })
                if (monster) {
                    const translatedName = this.translate(monster.name)
                    return `${translatedName} (${monster.position.x}, ${monster.position.y})`
                }

                return ''
            }
        },
        methods: {
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