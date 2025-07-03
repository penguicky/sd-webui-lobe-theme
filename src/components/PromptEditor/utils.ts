import { Converter } from '@/scripts/formatPrompt';
import { isValidEmbedding } from '@/services/embeddingService';

import { TagItem } from './TagList';

export const genTagType = (tag: TagItem): TagItem => {
  const newTag = tag;
  if (newTag.text.includes('<lora')) {
    newTag.className = 'ReactTags__lora';
  } else if (newTag.text.includes('<hypernet')) {
    newTag.className = 'ReactTags__hypernet';
  } else if (newTag.text.includes('<embedding')) {
    newTag.className = 'ReactTags__embedding';
  } else {
    newTag.className = undefined;
  }
  return newTag;
};

/**
 * Enhanced tag type generator with API-based embedding verification
 */
export const genTagTypeWithVerification = async (tag: TagItem): Promise<TagItem> => {
  const newTag = { ...tag };

  if (newTag.text.includes('<lora')) {
    newTag.className = 'ReactTags__lora';
  } else if (newTag.text.includes('<hypernet')) {
    newTag.className = 'ReactTags__hypernet';
  } else if (newTag.text.includes('<embedding:')) {
    // Extract embedding name from <embedding:name> format
    const embeddingMatch = newTag.text.match(/<embedding:([^>]+)>/);
    if (embeddingMatch) {
      const embeddingName = embeddingMatch[1].trim();
      try {
        const isValid = await isValidEmbedding(embeddingName);
        newTag.className = isValid ? 'ReactTags__embedding_valid' : 'ReactTags__embedding_invalid';
      } catch {
        // On error, fall back to generic embedding class
        newTag.className = 'ReactTags__embedding';
      }
    } else {
      newTag.className = 'ReactTags__embedding';
    }
  } else if (newTag.text.includes('<embedding')) {
    // Legacy embedding format without colon
    newTag.className = 'ReactTags__embedding';
  } else {
    newTag.className = undefined;
  }

  return newTag;
};

export const formatPrompt = (value: string) => {
  const text = Converter.convertStr(value);
  const textArray = Converter.convertStr2Array(text).map((item) => {
    if (item.includes('<')) return item;
    const newItem = item
      .replaceAll(/\s+/g, ' ')
      .replaceAll(/，|\.\|。/g, ',')
      .replaceAll(/“|‘|”|"|\/'/g, '')
      .replaceAll(', ', ',')
      .replaceAll(',,', ',')
      .replaceAll(',', ', ');
    return Converter.convertStr2Array(newItem).join(', ');
  });
  return textArray.map((tag) => genTagType({ id: tag.trim(), text: tag.trim() }));
};
