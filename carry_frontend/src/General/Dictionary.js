class Dictionary {
    dictionary = {};
    languageDictionary = localStorage.getItem('language') || 'ES';

    init() {
        this.setDictionary(JSON.parse(localStorage.getItem('dictionary') || '{}'));
    }

    setDictionary(data) {
        this.dictionary = data || this.dictionary;
        localStorage.setItem('dictionary', JSON.stringify(data || '{}'));
    }

    setLanguage(languageCode) {
        this.languageDictionary = languageCode === 'EN' || languageCode === 'English' ? 'EN' : languageCode === 'ES' || languageCode === 'Spanish' ? 'ES' : languageCode;
        localStorage.setItem('language', this.languageDictionary);
    }

    getLanguage() {
        return this.languageDictionary;
    }

    s(key, params) {
        return !this.dictionary[key] ? '-' + key + '-' : !params ? this.dictionary[key] : this.dictionary[key].replace(/\{\d\}/g, (val) => { return params[parseFloat(val.match(/\d/g)[0])]; });
    }
}

const dictionary = new Dictionary();
export default dictionary;
