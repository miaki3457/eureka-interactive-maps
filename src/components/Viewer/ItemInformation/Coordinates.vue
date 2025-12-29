<template>
    <div class="flex">
        <div class="font-bold mr-2 flex-shrink-0">{{ translate('Coordinates') }}:</div> 
        <div>
            <div v-for="(position, index) in cPositions" :key="index">
                ({{ position.x }}, {{ position.y }})
            </div>
        </div>
    </div>
</template>

<script>
    import i18n from '@/i18n/config'
    import nameMapping from '@/i18n/mapping.json'

    export default {
        name: 'coordinates',
        props:{
            positions: {
                type: [Array, Object],
                required: true
            }
        },
        computed: {
            cPositions() {
                return Array.isArray(this.positions) ? this.positions : [this.positions]
            }
        },
        methods: {
            // 加入通用的翻譯邏輯
            translate(text) {
                if (!text) return '';
                const lang = i18n?.language || localStorage.getItem('i18nextLng') || 'en';
                if (lang.startsWith('zh')) {
                    return nameMapping[text] || text;
                }
                return text;
            }
        }
    }
</script>