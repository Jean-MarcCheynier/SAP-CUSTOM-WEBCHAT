const config = (() => {
  let script
  if (typeof document !== 'undefined') {
    script = document && (document.currentScript || document.getElementById('cai-webchat'))
  }
  const apiRoot = (script && script.getAttribute('apiRoot')) || 'https://api.cai.tools.sap'

  return {
    apiUrl: `${apiRoot}${apiRoot.slice(-1) === '/' ? '' : '/'}connect/v1`,
    conversations: {
      defaultLang: 'en',
      changeLang: {
        en: 'Can we continue this conversation in %s?',
        de: 'Konnen wir auf %s sprechen?',
        fr: 'Pouvons-nous poursuivre cette conversation en %s?'
      },
      lang: {
        en: {
          en: 'English',
          fr: 'French',
          de: 'German'
        },
        fr: {
          en: 'Anglais',
          fr: 'Français',
          de: 'Allemand'
        },
        de: {
          en: 'English',
          fr: 'Fransözisch',
          de: 'Deutsch'
        }
      }
    }
  }
})()

export default config
