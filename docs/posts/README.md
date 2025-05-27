---
layout: Layout
title: Blog
summary: Full-stack tutorials, dev insights, and project case studies.
---

<BlogList :items="posts" />
<script setup lang="ts">
  import { posts } from "@data/posts.js";
</script>
