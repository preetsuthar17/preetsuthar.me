---
title: Add a badge to the filename in Fumadocs
excerpt: How to add a badge to the filename in Fumadocs
author: Preet Suthar
date: "2025-05-04"
---

This is the type of badge you can add to the filename in Fumadocs.

![image](https://pbs.twimg.com/media/GqGozTTbAAAj1ay?format=png&name=360x360)

It is very easy to add a badge to the filename in Fumadocs.

first step is to extend the frontmatter schema.

go to `source.config.ts` file in root folder of fumadocs project and add the following code.

```ts
export const docs = defineDocs({
  docs: {
    schema: frontmatterSchema.extend({
      new: z.boolean().default(false),
    }),
  },
});
```

now we can basically add the frontmatter prop in `lib/source.ts` file.

> Make sure to rename the `lib/source.ts` to `lib/source.tsx`

```ts
export const source = loader({
  baseUrl: "/docs",
  source: docs.toFumadocsSource(),
  pageTree: {
    attachFile(node, file) {
      if (!file) return node;

      const data = file.data.data as {
        new: boolean;
      };

      // JSX nodes are allowed
      if (data.new) {
        node.name = (
          <>
            {node.name}
            <div className="bg-fd-primary">NEW</div>
          </>
        );
      }

      return node;
    },
  },
});
```

now to use this we can just use `new` prop in the frontmatter.

```plaintext
---
title: File Upload
description: Animated and interactive file upload component.
new: true
---
```

final result would be like this.

![image](https://pbs.twimg.com/media/GqGozTTbAAAj1ay?format=png&name=360x360)
