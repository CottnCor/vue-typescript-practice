import { BlankLayout } from '@/layout';

import { Component, Emit, Prop, Vue, Watch } from 'vue-property-decorator';

import { Getter, Action, namespace } from 'vuex-class';

@Component({
    components: { BlankLayout }
})
class HomePage extends Vue {}

export default HomePage;