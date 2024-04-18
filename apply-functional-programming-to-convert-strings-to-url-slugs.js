/*Fill in the urlSlug function so it converts a string title and returns the hyphenated version for the URL. You can use any of the methods covered in this section, and don't use replace.*/



// Only change code below this line
function urlSlug(title) {
const trimmedTitle = title.trim();
const words = trimmedTitle.split(/\s+/);

  // Filter out any empty strings from the array of words
  const filteredWords = words.filter(word => word.length > 0);

  const lowerCaseWords = words.map(word => word.toLowerCase());
  const urlSlug = lowerCaseWords.join("-");

  return urlSlug;

}
// Only change code above this line
urlSlug("A Mind Needs Books Like A Sword Needs A Whetstone");