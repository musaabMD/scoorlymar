// // Updated parser functions to handle both HTML and JSON data formats

// /**
//  * Parse MCQs from either HTML string or JSON array
//  * @param {string|Array} mcqsData - MCQ content in HTML or JSON array format
//  * @returns {Array} - Array of parsed MCQ objects
//  */
// export const parseMcqs = (mcqsData) => {
//     // If mcqsData is already an array, it's in the JSON format
//     if (Array.isArray(mcqsData)) {
//       return mcqsData.map((mcq, index) => ({
//         id: index,
//         question: mcq.question,
//         options: mcq.options,
//         answer: mcq.answer,
//         explanation: mcq.explanation
//       }));
//     }
    
//     // Otherwise, parse from HTML format
//     const mcqDivs = mcqsData.split('<div class="mb-8 p-4 border rounded-lg">');
    
//     const parsedMcqs = mcqDivs.filter(div => div.trim()).map((div, index) => {
//       const question = div.match(/<h3[^>]*>(.*?)<\/h3>/s)?.[1] || `Question ${index + 1}`;
      
//       // Extract options
//       const options = [];
//       const optionMatches = div.matchAll(/<li[^>]*>(\s*[A-D]\)\s*)(.*?)(?:<\/li>)/g);
      
//       let correctOptionIndex;
//       for (const match of optionMatches) {
//         const optionText = match[2].replace('✅ ', '');
//         const isCorrect = match[0].includes('text-green-600');
//         if (isCorrect) {
//           correctOptionIndex = options.length;
//         }
//         options.push(optionText);
//       }
      
//       // Extract explanation
//       const explanation = div.match(/<p><strong>Explanation:<\/strong>\s*(.*?)<\/p>/s)?.[1] || '';
      
//       return { 
//         id: index, 
//         question, 
//         options, 
//         answer: correctOptionIndex, 
//         explanation 
//       };
//     });
    
//     return parsedMcqs.filter(mcq => mcq.options.length > 0);
//   };
  
//   /**
//    * Parse Review items from either HTML table or JSON array
//    * @param {string|Array} reviewData - Review content in HTML or JSON array format
//    * @returns {Array} - Array of parsed review item objects
//    */
//   export const parseReviewItems = (reviewData) => {
//     // If reviewData is already an array, it's in the JSON format
//     if (Array.isArray(reviewData)) {
//       return reviewData.map((item, index) => ({
//         id: index,
//         question: item.question,
//         answer: item.answer
//       }));
//     }
    
//     // Otherwise, parse from HTML format
//     const rows = reviewData.match(/<tr>[\s\S]*?<\/tr>/g) || [];
//     const parsedItems = [];
    
//     for (let i = 1; i < rows.length; i++) { // Skip header row
//       const questionMatch = rows[i].match(/<td[^>]*>(.*?)<\/td>/);
//       const answerMatch = rows[i].match(/<td[^>]*>.*?<\/td>\s*<td[^>]*>(.*?)<\/td>/);
      
//       if (questionMatch && answerMatch) {
//         parsedItems.push({
//           id: i - 1,
//           question: questionMatch[1],
//           answer: answerMatch[1]
//         });
//       }
//     }
    
//     return parsedItems;
//   };
'use client';

// Parse MCQs from HTML content
export const parseMcqs = (htmlContent) => {
  // This is a simplified parser for the demo
  // In a real app, you would use a proper HTML parser
  const mcqBlocks = htmlContent.split('<div class="mb-8 p-4 border rounded-lg">');
  
  // Remove the first empty element
  mcqBlocks.shift();
  
  return mcqBlocks.map((block, index) => {
    // Extract question
    const questionMatch = block.match(/<h3 class="mb-2">(.*?)<\/h3>/);
    const question = questionMatch ? questionMatch[1] : '';
    
    // Extract options
    const optionsMatches = [...block.matchAll(/<li class="ml-5(?:.*?)">(.*?)<\/li>/g)];
    const options = optionsMatches.map(match => {
      const isCorrect = match[0].includes('text-green-600');
      const text = match[1].replace(/✅ /, ''); // Remove checkmark from correct answer
      return { text, isCorrect };
    });
    
    // Extract explanation
    const explanationMatch = block.match(/<p><strong>Explanation:<\/strong>(.*?)<\/p>/);
    const explanation = explanationMatch ? explanationMatch[1] : '';
    
    return {
      id: index + 1,
      question,
      options,
      explanation
    };
  });
};

// Parse review items from HTML content
export const parseReviewItems = (htmlContent) => {
  // This is a simplified parser for the demo
  // In a real app, you would use a proper HTML parser
  
  // Extract rows from the table
  const rowMatches = [...htmlContent.matchAll(/<tr>\s*<td class="border p-2">(.*?)<\/td>\s*<td class="border p-2">(.*?)<\/td>\s*<\/tr>/g)];
  
  return rowMatches.map((match, index) => {
    return {
      id: index + 1,
      question: match[1],
      answer: match[2]
    };
  });
};