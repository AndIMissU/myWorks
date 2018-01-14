import Vue from 'vue'
import VueI18n from 'vue-i18n'
import enLocale from './en'
import zhLocale from './zh'
import elementEnLocale from 'element-ui/lib/locale/lang/en'
import elementZhLocale from 'element-ui/lib/locale/lang/zh-CN'
import Cookie from 'js-cookie'

Vue.use(VueI18n)
const messages = {
    en: {
        ...enLocale,
        ...elementEnLocale
    },
    zh: {
        ...zhLocale,
        ...elementZhLocale
    }
}
const i18n = new VueI18n({
    locale: Cookie.get('language')||'en',
      //set locale
    messages       // set locale messages
})

export default i18n