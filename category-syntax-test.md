# Category Syntax Highlighting Test

This file demonstrates the new category syntax highlighting feature implemented in the Lobe Theme.

## Test Cases

### 1. Category Definition Examples
```
{characters:girl, boy, woman, man}
{styles:anime, realistic, cartoon, photorealistic}
{emotions:happy, sad, angry, surprised}
{colors:red, blue, green, yellow}
```

### 2. Category Reference Examples
```
{characters}
{styles}
{emotions}
{colors}
```

### 3. Mixed Content with Embeddings and LoRAs (TESTING CURRENT FIX)
```
{people:girl, boy, face, character}
{art_styles:anime, style, art_style, realistic}
{lighting:soft, dramatic, lighting, natural}
{test:term1, term2, term3, term4}
```

### 4. Weight Syntax Test Cases (TESTING CURRENT FIX)
```
{category:term1, (weighted_term:1.2), [another_term:0.8], regular_term}
{weights:(term1:1.5), [term2:0.9], (term3:2.0), normal_term}
{mixed:simple, (heavy:1.8), [light:0.3], medium}
```

### 5. Simple Test Cases
```
{category:term1, term2, term3}
{simple:word1, word2, word3}
{basic:test, example, sample}
```

### 4. Complex Prompt Examples
```
{characters:beautiful girl, handsome boy}, {styles:anime, realistic}, {lighting:soft, dramatic}
masterpiece, best quality, {people:girl, <embedding:face>}, {background:forest, mountains}
{characters} in {styles} with {lighting} and {background}
```

## Expected Highlighting Behavior

- **Category names** (the part before the colon or the entire content in references): **RED**
- **Curly brackets** `{}`: **PURPLE** (same as other brackets)
- **Embeddings** inside categories: **BLUE** (italic)
- **LoRA names** inside categories: **ORANGE**
- **Regular terms** inside categories: **GREEN**
- **Commas** inside categories: **GRAY**
- **Weight syntax** continues to work as before

## Implementation Details

The category syntax highlighting has been integrated into the existing prompt highlighting system:

1. **Theme Colors**: Added `colorRed` for category names and `category-name`, `category-bracket` scopes
2. **Grammar Patterns**: Added regex patterns for both category definitions and references
3. **Dynamic Grammar**: Modified to extract terms from inside category definitions for embedding verification
4. **Pattern Precedence**: Category patterns are processed before general bracket patterns to avoid conflicts

The implementation ensures that existing highlighting for embeddings, LoRAs, and weight syntax continues to work seamlessly within category definitions.
