const searchpo = require('../page_objects/search_po')

export const fillInAreaCode = (areaCode) => {
  browser.url("http://menulog.com.au")
  searchpo.enter_area_in_search(areaCode)
}

export const menuResultsVisible = {
   searchpo.select_first_suggestion()
}

export const selectFirstSuggestedOption = {
  
}
