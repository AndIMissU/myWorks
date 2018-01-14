import Cookie from 'js-cookie'
const app = {
    state: { // 状态
        language: Cookie.get('language') || 'en'
    },
    mutations: { // 改变  规范页面状态的改变  只有下面的actions的和 getters可以改变数据
        // 专门负责改变状态的
        SET_LANGUAGE: (state, language) => {
            state.language = language;
            // 在cookies 里面种下 language 
            Cookie.set('language', language);
        }
    },
    actions: {
        // commit 负责的是 地方想修改中央的数据的
        // vuex 本质 地方不能修改中央的数据
        setLanguage({ commit }, language) {
            // SET_LANGUAGE 是mutations的名字  通过mitations里面的state得到language
            commit ('SET_LANGUAGE', language);
        }
    }
}
export default app