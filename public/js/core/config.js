Vue.use(VeeValidate, {
    aria: true,
    enableAutoClasses: true,
    classNames: { valid: 'is-valid', invalid: 'is-invalid' },
    classes: true,
    delay: 100,
    dictionary: null,
    errorBagName: 'errors',
    events: 'input|blur',
    fieldsBagName: 'fields',
    i18n: null,
    i18nRootKey: 'validations',
    inject: true,
    locale: 'pt_BR',
    strict: true,
    validity: false
});