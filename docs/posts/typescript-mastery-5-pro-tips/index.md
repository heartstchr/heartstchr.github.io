---
title: TypeScript - 5 Pro Tips to Cook Up Robust Code
description: Learn 5 expert TypeScript tips to craft scalable code, from optional parameters to utility types and advanced tricks like loose autocomplete. Perfect for all developers!
date: 2025-06-09
category: [Programming]
tag: [TypeScript, JavaScript, Web Development, Coding Tips]
---

<MetaContent :date="$frontmatter.date" :category="$frontmatter.tag"/>

Think of TypeScript as a master chef’s kitchen, where JavaScript is the raw ingredients. With TypeScript’s type system, you can craft delicious, bug-free code that scales like a perfectly plated dish. Whether you’re a beginner tossing together your first app or a seasoned developer perfecting a complex recipe, these five TypeScript tips will elevate your skills. Let’s get cooking!

## Key Optional vs. Value Optional: Seasoning Your Parameters

In our playlist app, imagine a function that logs user actions (e.g., adding a song) with a `sessionId` for analytics. Just like deciding whether to add salt to a dish, you need to choose between *key optional* and *value optional* parameters to avoid under- or over-seasoning your code.

- **Key Optional**: Marked with a `?` (e.g., `sessionId?: string`), this means the parameter can be skipped entirely. If you omit `sessionId` when logging actions, you might miss critical analytics in production, like forgetting salt in a soup.
- **Value Optional**: By requiring `sessionId: string | undefined`, you ensure the parameter is always passed, even if it’s `undefined`. This guarantees analytics tracking while allowing flexibility in testing, like adding a pinch of salt that can be “tasteless” in a test batch.
- **Recipe Tip**: Use value optional for parameters that must flow through your app’s functions, ensuring consistency. Keep key optional for public APIs where simplicity is key, like a clean menu for your restaurant’s guests.

This distinction ensures your app’s analytics are as reliable as a well-seasoned dish.

## Utility Types: Chopping and Slicing Your Types

TypeScript’s utility types—`Pick`, `Omit`, `Exclude`, and `Extract`—are like kitchen knives, letting you slice and dice types to fit your needs. Suppose your playlist app has a `Song` type with properties like `title`, `artist`, `duration`, and `genre`.

- **Pick**: Select specific properties, e.g., `Pick<Song, 'title' | 'artist'>` creates a type with only `title` and `artist`, like picking ingredients for a simple salad.
- **Omit**: Exclude properties, e.g., `Omit<Song, 'duration' | 'genre'>` removes `duration` and `genre`, perfect for a summary view of songs.
- **Exclude**: Remove types from a union, e.g., `Exclude<SongStatus, 'archived'>` filters out `archived` from a `SongStatus` union (`playing | paused | archived`), leaving only active statuses.
- **Extract**: Pull specific types from a union, e.g., `Extract<SongData, string>` extracts string-based metadata like `title` or `artist`.

These utilities let you craft precise types without altering the original, like preparing a dish without wasting ingredients.

## Pritify Type Helper: Plating Your Types Beautifully

Complex types in TypeScript can look like a messy kitchen counter after cooking. The `Pritify` type helper cleans them up, presenting a polished dish. In our playlist app, combining types for a `Song & PlaylistMetadata & Omit<User, 'id'>` creates an unreadable mess when hovered over.

- **Pritify’s Magic**: Wrapping the type in `Pritify<T>` flattens intersections into a single, readable object, like plating a dish elegantly for guests.
- **Use Case**: Essential for library authors who want users to see clear type definitions, ensuring a delightful developer experience.
- **Example**: A `Pritify<Song & Metadata>` type shows a clean `{ title: string, artist: string, playlistName: string }` instead of a jumbled intersection.

Pritify is your sous-chef for presenting complex types with style.

## Loose Autocomplete Trick: A Flexible Recipe Book

Imagine your playlist app integrates with a music API that supports known genres (`rock`, `jazz`, `pop`) but may add new ones. You want autocomplete for known genres but flexibility for future ones. Enter the loose autocomplete trick, like a recipe book that suggests classics but allows improvisation.

- **Problem**: A union type like `type Genre = 'rock' | 'jazz' | 'pop'` restricts inputs to known genres, but adding `| string` loses autocomplete.
- **Solution**: Use `(Genre | string) & {}`. This preserves autocomplete for `rock`, `jazz`, and `pop` while allowing any string, like adding a new spice to your dish.
- **Why It Works**: The `& {}` delays type collapse, keeping autocomplete intact, much like keeping a recipe’s core ingredients while allowing tweaks.

This trick, used in libraries like React, balances structure and flexibility, like a chef’s signature dish with room for creativity.

## Mapped Types: Remixing Your Ingredients

Mapped types are like remixing ingredients to create new dishes from a base recipe. In our playlist app, you might have a `Song` type and want to transform it into a new format, like adding “get” prefixes to properties.

- **Syntax**: Use `{ [K in keyof Song]: ... }` to iterate over keys. For example, `{ [K in keyof Song]: [K, Song[K]] }` creates tuples like `['title', string]`.
- **Creative Uses**:
  - Remap keys with `as`, e.g., `{ [K in keyof Song as get${Capitalize<K>}]: Song[K] }` creates `getTitle`, `getArtist`.
  - Combine with `Readonly` or `Partial` for read-only or optional properties.
- **Example**: Transform `Song` into `{ getTitle: () => string, getArtist: () => string }` for a getter-based API.

Mapped types let you remix types creatively, like turning a basic stew into a gourmet dish.

## Discriminated Unions with Mapped Types

To make your playlist app’s state management robust, convert a `SongActions` object into a discriminated union. Imagine `{ play: { songId: string }, pause: { reason: string } }`.

- **Steps**:
  - Map over `keyof SongActions` to create `{ [K in keyof SongActions]: { type: K } & SongActions[K] }`.
  - Index with `keyof SongActions` to extract values as a union, e.g., `{ type: 'play', songId: string } | { type: 'pause', reason: string }`.
  - Wrap in `Pritify` for a clean display.
- **Analogy**: Like labeling each dish with its main ingredient (e.g., “play” or “pause”), making it easy to handle specific cases.

This technique, using the immediately indexed mapped type, creates type-safe unions, like a menu where every dish is clearly defined.

## Why These Tips Are Your Secret Sauce

These TypeScript tips are like a chef’s secret ingredients, transforming your code from bland to brilliant. From optional parameters to advanced type transformations, they ensure your apps are scalable and maintainable. Start cooking up robust TypeScript code today, and share your favorite recipes in the comments!