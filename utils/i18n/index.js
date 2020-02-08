import get from 'lodash/get'
class TransLator {
  template
  setTemplate (template) {
    this.template = JSON.parse(template)
  }

  /**
   *
   * @param {string} templateKey
   * @param  {...string} args
   */
  translate = (templateKey, ...args) => {
    let length = 0
    if (args.length === 0) {
      return get(this.template, templateKey)
    }
    return get(this.template, templateKey).replace(/%s/g, (word) => {
      return args[length++]
    })
  }
}

export default TransLator
