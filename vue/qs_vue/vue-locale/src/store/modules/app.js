import Cookie from 'js-cookie'
const app = {
    state: { // 状态
        language: Cookie.get('language') || 'en'
    },
    mutations: { // 改变  规范页面状态的改变  只有下面的actions的和 getters可以改变数据
        SET_LANGUAGE: (state, language) => {
            state.language = language;
            // 在cookies 里面种下 language 
            Cookie.set('language', language);
        }
    },
    actions: {
        setLanguage({ commit }, language) {
            // SET_LANGUAGE 是mutations的名字  通过mitations里面的state得到language
            commit ('SET_LANGUAGE', language);
        }
    }
}
export default app