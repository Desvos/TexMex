/**
 * Counts the number of words in a text
 * @param {string} text - The text to analyze
 * @returns {number} - The word count
 */
export function countWords(text) {
  if (!text || !text.trim()) return 0;
  
  // Split by whitespace and filter out empty strings
  const words = text.trim().split(/\s+/).filter(Boolean);
  return words.length;
}

/**
 * Counts the total number of characters in a text (including spaces)
 * @param {string} text - The text to analyze
 * @returns {number} - The character count
 */
export function countCharacters(text) {
  if (!text) return 0;
  return text.length;
}

/**
 * Counts the number of characters in a text, excluding spaces
 * @param {string} text - The text to analyze
 * @returns {number} - The character count without spaces
 */
export function countCharactersWithoutSpaces(text) {
  if (!text) return 0;
  return text.replace(/\s+/g, '').length;
}

/**
 * Counts the number of sentences or phrases in a text
 * @param {string} text - The text to analyze
 * @returns {number} - The sentence count
 */
export function countPhrases(text) {
  if (!text || !text.trim()) return 0;
  
  // Split by common sentence terminators and filter empty results
  const sentences = text
    .split(/[.!?]+/)
    .filter(sentence => sentence.trim().length > 0);
  
  return sentences.length;
}

/**
 * Counts the number of tokens in a text
 * A token is generally a word, number, punctuation mark, or other meaningful unit
 * @param {string} text - The text to analyze
 * @returns {number} - The token count
 */
export function countTokens(text) {
  if (!text || !text.trim()) return 0;
  
  // This is a simplified tokenization approach
  // For more advanced NLP tasks, a dedicated tokenization library would be better
  
  // Match words, numbers, and individual punctuation
  const tokenRegex = /\w+|[^\w\s]/g;
  const tokens = text.match(tokenRegex);
  
  return tokens ? tokens.length : 0;
}

/**
 * Advanced version - estimates token count similar to how GPT models count tokens
 * Note: This is a rough approximation and not an exact match to OpenAI's tokenizer
 * @param {string} text - The text to analyze
 * @returns {number} - Estimated token count
 */
export function estimateGptTokens(text) {
  if (!text || !text.trim()) return 0;
  
  // A very rough approximation - GPT models typically use ~4 chars per token on average
  // (This is not accurate for all languages or specialized text)
  const averageCharsPerToken = 4;
  return Math.ceil(text.length / averageCharsPerToken);
}
