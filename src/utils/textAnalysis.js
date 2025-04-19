/**
 * Analyzes text and returns statistics including character count,
 * word count, sentence count, paragraph count, and token count
 * 
 * @param {string} text - The input text to analyze
 * @return {Object} Object containing analysis results
 */
export const analyzeText = (text) => {
  // Default values for empty text
  if (!text || text.trim() === '') {
    return {
      characters: 0,
      charactersNoSpaces: 0,
      words: 0,
      sentences: 0,
      paragraphs: 0,
      tokens: 0,
    };
  }

  // Count characters (with spaces)
  const characters = text.length;
  
  // Count characters (without spaces)
  const charactersNoSpaces = text.replace(/\s/g, '').length;
  
  // Count words
  // This regex matches continuous sequences of characters (including hyphens, apostrophes)
  // surrounded by word boundaries or spaces
  const words = text.trim().split(/\s+/).filter(word => word.length > 0).length;
  
  // Count sentences
  // Match for sequences ending with ., !, ? followed by a space or end of text
  // This is a simplified approach that may not catch all edge cases
  const sentenceRegex = /[.!?]+(?:\s|$)/g;
  const sentences = (text.match(sentenceRegex) || []).length || 
                    // If no matches and text has content, count as 1 sentence
                    (text.trim().length > 0 ? 1 : 0);
  
  // Count paragraphs
  // Split text by one or more line breaks and count non-empty paragraphs
  const paragraphs = text
    .split(/\n+/)
    .filter(para => para.trim().length > 0)
    .length;
  
  // Count tokens
  // A simple tokenization that counts words, numbers, and punctuation as separate units
  const tokenRegex = /\w+|\S/g;
  const tokens = (text.match(tokenRegex) || []).length;
  
  return {
    characters,
    charactersNoSpaces,
    words,
    sentences,
    paragraphs,
    tokens,
  };
};

/**
 * Advanced text analysis helper functions for future expansion
 */

// Function to detect language (placeholder for future implementation)
export const detectLanguage = (text) => {
  // This would use language detection libraries or APIs
  return 'English'; // Default return for now
};

// Function to estimate reading time
export const estimateReadingTime = (wordCount) => {
  // Average reading speed: 200-250 words per minute
  const wordsPerMinute = 225;
  const minutes = wordCount / wordsPerMinute;
  
  return Math.ceil(minutes);
};

// Function for more sophisticated sentence detection
export const countSentencesAdvanced = (text) => {
  // This would handle edge cases like abbreviations, quotes, etc.
  // For now, we're using the simpler implementation in the main function
  return text.split(/[.!?]+(?:\s|$)/).filter(s => s.trim().length > 0).length;
};
