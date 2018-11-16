// Container identifier
const SEARCH_DIV_CLASS = 'form-controlGroup-inputWrapper addressLookup-fullAddress'
// Element identifiers
const SEARCH_TEXTFIELD_ID = "homepage-search-fullAddress"

export const get_new_page_form = () => {
  browser.waitForVisible(SEARCH_DIV_CLASS)
  return browser.element(SEARCH_DIV_CLASS)
}

export const enter_area_in_search = (area) => {
  var search = get_new_page_form()
  search.setValue(SEARCH_TEXTFIELD_ID, area)
}

export const select_first_suggestion = {
   var search = get_new_page_form()
  search.click()
}
