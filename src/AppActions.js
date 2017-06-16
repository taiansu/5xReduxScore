const tally = (lang) => ({
  type: "TALLY",
  lang,
})

const addLang = (name) => ({
  type: "ADD_LANG",
  name,
})

module.exports = {tally, addLang}
