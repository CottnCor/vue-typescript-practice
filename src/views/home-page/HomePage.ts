
import { Component, Emit, Prop, Vue, Watch } from 'vue-property-decorator';

import { Getter, Action, namespace } from 'vuex-class';

import { BlankLayout } from '@/layout';

import { BlankCard } from '@/components';

@Component({
    components: { BlankLayout, BlankCard }
})
class HomePage extends Vue {}

export default HomePage;