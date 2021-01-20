// idCreator converts the article title in a url friendly link
export function idCreator(str) {
    return str.replace(/[\W_]+/g,"-").toLowerCase();
  }