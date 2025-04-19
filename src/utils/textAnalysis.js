/**
 * Analyzes text and returns statistics including character count,
 * word count, sentence count, paragraph count, and token count
 * 
 * @param {string} text - The input text to analyze
 * @return {Object} Object containing analysis results
 */
export const analyzeText = (text) => {
  if (!text || typeof text !== 'string') {
    return {
      characterCount: 0,
      wordCount: 0,
      sentenceCount: 0,
      paragraphCount: 0,
      tokenCount: 0,
      readingTime: '0 min'
    };
  }

  const cleanText = text.trim();
  
  // Count characters (including spaces)
  const characterCount = cleanText.length;
  
  // Count characters (excluding spaces)
  const characterCountNoSpaces = cleanText.replace(/\s/g, '').length;
  
  // Count words
  const words = cleanText.match(/\b\w+\b/g) || [];
  const wordCount = words.length;
  
  // Count sentences (using advanced algorithm)
  const sentenceCount = countSentencesAdvanced(cleanText);
  
  // Count paragraphs - better paragraph detection
  const paragraphs = cleanText.split(/\n\s*\n/).filter(p => p.trim().length > 0);
  const paragraphCount = paragraphs.length || 1;
  
  // Estimate token count (rough approximation for GPT models)
  const tokenCount = Math.ceil(characterCount / 4);
  
  // Calculate estimated reading time
  const readingTime = estimateReadingTime(wordCount);
  
  return {
    characterCount,
    characterCountNoSpaces,
    wordCount,
    sentenceCount,
    paragraphCount,
    tokenCount,
    readingTime
  };
};

/**
 * Basic language detection based on character frequency
 * This is a simplified approach and not comprehensive
 * 
 * @param {string} text - The input text
 * @return {string} Detected language name
 */
export const detectLanguage = (text) => {
  if (!text || text.length < 10) return 'Not enough text';
  
  // This is a very simplified language detection
  // For real applications, use a dedicated library
  
  // Check for common English patterns
  const englishPattern = /\b(the|and|is|in|to|of|a|for|with)\b/i;
  if (englishPattern.test(text)) return 'English';
  
  // Check for Spanish patterns
  const spanishPattern = /\b(el|la|los|las|es|en|y|con|para|por)\b/i;
  if (spanishPattern.test(text)) return 'Spanish';
  
  // Check for French patterns
  const frenchPattern = /\b(le|la|les|dans|et|pour|avec|sur|ce|cette)\b/i;
  if (frenchPattern.test(text)) return 'French';
  
  // Check for special characters that might indicate other languages
  if (/[а-яА-Я]/.test(text)) return 'Russian';
  if (/[α-ωΑ-Ω]/.test(text)) return 'Greek';
  if (/[\u3040-\u30FF]/.test(text)) return 'Japanese';
  if (/[\u4E00-\u9FFF]/.test(text)) return 'Chinese';
  
  return 'Unknown';
};

/**
 * Estimates reading time based on word count
 * 
 * @param {number} wordCount - Number of words in the text
 * @return {string} Estimated reading time as a string
 */
export const estimateReadingTime = (wordCount) => {
  // Average reading speed: ~200-250 words per minute
  const wordsPerMinute = 225;
  const minutes = Math.max(1, Math.ceil(wordCount / wordsPerMinute));
  
  if (minutes === 1) {
    return '1 min';
  } else {
    return `${minutes} mins`;
  }
};

/**
 * More advanced sentence counting that handles various punctuation
 * 
 * @param {string} text - The input text
 * @return {number} Number of sentences
 */
export const countSentencesAdvanced = (text) => {
  if (!text) return 0;
  
  // This regex looks for sentence endings followed by a space or end of string
  const sentences = text.split(/[.!?]+(?=\s|$)/);
  
  // Filter out empty strings that might result from multiple punctuation
  return sentences.filter(s => s.trim().length > 0).length;
};